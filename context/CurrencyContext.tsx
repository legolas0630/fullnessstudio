'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Currency = 'USD' | 'MXN'

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (usdAmount: number) => string
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('MXN')
  const [usdToMxnRate, setUsdToMxnRate] = useState<number>(18.5) // Safe baseline baseline

  useEffect(() => {
    // 1. Restore previous preference if available
    const saved = localStorage.getItem('user-currency') as Currency
    if (saved) setCurrencyState(saved)

    // 2. Fetch cached real-time exchange rates from our Route Handler
    fetch('/api/rates')
      .then((res) => res.json())
      .then((data) => {
        if (data.MXN) setUsdToMxnRate(data.MXN)
      })
      .catch((err) => console.error("Error setting live currency rate:", err))
  }, [])

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency)
    localStorage.setItem('user-currency', newCurrency)
  }

  const formatPrice = (usdAmount: number) => {
    if (currency === 'MXN') {
      const mxnAmount = Math.round(usdAmount * usdToMxnRate)
      return `$${mxnAmount} MXN`
    }
    return `$${usdAmount} USD`
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) throw new Error('useCurrency must be used within a CurrencyProvider')
  return context
}