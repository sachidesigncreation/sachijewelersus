import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111010',
          color: '#fdfaf4',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 12, color: '#c9922a', marginBottom: 16 }}>
          JAIPUR · EST. IN CRAFTSMANSHIP
        </div>
        <div style={{ fontSize: 110, letterSpacing: 20, fontWeight: 300 }}>SACHI</div>
        <div style={{ fontSize: 30, letterSpacing: 6, color: '#f5e6c8', marginTop: 12 }}>
          Fine Jewellery Manufacturer &amp; Exporter
        </div>
      </div>
    ),
    { ...size }
  );
}
