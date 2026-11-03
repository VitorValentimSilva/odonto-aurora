/* Elementos compartilhados pelas imagens geradas com next/og. */

export const brandColors = {
  primary: "#0f6f7c",
  primaryDark: "#134b5c",
  warm: "#f2a27c",
  warmLight: "#fde3d3",
  background: "#f7fbfb",
  foreground: "#14313d",
};

export function ToothMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="12" fill={brandColors.primary} />
      <path d="M7 27a13 13 0 0 1 26 0" fill="none" stroke={brandColors.warm} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M13.4 12.6c1.9-1.5 4.2-1.2 6.6-.2 2.4-1 4.7-1.3 6.6.2 2 1.6 2 4.6 1.2 7.4-.6 2-1 3.9-1.5 6-.4 1.6-2.2 1.9-2.9.4l-1.6-3.8c-.5-1.1-1.1-1.4-1.8-1.4s-1.3.3-1.8 1.4l-1.6 3.8c-.7 1.5-2.5 1.2-2.9-.4-.5-2.1-.9-4-1.5-6-.8-2.8-.8-5.8 1.2-7.4Z"
        fill="#fff"
      />
    </svg>
  );
}
