// Clean SVG Icons for Footy Social

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function FootballIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
      <path d="M12 2C12 2 14 6 14 12C14 18 12 22 12 22" stroke={color} strokeWidth="1.5" />
      <path d="M12 2C12 2 10 6 10 12C10 18 12 22 12 22" stroke={color} strokeWidth="1.5" />
      <path d="M2 12H22" stroke={color} strokeWidth="1.5" />
      <path d="M4 7H20" stroke={color} strokeWidth="1.5" />
      <path d="M4 17H20" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function TrophyIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 21H16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17V21" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M7 4H17V10C17 13.866 14.7614 17 12 17C9.23858 17 7 13.866 7 10V4Z" stroke={color} strokeWidth="2" />
      <path d="M7 7H4C4 7 3 7 3 8V9C3 11 4.5 12 6 12H7" stroke={color} strokeWidth="2" />
      <path d="M17 7H20C20 7 21 7 21 8V9C21 11 19.5 12 18 12H17" stroke={color} strokeWidth="2" />
      <path d="M7 4H17" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
    </svg>
  );
}

export function TargetIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  );
}

export function QuestionIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <path d="M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12V14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1" fill={color} />
    </svg>
  );
}

export function BrainIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4C8 4 6 6 6 9C4 9 3 11 3 13C3 15 4 17 7 17C7 19 9 21 12 21C15 21 17 19 17 17C20 17 21 15 21 13C21 11 20 9 18 9C18 6 16 4 12 4Z" stroke={color} strokeWidth="2" />
      <path d="M12 4V21" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

export function CrystalBallIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="10" r="8" stroke={color} strokeWidth="2" />
      <path d="M7 20H17" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 18H16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M9 6C10 5 11 5 12 5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" />
    </svg>
  );
}

export function UsersIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="7" r="3" stroke={color} strokeWidth="2" />
      <circle cx="17" cy="7" r="3" stroke={color} strokeWidth="2" />
      <path d="M3 21V19C3 16.7909 4.79086 15 7 15H11C13.2091 15 15 16.7909 15 19V21" stroke={color} strokeWidth="2" />
      <path d="M15 15H17C19.2091 15 21 16.7909 21 19V21" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function ClockIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <path d="M12 6V12L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="2" width="14" height="20" rx="3" stroke={color} strokeWidth="2" />
      <path d="M10 18H14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PartyIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 21L8 3L20 15L4 21Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 3L12 10L20 15" stroke={color} strokeWidth="2" />
      <circle cx="18" cy="5" r="2" fill={color} />
      <circle cx="21" cy="9" r="1.5" fill={color} />
    </svg>
  );
}

export function ArrowRightIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeftIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDownIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RefreshIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M1 4V10H7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 20V14H17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MaskIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3C7 3 3 7 3 10C3 13 5 15 7 15C9 15 10 14 12 14C14 14 15 15 17 15C19 15 21 13 21 10C21 7 17 3 12 3Z" stroke={color} strokeWidth="2" />
      <circle cx="8" cy="10" r="2" fill={color} />
      <circle cx="16" cy="10" r="2" fill={color} />
    </svg>
  );
}

export function CrossIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 6L6 18M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Flag icons as simple colored rectangles with stripes
interface FlagIconProps extends IconProps {
  country: string;
}

const flagColors: Record<string, string[]> = {
  'England': ['#fff', '#CE1124'],
  'Norway': ['#BA0C2F', '#fff', '#00205B'],
  'Egypt': ['#CE1126', '#fff', '#000'],
  'Belgium': ['#000', '#FAE042', '#ED2939'],
  'Brazil': ['#009739', '#FEDD00'],
  'Portugal': ['#006600', '#FF0000'],
  'Netherlands': ['#AE1C28', '#fff', '#21468B'],
  'France': ['#002395', '#fff', '#ED2939'],
  'Spain': ['#AA151B', '#F1BF00', '#AA151B'],
  'Germany': ['#000', '#DD0000', '#FFCC00'],
  'Argentina': ['#74ACDF', '#fff', '#74ACDF'],
  'Uruguay': ['#0038A8', '#fff'],
  'Colombia': ['#FCD116', '#003893', '#CE1126'],
  'Senegal': ['#00853F', '#FDEF42', '#E31B23'],
  'Morocco': ['#C1272D', '#006233'],
  'Ivory Coast': ['#FF8200', '#fff', '#009A44'],
  'Nigeria': ['#008751', '#fff', '#008751'],
  'Ghana': ['#EF3340', '#FCD116', '#006B3F'],
  'Cameroon': ['#007A5E', '#CE1126', '#FCD116'],
  'Algeria': ['#006633', '#fff', '#D21034'],
  'South Korea': ['#fff', '#C60C30', '#003478'],
  'Japan': ['#fff', '#BC002D'],
  'Poland': ['#fff', '#DC143C'],
};

