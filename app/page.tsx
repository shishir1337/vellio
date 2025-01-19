import { Suspense } from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

const Hero = dynamic(() => import('@/components/home/hero'), {
  loading: () => <Skeleton className="w-full h-screen" />,
})
const Investment = dynamic(() => import('@/components/home/investment'), {
  loading: () => <Skeleton className="w-full h-96" />,
})
const Features = dynamic(() => import('@/components/home/features'), {
  loading: () => <Skeleton className="w-full h-96" />,
})


export const metadata: Metadata = {
  title: 'Vellio Properties Ltd | Transforming the UK Property Market',
  description: 'Vellio Properties Ltd invests in and develops premier, high-quality properties across the UK, revolutionizing the real estate market through smart investment and management.',
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton className="w-full h-screen" />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <Investment />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <Features />
      </Suspense>
    </>
  )
}

