'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { type Company, companySlug } from '@/lib/data'
import styles from './CompanyElicaStack.module.css'

interface Props {
  companies: Company[]
  sectorTitle: string
  totalCompanies?: number
}

export default function CompanyElicaStack({ companies, sectorTitle, totalCompanies }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const count = totalCompanies ?? companies.length
  const router = useRouter()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    const ctx = gsap.context(() => {
      const section = sectionRef.current
      if (!section) return

      // ── 3D card scroll-away (matches ElicaCards original) ──
      // All cards except the last get both animations.
      // Last card stays visible — no pin, no animation.
      const slides = section.querySelectorAll<HTMLElement>(`.${styles.slide}`)
      const total = slides.length

      slides.forEach((slide, idx) => {
        const wrap    = slide.querySelector<HTMLElement>(`.${styles.wrap}`)
        const content = slide.querySelector<HTMLElement>(`.${styles.content}`)
        if (!wrap || !content) return

        if (idx === total - 1) return // last card: leave it as-is

        // Rotation + scale via pinned ScrollTrigger
        gsap.to(content, {
          rotationZ: 10 * (Math.random() - 0.1),
          scale: 0.9,
          rotationX: 40,
          ease: 'power1.in',
          scrollTrigger: {
            pin: wrap,
            trigger: slide,
            start: 'top 0%',
            end: `+=${window.innerHeight}`,
            scrub: true,
          },
        })

        // Separate fade-out trigger — starts when card has scrolled 80% past viewport top
        gsap.to(content, {
          autoAlpha: 0,
          ease: 'power1.in',
          scrollTrigger: {
            trigger: content,
            start: 'top -80%',
            end: `+=${0.2 * window.innerHeight}`,
            scrub: true,
          },
        })
      })

      // ── Image/video parallax reveal ──
      slides.forEach((slide) => {
        const wraps = slide.querySelectorAll<HTMLElement>(`.${styles.imageWrap}`)
        if (!wraps.length) return

        gsap.from(wraps, {
          xPercent: (_i: number, el: Element) => parseFloat(el.getAttribute('data-x') ?? '0') || 0,
          yPercent: (_i: number, el: Element) => parseFloat(el.getAttribute('data-y') ?? '0') || 0,
          opacity: 0,
          ease: 'expo.out',
          duration: 1.8,
          stagger: 0.1,
          scrollTrigger: { trigger: slide, start: 'top center' },
        })
      })

      // ── Split-text heading reveal ──
      const timings = {
        lines: { duration: 1.2, stagger: 0.08 },
        words: { duration: 1.0, stagger: 0.05 },
        chars: { duration: 0.8, stagger: 0.03 },
      } as const

      section.querySelectorAll<HTMLElement>('[data-split-reveal]').forEach((el) => {
        const revealType = (el.getAttribute('data-split-reveal') ?? 'lines') as keyof typeof timings
        const typeList =
          revealType === 'lines' ? 'lines'
          : revealType === 'words' ? 'lines, words'
          : 'lines, words, chars'

        const split = SplitText.create(el, { type: typeList, mask: 'lines', autoSplit: true })
        const targets = split[revealType] as HTMLElement[]
        const { duration, stagger } = timings[revealType]

        gsap.from(targets, {
          yPercent: 110,
          duration,
          stagger,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'clamp(top 80%)', once: true },
          onComplete: () => split.revert(),
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>

      <div className={styles.stickyLabel}>
        <span className={styles.stickyLabelText}>Our {sectorTitle} Companies</span>
        <span className={styles.stickyCounter}>— {count} {count === 1 ? 'company' : 'companies'}</span>
      </div>

      {companies.map((company, i) => (
        <div key={company.name} className={styles.slide}>
          <div className={styles.wrap}>
            <div
              className={styles.content}
              role="link"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => router.push(`/companies/${companySlug(company.name)}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  router.push(`/companies/${companySlug(company.name)}`)
                }
              }}
            >

              {/* ── Top: eyebrow → [logo + title inline] ── */}
              <div className={styles.contentTop}>
                <p className={styles.eyebrow}>{company.type}</p>
                <div className={styles.logoTitleRow}>
                  {company.logo && (
                    <div className={styles.logoPlate}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className={styles.companyLogo}
                      />
                    </div>
                  )}
                  <h2 data-split-reveal="lines" className={styles.heading}>
                    {company.name}
                  </h2>
                </div>
              </div>

              {/* ── Bottom: 3-layer media + info (absolutely covers card) ── */}
              <div className={styles.contentBottom}>

                {/* Media cluster — primary in flow, secondary/tertiary float absolutely */}
                <div className={styles.contentImages}>

                  {/* Primary — sits in flex flow at card bottom-left */}
                  <div
                    data-x="0"
                    data-y="50"
                    className={`${styles.imageWrap} ${styles.imageWrapMain}`}
                  >
                    {company.video ? (
                      <video
                        muted playsInline loop autoPlay
                        className={styles.cardVideo}
                        src={company.video}
                        poster={company.photo ?? undefined}
                      />
                    ) : company.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={company.photo} alt={company.name} loading="lazy" className={styles.cardImage} />
                    ) : (
                      <div className={styles.cardPlaceholder}>
                        {company.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Secondary — floats above and to the right of primary */}
                  <div
                    data-x="-30"
                    data-y="100"
                    className={`${styles.imageWrap} ${styles.imageWrapSecondary}`}
                  >
                    {company.photos?.[0] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={company.photos[0]} alt="" loading="lazy" className={styles.cardImage} />
                    ) : (
                      <div className={`${styles.cardPlaceholder} ${styles.cardPlaceholderB}`} />
                    )}
                  </div>

                  {/* Tertiary — floats further right and higher */}
                  <div
                    data-x="-60"
                    data-y="120"
                    className={`${styles.imageWrap} ${styles.imageWrapTertiary}`}
                  >
                    {company.photos?.[1] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={company.photos[1]} alt="" loading="lazy" className={styles.cardImage} />
                    ) : (
                      <div className={`${styles.cardPlaceholder} ${styles.cardPlaceholderC}`} />
                    )}
                  </div>
                </div>

                {/* Right: tags + desc + link + index */}
                <div className={styles.contentRight}>
                  <div className={styles.tags}>
                    {company.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                    <span className={`${styles.tag} ${styles.tagType}`}>{company.type}</span>
                  </div>
                  <p className={styles.body}>{company.desc}</p>
                  {company.link && (
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      ↗ {company.link.replace(/https?:\/\//, '')}
                    </a>
                  )}
                  <span className={styles.cardNumber}>
                    {String(i + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

    </section>
  )
}
