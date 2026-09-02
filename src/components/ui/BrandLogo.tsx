import { COMPANY_NAME } from '../../data/brand'

interface BrandLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClass = {
  sm: 'h-8 max-w-[140px] sm:h-9 sm:max-w-[160px]',
  md: 'h-9 max-w-[150px] sm:h-11 sm:max-w-[190px]',
  lg: 'h-12 max-w-[180px] sm:h-14 sm:max-w-[220px]',
}

export function BrandLogo({ className = '', size = 'md' }: BrandLogoProps) {
  return (
    <span className={`inline-flex max-w-full items-center ${className}`}>
      <img
        src="/logo.png"
        alt={COMPANY_NAME}
        className={`brand-logo w-auto object-contain object-left ${sizeClass[size]}`}
      />
    </span>
  )
}
