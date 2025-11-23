import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  ornate?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = '',
  ornate = false,
  hoverable = false,
  onClick,
}: CardProps) {
  const classes = [
    styles.card,
    ornate && styles.ornate,
    hoverable && styles.hoverable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}
