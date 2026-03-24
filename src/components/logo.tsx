export function MetaMindsLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Geometric M logo - angular chevron design */}
      {/* Top left chevron going down-right */}
      <path
        d="M10 30 L30 10 L50 30 L40 30 L30 20 L20 30 Z"
        fill="#3B8BF5"
      />
      {/* Top right chevron going down-left */}
      <path
        d="M50 30 L70 10 L90 30 L80 30 L70 20 L60 30 Z"
        fill="#3B8BF5"
      />
      {/* Bottom left V going up from bottom-left */}
      <path
        d="M10 35 L30 55 L50 35 L50 45 L30 65 L10 45 Z"
        fill="#3B8BF5"
      />
      {/* Bottom right V going up from bottom-right */}
      <path
        d="M50 35 L70 55 L90 35 L90 45 L70 65 L50 45 Z"
        fill="#3B8BF5"
      />
      {/* Center crossing element */}
      <path
        d="M30 55 L50 35 L70 55 L70 65 L50 45 L30 65 Z"
        fill="#3B8BF5"
      />
    </svg>
  );
}

export function MetaMindsLogoImage({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/logo.jpeg"
      alt="MetaMinds Logo"
      width={size}
      height={size}
      className={`rounded-xl object-cover ${className}`}
    />
  );
}
