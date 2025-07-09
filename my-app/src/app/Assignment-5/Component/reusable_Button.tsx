"use client";
import { CSSProperties, ReactNode, MouseEventHandler, ButtonHTMLAttributes, useState } from "react";

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

const styles = {
  base: {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  } as CSSProperties,
  variants: {
    primary: {
      backgroundColor: '#0070f3',
    },
    secondary: {
      backgroundColor: '#6c757d',
    },
    danger: {
      backgroundColor: '#dc3545',
    },
  } as Record<Variant, CSSProperties>,
  hoverColors: {
    primary: '#0059c1',
    secondary: '#545b62',
    danger: '#b52a37',
  } as Record<Variant, string>,
};

export default function Button({
  children,
  variant = 'primary',
  onClick,
  style = {},
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const combinedStyle: CSSProperties = {
    ...styles.base,
    ...styles.variants[variant],
    ...(hovered && { backgroundColor: styles.hoverColors[variant] }),
    ...style,
  };

  return (
    <button
      style={combinedStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}
