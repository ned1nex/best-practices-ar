'use client';

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, Smartphone } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { Button, Card } from '@/shared/ui';
import { generateShareLink } from '@/shared/lib';
import styles from './DesktopARFallback.module.css';

export interface DesktopARFallbackProps {
  productId: string;
  productName: string;
}

export function DesktopARFallback({ productId, productName }: DesktopARFallbackProps) {
  const productUrl = generateShareLink(productId);

  const handleCopy = () => {
    toast.success('Ссылка скопирована!');
  };

  return (
    <Card ornate className={styles.fallback}>
      <div className={styles.content}>
        <Smartphone size={48} className={styles.icon} />
        <h3 className={styles.title}>Откройте на смартфоне для AR</h3>
        <p className={styles.description}>
          Отсканируйте QR-код или скопируйте ссылку для открытия на мобильном устройстве
        </p>

        <div className={styles.qrContainer}>
          <div className={styles.qrCode}>
            <QRCodeSVG
              value={productUrl}
              size={200}
              level="H"
              includeMargin={true}
              fgColor="var(--color-dark)"
              bgColor="transparent"
            />
          </div>
        </div>

        <CopyToClipboard text={productUrl} onCopy={handleCopy}>
          <Button variant="secondary" fullWidth className={styles.copyButton}>
            <Copy size={20} />
            <span>Копировать ссылку</span>
          </Button>
        </CopyToClipboard>

        <p className={styles.hint}>
          Поддерживает iOS (ARKit) и Android (ARCore)
        </p>
      </div>
    </Card>
  );
}
