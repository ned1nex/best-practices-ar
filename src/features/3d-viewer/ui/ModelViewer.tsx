'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import '@google/model-viewer';
import styles from './ModelViewer.module.css';

export interface ModelViewerProps {
  modelPath: string;
  usdzPath?: string;
  posterPath?: string;
  alt?: string;
  enableAR?: boolean;
  autoRotate?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export function ModelViewer({
  modelPath,
  usdzPath,
  posterPath,
  alt = '3D модель',
  enableAR = false,
  autoRotate = true,
  onLoad,
  onError,
}: ModelViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleLoad = () => {
      setIsLoading(false);
      onLoad?.();
    };

    const handleError = (event: Event) => {
      const errorMessage = 'Не удалось загрузить 3D модель';
      setError(errorMessage);
      setIsLoading(false);
      onError?.(new Error(errorMessage));
    };

    viewer.addEventListener('load', handleLoad);
    viewer.addEventListener('error', handleError);

    return () => {
      viewer.removeEventListener('load', handleLoad);
      viewer.removeEventListener('error', handleError);
    };
  }, [onLoad, onError]);

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Загрузка 3D модели...</p>
        </div>
      )}

      {error && (
        <div className={styles.error}>
          <div className={styles.errorMessage}>
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
          <p className={styles.errorHint}>Используется заглушка</p>
        </div>
      )}

      {React.createElement('model-viewer', {
        ref: viewerRef,
        src: modelPath,
        'ios-src': usdzPath,
        poster: posterPath,
        alt: alt,
        'shadow-intensity': '1',
        'camera-controls': true,
        'auto-rotate': autoRotate,
        'rotation-per-second': '30deg',
        ar: enableAR,
        'ar-modes': 'webxr scene-viewer quick-look',
        'ar-scale': 'fixed',
        'camera-orbit': '0deg 75deg 105%',
        'min-camera-orbit': 'auto auto 5%',
        'max-camera-orbit': 'auto auto 200%',
        'field-of-view': '30deg',
        loading: 'eager',
        style: {
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        },
      }, enableAR ? React.createElement('div', {
        slot: 'ar-button',
        style: { display: 'none' }
      }) : null)}
    </div>
  );
}
