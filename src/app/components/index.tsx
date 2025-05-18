import dynamic from 'next/dynamic'

const MainMint = dynamic(() => import('@/components/MainMint'), { ssr: false })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <MainMint />
    </main>
  )
}