import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  variant?: 'default' | 'solid';
  children: string | ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Button = ({
  variant = 'default',
  size = 'lg',
  children,
  onClick,
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        variant === 'default' ? styles.defaultButton : styles.solidButton,
        styles[size],
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
