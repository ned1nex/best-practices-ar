'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/shared/ui';
import { products } from '@/entities/product';
import { ProductCard } from '@/widgets/product-card';
import styles from './page.module.css';

export default function CatalogPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerBackground}>
          <div className={styles.gradientBlur}></div>
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.headerContent}
          >
            <div className={styles.logoContainer}>
            <span className={styles.arBadge}>AR Experience</span>
              <h1 className={styles.logo}>M.VIDEO</h1>

            </div>
            <p className={styles.tagline}>
              Рассмотрите бытовую технику в вашем пространстве с дополненной реальностью
            </p>
          </motion.div>
        </Container>
      </header>

      <main className={styles.main}>
        <Container>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.catalog}
          >
            <div className={styles.catalogHeader}>
              <h2 className={styles.title}> Каталог <span className={styles.red_text}>товаров</span> </h2>
              <p className={styles.subtitle}>
                Выберите товар для просмотра в 3D и AR
              </p>
            </div>

            <div className={styles.grid}>
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </Container>
      </main>
    </div>
  );
}
