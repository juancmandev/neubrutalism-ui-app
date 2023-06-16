'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NextLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function NextLink({ href, className, children }: NextLinkProps) {
  const currentRoute = usePathname();

  return (
    <Link
      href={href}
      className={`hover:underline ${
        currentRoute === href ? 'font-semibold' : ''
      } ${className}`}>
      {children}
    </Link>
  );
}
