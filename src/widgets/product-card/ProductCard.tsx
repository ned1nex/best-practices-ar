'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Product } from '@/shared/types';
import { formatPrice } from '@/shared/lib';
import { Card } from '@/shared/ui';
import styles from './ProductCard.module.css';

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card ornate hoverable className={styles.card}>
          <div className={styles.imageContainer}>
            <div className={styles.placeholder}>
              <span className={styles.brandBadge}>{product.brand}</span>
              {product.inStock ? (
                <span className={styles.stockBadge}>In Stock</span>
              ) : (
                <span className={`${styles.stockBadge} ${styles.outOfStock}`}>Out of Stock</span>
              )}
            </div>
          </div>

          <div className={styles.content}>
            <h3 className={styles.category}>{product.category}</h3>
            <h2 className={styles.name}>{product.name}</h2>

            <div className={styles.specs}>
              <div className={styles.spec}>
                {product.specifications.dimensions && (
                  <span>📐 {product.specifications.dimensions} см</span>
                )}
              </div>
              <div className={styles.spec}>
                {product.specifications.volume && (
                  <span>🧊 {product.specifications.volume}</span>
                )}
                {product.specifications.diagonal && (
                  <span>📺 {product.specifications.diagonal}</span>
                )}
                {product.specifications.capacity && (
                  <span>🧺 {product.specifications.capacity}</span>
                )}
              </div>
              <div className={styles.spec}>
                <span>⚡ Class {product.specifications.energyClass}</span>
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{formatPrice(product.price)}</span>
              </div>
              <div className={styles.viewButton}>
                View in AR →
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
