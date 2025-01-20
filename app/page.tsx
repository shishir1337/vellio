import { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

const Hero = dynamic(() => import("@/components/home/hero"), {
  loading: () => <Skeleton className="w-full h-screen" />,
})
const Investment = dynamic(() => import("@/components/home/investment"), {
  loading: () => <Skeleton className="w-full h-96" />,
})
const Features = dynamic(() => import("@/components/home/features"), {
  loading: () => <Skeleton className="w-full h-96" />,
})

export const metadata: Metadata = {
  title: "Vellio Properties: UK Property Investment and Management",
  description:
    "Vellio Properties is a property investment and management company operating in the UK to redefine the real estate market and uplift communities and businesses.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <Investment />
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <Features />
      </Suspense>
    </>
  )
}

