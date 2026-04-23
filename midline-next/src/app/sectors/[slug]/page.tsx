import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MIDLINE_SECTORS } from '@/lib/data'
import CompanyCard from '@/components/CompanyCard'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(MIDLINE_SECTORS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sector = MIDLINE_SECTORS[slug]
  if (!sector) return {}
  const plainTitle = sector.title.replace(/<[^>]*>/g, '')
  return {
    title: plainTitle,
    description: sector.blurb,
  }
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params
  const sector = MIDLINE_SECTORS[slug]
  if (!sector) notFound()

  const plainTitle = sector.title.replace(/<[^>]*>/g, '')

  return (
    <>
      <section className="subhero" aria-label={sector.label}>
        <div className="section-label section-label-static">{sector.label}</div>
        <h1 className="subhero-title">
          {sector.icon}{' '}
          <span dangerouslySetInnerHTML={{ __html: sector.title }} />
        </h1>
        <p className="subhero-copy">{sector.blurb}</p>
      </section>

      <section className="sector-page-shell">
        <div className="sector-page-intro">
          <div>
            <div className="section-label section-label-static">Sector Focus</div>
            <p className="sector-page-copy">{sector.intro}</p>
          </div>
          <div className="sector-page-stat">
            <span>Companies</span>
            <strong>{sector.companies.length}</strong>
          </div>
        </div>

        <div className="detail-sections" style={{ padding: '40px 0 0', maxWidth: 'none' }}>
          <article className="detail-panel revealed">
            <div className="detail-head">
              <div>
                <div className="detail-eyebrow">Our {plainTitle} Companies</div>
                <h3 className="detail-title">
                  {plainTitle} portfolio in <em>one page</em>
                </h3>
              </div>
            </div>
            <div className="company-list">
              {sector.companies.map((company) => (
                <CompanyCard key={company.name} company={company} />
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
