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
    toast.success('Link copied to clipboard!');
  };

  return (
    <Card ornate className={styles.fallback}>
      <div className={styles.content}>
        <Smartphone size={48} className={styles.icon} />
        <h3 className={styles.title}>Open on Smartphone for AR</h3>
        <p className={styles.description}>
          Scan QR code or copy link to open product on mobile device
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
            <span>Copy Link</span>
          </Button>
        </CopyToClipboard>

        <p className={styles.hint}>
          Supports iOS (ARKit) and Android (ARCore)
        </p>
      </div>
    </Card>
  );
}
