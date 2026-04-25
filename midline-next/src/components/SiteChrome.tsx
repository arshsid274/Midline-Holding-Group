'use client'

import { usePathname } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Aurora from '@/components/Aurora'
import Cursor from '@/components/Cursor'
import Particles from '@/components/Particles'
import ProgressBar from '@/components/ProgressBar'
import PageTransition from '@/components/PageTransition'

const BARE_PATTERNS = [/^\/companies\/[^/]+\/?$/]

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? ''
  const bare = BARE_PATTERNS.some((re) => re.test(pathname))

  if (bare) return <>{children}</>

  return (
    <>
      <Aurora />
      <Particles />
      <Cursor />
      <ProgressBar />
      <Nav />
      <PageTransition>
        {children}
        <Footer />
      </PageTransition>
    </>
  )
}
