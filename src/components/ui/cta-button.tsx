
import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({
  variant = 'primary',
  size = 'default',
  children,
  className,
  ...props
}: CTAButtonProps) {
  const variantClasses = {
    primary: 'bg-naturalCloud-orange text-white hover:bg-opacity-90 shadow-lg',
    secondary: 'bg-naturalCloud-turquoise text-white hover:bg-opacity-90 shadow-md',
    outline: 'border-2 border-naturalCloud-green text-naturalCloud-green hover:bg-naturalCloud-green hover:bg-opacity-10',
  };
  
  const sizeClasses = {
    default: 'px-6 py-3 text-base',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Button 
      className={cn(
        'font-medium rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
