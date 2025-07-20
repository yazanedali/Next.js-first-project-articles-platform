'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkWithSpinnerProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkWithSpinner({ href, children, className }: LinkWithSpinnerProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={className}
      onClick={() => setIsNavigating(true)}
      style={{
        position: "relative",
        display: "inline-block",
        margin: "5px 0",
        color: isActive ? '#3b82f6' : 'inherit'
      }}
    >
      {children}
      {isNavigating && (
        <span style={{ marginLeft: 10, fontSize: 12 }}>⏳ جاري التحميل...</span>
      )}
    </Link>
  );
}
