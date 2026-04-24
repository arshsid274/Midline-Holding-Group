'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Plane,
  HardHat,
  Apple,
  Flame,
  Sparkles,
  Sofa,
  Wrench,
  Pill,
  type LucideIcon,
} from 'lucide-react'
import { setFlipOrigin } from '@/lib/flipState'

type Sector = {
  id: number
  Icon: LucideIcon
  name: string
  desc: string
  count: string
  slug: string
  img: string
  video?: string
}

const SECTORS: Sector[] = [
  {
    id: 1, Icon: Plane, name: 'Aviation Services',
    desc: 'Private jet charter, aircraft management, MRO, and cargo services from Dubai.',
    count: '1 COMPANY', slug: 'aviation',
    img: '/assets/Airlines_Thumbnail.png',
    video: '/assets/Airlines.mp4',
  },
  {
    id: 2, Icon: HardHat, name: 'Construction & Contracting',
    desc: 'General contracting, architecture, civil engineering, and real estate across UAE.',
    count: '5 COMPANIES', slug: 'construction',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3, Icon: Apple, name: 'Food Industry',
    desc: 'Food trading, manufacturing, juice, dairy, pasta, and bottled water production.',
    count: '8 COMPANIES', slug: 'food',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4, Icon: Flame, name: 'Oil & Gas Services',
    desc: 'Petroleum services, exploration support, logistics and supply chain management.',
    count: '3 COMPANIES', slug: 'oilgas',
    img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5, Icon: Sparkles, name: 'Perfumes & Beauty',
    desc: 'Luxury Arabic and French fragrances, present in 7+ countries worldwide.',
    count: '2 COMPANIES', slug: 'perfumes',
    img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6, Icon: Sofa, name: 'Al Sanidan Furniture',
    desc: 'Premium Turkish-crafted furniture for homes across Dubai and Sharjah, UAE.',
    count: '1 COMPANY', slug: 'furniture',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 7, Icon: Wrench, name: 'Auto Spare Parts',
    desc: 'Auto spare parts for Japanese, Korean, and American vehicles — ISO certified.',
    count: '2 COMPANIES', slug: 'spareparts',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 8, Icon: Pill, name: 'Pharma Industry',
    desc: 'Pharmaceutical manufacturing and distribution across UAE and Libya.',
    count: '2 COMPANIES', slug: 'pharma',
    img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function SectorCarousel() {
  const router      = useRouter()
  const carouselRef = useRef<HTMLDivElement>(null)
  const sectionRef  = useRef<HTMLElement>(null)
  const triggered   = useRef(false)

  const [activeIndex, setActiveIndex] = useState(0)

  const isDown        = useRef(false)
  const startX        = useRef(0)
  const scrollLeftRef = useRef(0)
  const hasDragged    = useRef(false)

  // Reveal glass cards when section enters viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return
        triggered.current = true
        el.classList.add('sc-in-view')
        observer.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Wheel → horizontal scroll
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => { e.preventDefault(); el.scrollLeft += e.deltaY }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const handleScroll = () => {
    const el = carouselRef.current
    if (!el) return
    const ratio = el.scrollLeft / (el.scrollWidth - el.clientWidth)
    setActiveIndex(Math.min(SECTORS.length - 1, Math.max(0, Math.round((ratio || 0) * (SECTORS.length - 1)))))
  }

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current     = true
    hasDragged.current = false
    startX.current     = e.pageX - (carouselRef.current?.offsetLeft ?? 0)
    scrollLeftRef.current = carouselRef.current?.scrollLeft ?? 0
  }
  const onMouseLeave = () => { isDown.current = false }
  const onMouseUp    = () => { isDown.current = false }
  const onMouseMove  = (e: React.MouseEvent) => {
    if (!isDown.current || !carouselRef.current) return
    e.preventDefault()
    const walk = (e.pageX - carouselRef.current.offsetLeft - startX.current) * 2
    if (Math.abs(walk) > 5) hasDragged.current = true
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const openDetail = (sector: Sector, e: React.MouseEvent<HTMLDivElement>) => {
    if (hasDragged.current) return
    const imgEl = e.currentTarget.querySelector('img')
    if (!imgEl) return

    // Capture rect BEFORE any scroll change so coordinates are correct
    const rect = imgEl.getBoundingClientRect()

    // Paint bridge — covers both the home-page scroll-snap and the page transition
    const bridge = document.createElement('div')
    bridge.id = 'flip-bridge'
    Object.assign(bridge.style, {
      position: 'fixed', inset: '0',
      background: '#F0FAFF',
      zIndex: '8',
      pointerEvents: 'none',
    })
    document.body.appendChild(bridge)

    setFlipOrigin({
      rect,
      img:   sector.img,
      video: sector.video,
      Icon:  sector.Icon,
      name:  sector.name,
      desc:  sector.desc,
      count: sector.count,
    })

    router.push(`/sectors/${sector.slug}`, { scroll: false })
  }

  return (
    <section ref={sectionRef} className="sc-section">

      <div className="sc-header">
        <div className="section-label revealed">Our Sectors</div>
        <h2 className="section-title revealed">Eight industries. <em>One vision.</em></h2>
        <p className="section-body revealed">
          Midline&apos;s portfolio spans essential and high-growth industries — from energy and aviation to food,
          pharma, and premium retail.
        </p>
      </div>

      <div
        className="sc-carousel"
        ref={carouselRef}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {SECTORS.map((s) => (
          <div
            key={s.id}
            className="sc-item"
            onClick={(e) => openDetail(s, e)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.img} alt={s.name} draggable={false} className="sc-item-img" />
            <div className="sc-glass">
              <div className="sc-glass-icon"><s.Icon size={22} strokeWidth={1.5} /></div>
              <div className="sc-glass-name">{s.name}</div>
              <div className="sc-glass-desc">{s.desc}</div>
              <div className="sc-glass-footer">
                <span className="sc-glass-count">{s.count}</span>
                <Link
                  href={`/sectors/${s.slug}`}
                  className="sc-glass-cta"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Sector →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sc-pips">
        {SECTORS.map((_, i) => (
          <div key={i} className={`sc-pip${i === activeIndex ? ' active' : ''}`} />
        ))}
      </div>

    </section>
  )
}
