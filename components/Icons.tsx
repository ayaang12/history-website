interface FlowerProps {
  color?: string;
  size?: number;
  className?: string;
}

export function FlowerSVG({ color = '#D4891A', size = 60, className = '' }: FlowerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <ellipse
          key={i}
          cx="30"
          cy="30"
          rx="8"
          ry="14"
          fill={color}
          opacity="0.85"
          transform={`rotate(${deg} 30 30) translate(0 -10)`}
        />
      ))}
      <circle cx="30" cy="30" r="8" fill="#F0C030" />
      <circle cx="30" cy="30" r="4" fill={color} />
    </svg>
  );
}

export function SunburstSVG({ color = '#D4891A', size = 80, className = '' }: FlowerProps) {
  const rays = Array.from({ length: 16 }, (_, i) => i * (360 / 16));
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {rays.map((deg, i) => (
        <line
          key={i}
          x1="40" y1="40"
          x2={40 + 38 * Math.sin((deg * Math.PI) / 180)}
          y2={40 - 38 * Math.cos((deg * Math.PI) / 180)}
          stroke={color}
          strokeWidth={i % 2 === 0 ? '2' : '1'}
          opacity="0.6"
        />
      ))}
      <circle cx="40" cy="40" r="14" fill={color} />
      <circle cx="40" cy="40" r="9" fill="#F0C030" />
    </svg>
  );
}

export function PeaceSVG({ size = 40, color = '#3D1F0A', className = '' }: FlowerProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="2.5" fill="none" />
      <line x1="20" y1="2" x2="20" y2="38" stroke={color} strokeWidth="2.5" />
      <line x1="20" y1="20" x2="5" y2="33" stroke={color} strokeWidth="2.5" />
      <line x1="20" y1="20" x2="35" y2="33" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}
