import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Guitar Guide - Learn Guitar Step by Step';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: '180px', marginBottom: '20px' }}>🎸</div>
        <div
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '10px',
          }}
        >
          Guitar Guide
        </div>
        <div
          style={{
            fontSize: '30px',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          Learn Guitar Step by Step
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}