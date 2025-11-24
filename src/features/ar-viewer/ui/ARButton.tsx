'use client';

import React from 'react';
import { Smartphone } from 'lucide-react';
import { Button } from '@/shared/ui';
import { useDeviceDetection } from '@/shared/hooks';
import styles from './ARButton.module.css';

export interface ARButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function ARButton({ onClick, disabled }: ARButtonProps) {
  const device = useDeviceDetection();

  if (!device.supportsAR) {
    return null;
  }

  return (
    <Button
      variant="primary"
      size="large"
      fullWidth
      onClick={onClick}
      disabled={disabled}
      className={styles.arButton}
    >
      <Smartphone size={24} />
      <span>Посмотреть в моем пространстве</span>
    </Button>
  );
}
