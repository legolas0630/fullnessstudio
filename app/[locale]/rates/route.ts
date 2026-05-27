import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Next.js automatically caches this fetch request globally for 12 hours
    const response = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 43200 } 
    })

    if (!response.ok) throw new Error('Failed to fetch rates')

    const data = await response.json()
    
    return NextResponse.json({
      MXN: data.rates.MXN,
      updated: data.time_last_update_utc
    })
  } catch (error) {
    // Fallback hardcoded rate if the network or external API goes down entirely
    return NextResponse.json({ MXN: 18.5, error: true }, { status: 200 })
  }
}