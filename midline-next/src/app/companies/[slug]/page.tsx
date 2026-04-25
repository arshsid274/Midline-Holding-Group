import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCompanyBySlug, getAllCompanySlugs } from '@/lib/data'
import { getCompanyContent } from '@/lib/companyContent'
import CompanyInfoPages from '@/components/CompanyInfoPages'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllCompanySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const found = getCompanyBySlug(slug)
  if (!found) return {}
  return {
    title: found.company.name,
    description: found.company.desc,
  }
}

export default async function CompanyInfoRoute({ params }: Props) {
  const { slug } = await params
  const found = getCompanyBySlug(slug)
  if (!found) notFound()

  return (
    <CompanyInfoPages
      companyName={found.company.name}
      sectorTitle={found.sectorTitle}
      sectorSlug={found.sectorSlug}
      content={getCompanyContent(slug)}
    />
  )
}
