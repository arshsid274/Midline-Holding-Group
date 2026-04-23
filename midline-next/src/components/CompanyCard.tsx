import type { Company } from '@/lib/data'

interface Props {
  company: Company
}

export default function CompanyCard({ company }: Props) {
  return (
    <div className="company-card">
      <div className="company-name">{company.name}</div>
      <div className="company-meta">
        {company.tags.map((tag) => (
          <span key={tag} className="company-tag">{tag}</span>
        ))}
        <span className="company-tag type">{company.type}</span>
      </div>
      <div className="company-desc">{company.desc}</div>
      {company.link && (
        <a href={company.link} target="_blank" rel="noopener noreferrer" className="company-link">
          ↗ {company.link.replace(/https?:\/\//, '')}
        </a>
      )}
    </div>
  )
}
