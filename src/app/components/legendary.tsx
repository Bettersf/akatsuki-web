import dynamic from 'next/dynamic'

const LegendaryMint = dynamic(() => import('@/components/LegendaryMint'), { ssr: false })

export default function LegendaryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <LegendaryMint />
    </main>
  )
}