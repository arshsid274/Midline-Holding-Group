'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
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

type Sector = {
  id: number
  Icon: LucideIcon
  name: string
  desc: string
  count: string
  href: string
  img: string
  video?: string
}

const SECTORS: Sector[] = [
  {
    id: 1, Icon: Plane, name: 'Aviation Services',
    desc: 'Private jet charter, aircraft management, MRO, and cargo services from Dubai.',
    count: '1 COMPANY', href: '/companies',
    img: '/assets/Airlines_Thumbnail.png',
    video: '/assets/Airlines.mp4',
  },
  {
    id: 2, Icon: HardHat, name: 'Construction & Contracting',
    desc: 'General contracting, architecture, civil engineering, and real estate across UAE.',
    count: '5 COMPANIES', href: '/companies',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3, Icon: Apple, name: 'Food Industry',
    desc: 'Food trading, manufacturing, juice, dairy, pasta, and bottled water production.',
    count: '8 COMPANIES', href: '/companies',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4, Icon: Flame, name: 'Oil & Gas Services',
    desc: 'Petroleum services, exploration support, logistics and supply chain management.',
    count: '3 COMPANIES', href: '/companies',
    img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5, Icon: Sparkles, name: 'Perfumes & Beauty',
    desc: 'Luxury Arabic and French fragrances, present in 7+ countries worldwide.',
    count: '2 COMPANIES', href: '/companies',
    img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6, Icon: Sofa, name: 'Al Sanidan Furniture',
    desc: 'Premium Turkish-crafted furniture for homes across Dubai and Sharjah, UAE.',
    count: '1 COMPANY', href: '/companies',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 7, Icon: Wrench, name: 'Auto Spare Parts',
    desc: 'Auto spare parts for Japanese, Korean, and American vehicles — ISO certified.',
    count: '2 COMPANIES', href: '/companies',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 8, Icon: Pill, name: 'Pharma Industry',
    desc: 'Pharmaceutical manufacturing and distribution across UAE and Libya.',
    count: '2 COMPANIES', href: '/companies',
    img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1200&auto=format&fit=crop',
  },
]

type DetailState = Sector & { rect: DOMRect }

export default function SectorCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const sectionRef  = useRef<HTMLElement>(null)
  const triggered   = useRef(false)

  const [activeIndex,    setActiveIndex]    = useState(0)
  const [detailData,     setDetailData]     = useState<DetailState | null>(null)
  const [isDetailActive, setIsDetailActive] = useState(false)
  const [videoVisible,   setVideoVisible]   = useState(false)

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

  // Photo → video crossfade: fires when FLIP animation lands
  useEffect(() => {
    if (!isDetailActive || !detailData?.video) return
    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    video.play().catch(() => {})

    const show = () => setVideoVisible(true)

    // Start crossfade just as the 0.9s FLIP animation finishes
    const timer = setTimeout(() => {
      video.readyState >= 3 ? show() : video.addEventListener('canplay', show, { once: true })
    }, 820)

    return () => {
      clearTimeout(timer)
      video.removeEventListener('canplay', show)
      video.pause()
    }
  }, [isDetailActive, detailData])

  const handleScroll = () => {
    const el = carouselRef.current
    if (!el) return
    const ratio = el.scrollLeft / (el.scrollWidth - el.clientWidth)
    setActiveIndex(Math.min(SECTORS.length - 1, Math.max(0, Math.round((ratio || 0) * (SECTORS.length - 1)))))
  }

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true
    hasDragged.current = false
    startX.current = e.pageX - (carouselRef.current?.offsetLeft ?? 0)
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
    setVideoVisible(false)
    setDetailData({ ...sector, rect: imgEl.getBoundingClientRect() })
    requestAnimationFrame(() => requestAnimationFrame(() => setIsDetailActive(true)))
  }

  const closeDetail = () => {
    setIsDetailActive(false)
    setVideoVisible(false)
    videoRef.current?.pause()
    setTimeout(() => setDetailData(null), 900)
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
            style={{ opacity: detailData ? 0 : 1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.img} alt={s.name} draggable={false} className="sc-item-img" />
            <div className="sc-glass">
              <div className="sc-glass-icon"><s.Icon size={22} strokeWidth={1.5} /></div>
              <div className="sc-glass-name">{s.name}</div>
              <div className="sc-glass-desc">{s.desc}</div>
              <div className="sc-glass-footer">
                <span className="sc-glass-count">{s.count}</span>
                <Link href={s.href} className="sc-glass-cta" onClick={(e) => e.stopPropagation()}>
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

      {detailData && (
        <div className={`sc-detail${isDetailActive ? ' active' : ''}`} onClick={closeDetail}>
          <button className="sc-back" onClick={closeDetail}>← Back</button>

          <div className="sc-detail-content" onClick={(e) => e.stopPropagation()}>
            <div className="sc-detail-icon"><detailData.Icon size={36} strokeWidth={1.5} /></div>
            <h2 className="sc-detail-title">{detailData.name}</h2>
            <p className="sc-detail-desc">{detailData.desc}</p>
            <span className="sc-detail-count">{detailData.count}</span>
          </div>

          {/* FLIP image — fades out once video is ready */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="sc-detail-img"
            src={detailData.img}
            alt=""
            style={{
              top: detailData.rect.top,
              left: detailData.rect.left,
              width: detailData.rect.width,
              height: detailData.rect.height,
              opacity: videoVisible ? 0 : 1,
            }}
          />

          {/* Video — already at final expanded position, fades in over the image */}
          {detailData.video && (
            <video
              ref={videoRef}
              className="sc-detail-video"
              src={detailData.video}
              preload="auto"
              muted
              playsInline
              loop
              style={{ opacity: videoVisible ? 1 : 0 }}
            />
          )}
        </div>
      )}
    </section>
  )
}
