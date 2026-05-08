interface Props {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
}

export default function PageHeader({ eyebrow, title, highlight, description }: Props) {
  return (
    <div style={{ marginBottom: '56px' }}>
      {eyebrow && (
        <span className="badge" style={{ marginBottom: '20px', display: 'inline-flex' }}>
          {eyebrow}
        </span>
      )}
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 56px)',
        fontWeight: 300,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        color: 'var(--text)',
        marginBottom: description ? '16px' : 0,
      }}>
        {title}{' '}
        {highlight && <span className="text-gold-gradient">{highlight}</span>}
      </h1>
      {description && (
        <p style={{
          fontSize: '16px',
          color: 'var(--text-2)',
          lineHeight: 1.7,
          maxWidth: '560px',
          marginTop: '12px',
        }}>
          {description}
        </p>
      )}
    </div>
  )
}
