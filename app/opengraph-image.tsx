import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "Optival — L'agence IA pour PME"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0E1B2C',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(143,191,169,0.12) 0%, transparent 50%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <div style={{ width: '48px', height: '2px', backgroundColor: '#8FBFA9' }} />
          <span style={{ color: '#A8B5C4', fontSize: '24px', letterSpacing: '4px' }}>
            OPTIVAL
          </span>
        </div>
        <div
          style={{
            color: '#F4EFE6',
            fontSize: '76px',
            fontWeight: 600,
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          Vous gérez votre métier.
        </div>
        <div
          style={{
            color: '#8FBFA9',
            fontSize: '76px',
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: '48px',
          }}
        >
          On gère le reste.
        </div>
        <div style={{ color: '#A8B5C4', fontSize: '28px' }}>
          Automatisation et optimisation pour TPE/PME · Entreprise française
        </div>
      </div>
    ),
    { ...size }
  )
}
