const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  focusable: "false",
  "aria-hidden": true
} as const;

export function JourneyIcon({ iconKey }: { iconKey: string }) {
  if (["smile", "profile"].includes(iconKey)) {
    return <svg {...iconProps}><circle cx="12" cy="12" r="8.5" /><path d="M8 13.5c1 1.6 2.4 2.4 4 2.4s3-.8 4-2.4M9 9.5h.01M15 9.5h.01" /></svg>;
  }
  if (["sparkle", "cleaning"].includes(iconKey)) {
    return <svg {...iconProps}><path d="m11 3 1.5 4.2L17 9l-4.5 1.8L11 15l-1.5-4.2L5 9l4.5-1.8L11 3Z" /><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" /></svg>;
  }
  if (["tooth-alert", "pain", "broken-tooth", "restoration", "tooth", "shield-tooth"].includes(iconKey)) {
    return <svg {...iconProps}><path d="M12 4.2c-1.8 0-2.4-1-4.2-1-2.6 0-4 2.2-4 4.4 0 4.6 2.3 12.8 4.1 12.8 1.5 0 1.4-5.4 4.1-5.4s2.6 5.4 4.1 5.4c1.8 0 4.1-8.2 4.1-12.8 0-2.2-1.4-4.4-4-4.4-1.8 0-2.4 1-4.2 1Z" />{iconKey === "tooth-alert" || iconKey === "pain" ? <path d="M13 8.2 11.2 11h3l-1.8 2.8" /> : null}</svg>;
  }
  if (iconKey === "braces") {
    return <svg {...iconProps}><rect x="3.5" y="9" width="5" height="6" rx="1.3" /><rect x="15.5" y="9" width="5" height="6" rx="1.3" /><path d="M8.5 12h7" /></svg>;
  }
  if (["alert", "swelling"].includes(iconKey)) {
    return <svg {...iconProps}><path d="M12 3.5 21 20H3L12 3.5Z" /><path d="M12 9v5M12 17h.01" /></svg>;
  }
  if (iconKey === "family") {
    return <svg {...iconProps}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3.5 20c.4-4 2.2-6 5.5-6s5.1 2 5.5 6M14 15c3.5-.8 5.7.9 6.2 4" /></svg>;
  }
  if (iconKey === "clipboard" || iconKey === "specialist") {
    return <svg {...iconProps}><rect x="5" y="4.5" width="14" height="16" rx="2" /><path d="M9 4.5V3h6v1.5M8.5 10h7M8.5 14h5" /></svg>;
  }
  return <svg {...iconProps}><circle cx="12" cy="12" r="8.5" /><path d="M9.5 9.5a2.6 2.6 0 0 1 5 .8c0 1.7-2.5 2-2.5 3.5M12 17h.01" /></svg>;
}
