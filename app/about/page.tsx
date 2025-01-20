import { Suspense } from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

const AboutHero = dynamic(() => import('@/components/about/hero'), {
  loading: () => <Skeleton className="w-full h-screen" />,
})
const OurStory = dynamic(() => import('@/components/about/our-story'), {
  loading: () => <Skeleton className="w-full h-96" />,
})
const OurGoals = dynamic(() => import('@/components/about/our-goals'), {
  loading: () => <Skeleton className="w-full h-96" />,
})
const OurVision = dynamic(() => import('@/components/about/our-vision'), {
  loading: () => <Skeleton className="w-full h-96" />,
})
const OurValues = dynamic(() => import('@/components/about/our-values'), {
  loading: () => <Skeleton className="w-full h-96" />,
})
const JoinOurJourney = dynamic(() => import('@/components/about/join-our-journey'), {
  loading: () => <Skeleton className="w-full h-96" />,
})

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We are a growing property investment and management company in the UK, operating in all locations within the country.  ',
}

export default function About() {
  return (
    <>
      <AboutHero />
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <OurStory />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <OurGoals />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <OurVision />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <OurValues />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <JoinOurJourney />
      </Suspense>
    </>
  )
}

