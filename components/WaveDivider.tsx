interface Props {
  topColor: string
  bottomColor: string
  flip?: boolean
}

export default function WaveDivider({ topColor, bottomColor, flip = false }: Props) {
  return (
    <div style={{ backgroundColor: topColor, lineHeight: 0, display: 'block' }}>
      <svg
        viewBox="0 0 1440 72"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: '72px',
          transform: flip ? 'scaleX(-1)' : 'none',
        }}
        aria-hidden="true"
      >
        <path
          d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
