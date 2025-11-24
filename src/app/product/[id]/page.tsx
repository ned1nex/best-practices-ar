'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Info, Check, X } from 'lucide-react';
import { Container, Button, Card } from '@/shared/ui';
import { getProductById } from '@/entities/product';
import { formatPrice } from '@/shared/lib';
import { useDeviceDetection } from '@/shared/hooks';
import { ModelViewer } from '@/features/3d-viewer';
import { ARButton, DesktopARFallback } from '@/features/ar-viewer';
import { ShareButton } from '@/features/share';
import styles from './page.module.css';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const device = useDeviceDetection();
  const modelViewerRef = useRef<HTMLDivElement>(null);

  const productId = params.id as string;
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className={styles.page}>
        <Container>
          <div className={styles.notFound}>
            <h1>Товар не найден</h1>
            <Link href="/">
              <Button variant="primary">Вернуться в каталог</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const handleARClick = () => {
    // Trigger AR mode on model-viewer
    const modelViewer = modelViewerRef.current?.querySelector('model-viewer') as any;
    if (modelViewer && modelViewer.activateAR) {
      modelViewer.activateAR();
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.backLink}>
              <ArrowLeft size={25 } />
             
            </Link>
            <div className={styles.headerActions}>
              <ShareButton productId={product.id} productName={product.name} />
            </div>
          </div>
        </Container>
      </header>

      <main className={styles.main}>
        <Container>
          <div className={styles.breadcrumbs}>
            <Link href="/">Каталог</Link>
            <span>/</span>
            <Link href="/">{product.category}</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.productContainer}
          >
            <div className={styles.viewerSection} ref={modelViewerRef}>
              <div className={styles.viewerContainer}>
                <ModelViewer
                  modelPath={product.modelPath}
                  usdzPath={product.usdzPath}
                  posterPath={product.posterPath}
                  alt={product.name}
                  enableAR={device.supportsAR}
                  autoRotate={true}
                />
              </div>

              {device.supportsAR && (
                <div className={styles.arButtonContainer}>
                  <ARButton onClick={handleARClick} />
                </div>
              )}

              {device.isDesktop && (
                <DesktopARFallback
                  productId={product.id}
                  productName={product.name}
                />
              )}
            </div>

            <div className={styles.infoSection}>
              <Card ornate className={styles.infoCard}>
                <div className={styles.brandBadge}>{product.brand}</div>
                <h1 className={styles.productName}>{product.name}</h1>
                <p className={styles.articleNumber}>Артикул: {product.articleNumber}</p>

                <div className={styles.priceSection}>
                  <div className={styles.price}>{formatPrice(product.price)}</div>
                  <div className={`${styles.stock} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
                    {product.inStock ? (
                      <>
                        <Check size={16} />
                        <span>В наличии</span>
                      </>
                    ) : (
                      <>
                        <X size={16} />
                        <span>Нет в наличии</span>
                      </>
                    )}
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="large"
                  fullWidth
                  disabled={!product.inStock}
                  className={styles.addToCartButton}
                >
                  <ShoppingCart size={20} />
                  <span>Добавить в корзину</span>
                </Button>

                <div className={styles.specs}>
                  <h3 className={styles.specsTitle}>
                    <Info size={20} />
                    Характеристики
                  </h3>
                  <dl className={styles.specsList}>
                    <div className={styles.specItem}>
                      <dt>Размеры (ШxВxГ)</dt>
                      <dd>{product.specifications.dimensions} см</dd>
                    </div>
                    {product.specifications.volume && (
                      <div className={styles.specItem}>
                        <dt>Объем</dt>
                        <dd>{product.specifications.volume}</dd>
                      </div>
                    )}
                    {product.specifications.diagonal && (
                      <div className={styles.specItem}>
                        <dt>Диагональ</dt>
                        <dd>{product.specifications.diagonal}</dd>
                      </div>
                    )}
                    {product.specifications.capacity && (
                      <div className={styles.specItem}>
                        <dt>Вместимость</dt>
                        <dd>{product.specifications.capacity}</dd>
                      </div>
                    )}
                    <div className={styles.specItem}>
                      <dt>Энергопотребление</dt>
                      <dd>{product.specifications.energyClass}</dd>
                    </div>
                    <div className={styles.specItem}>
                      <dt>Цвет</dt>
                      <dd>{product.specifications.color}</dd>
                    </div>
                  </dl>
                </div>
              </Card>
            </div>
          </motion.div>
        </Container>
      </main>
    </div>
  );
}