// Flags that use horizontal bicolor (top/bottom)
const horizontalBicolor = ['Poland', 'Ukraine', 'Monaco', 'Indonesia'];

// Flags that use vertical tricolor
const verticalTricolor = ['France', 'Belgium', 'Nigeria', 'Ivory Coast', 'Ireland'];

export function FlagIcon({ country, size = 24, className }: FlagIconProps) {
  const colors = flagColors[country] || ['#ccc', '#999', '#666'];
  const height = size * 0.67;

  // Special cases for specific flag designs
  if (country === 'England') {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="30" height="20" fill="#fff" />
        <rect x="12" y="0" width="6" height="20" fill="#CE1124" />
        <rect x="0" y="7" width="30" height="6" fill="#CE1124" />
      </svg>
    );
  }

  if (country === 'Japan') {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="30" height="20" fill="#fff" />
        <circle cx="15" cy="10" r="6" fill="#BC002D" />
      </svg>
    );
  }

  if (country === 'Brazil') {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="30" height="20" fill="#009739" />
        <path d="M15 2L28 10L15 18L2 10Z" fill="#FEDD00" />
        <circle cx="15" cy="10" r="4" fill="#002776" />
      </svg>
    );
  }

  if (country === 'Norway') {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="30" height="20" fill="#BA0C2F" />
        <rect x="8" y="0" width="6" height="20" fill="#fff" />
        <rect x="0" y="7" width="30" height="6" fill="#fff" />
        <rect x="9.5" y="0" width="3" height="20" fill="#00205B" />
        <rect x="0" y="8.5" width="30" height="3" fill="#00205B" />
      </svg>
    );
  }

  if (country === 'Argentina') {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="30" height="6.67" y="0" fill="#74ACDF" />
        <rect width="30" height="6.67" y="6.67" fill="#fff" />
        <rect width="30" height="6.67" y="13.33" fill="#74ACDF" />
        <circle cx="15" cy="10" r="2.5" fill="#F6B40E" />
      </svg>
    );
  }

  if (country === 'Spain') {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="30" height="5" y="0" fill="#AA151B" />
        <rect width="30" height="10" y="5" fill="#F1BF00" />
        <rect width="30" height="5" y="15" fill="#AA151B" />
      </svg>
    );
  }

  // Vertical tricolor flags (France, Belgium, etc)
  if (verticalTricolor.includes(country) && colors.length === 3) {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="10" height="20" x="0" fill={colors[0]} />
        <rect width="10" height="20" x="10" fill={colors[1]} />
        <rect width="10" height="20" x="20" fill={colors[2]} />
      </svg>
    );
  }

  // Horizontal bicolor (Poland, etc)
  if (horizontalBicolor.includes(country) && colors.length === 2) {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="30" height="10" y="0" fill={colors[0]} />
        <rect width="30" height="10" y="10" fill={colors[1]} />
      </svg>
    );
  }

  // Horizontal tricolor (Germany, Netherlands, Egypt, etc)
  if (colors.length === 3) {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="30" height="6.67" y="0" fill={colors[0]} />
        <rect width="30" height="6.67" y="6.67" fill={colors[1]} />
        <rect width="30" height="6.67" y="13.33" fill={colors[2]} />
      </svg>
    );
  }

  // Vertical bicolor (Portugal, etc)
  if (colors.length === 2) {
    return (
      <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
        <rect width="12" height="20" x="0" fill={colors[0]} />
        <rect width="18" height="20" x="12" fill={colors[1]} />
      </svg>
    );
  }

  // Default single color
  return (
    <svg width={size} height={height} viewBox="0 0 30 20" className={className} style={{ borderRadius: 2 }}>
      <rect width="30" height="20" fill={colors[0]} />
    </svg>
  );
}
