'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Ruler, Box, Monitor, Package, Zap } from 'lucide-react';
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
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <Card ornate hoverable className={styles.card}>
          <div className={styles.cardLayout}>
            <div className={styles.imageContainer}>
              <img
                src={product.posterPath}
                alt={product.name}
                className={styles.image}
              />
              <span className={styles.brandBadge}>{product.brand}</span>
              {product.inStock ? (
                <span className={styles.stockBadge}>В наличии</span>
              ) : (
                <span className={`${styles.stockBadge} ${styles.outOfStock}`}>Нет в наличии</span>
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.category}>{product.category}</h3>
                <h2 className={styles.name}>{product.name}</h2>
              </div>

              <div className={styles.specs}>
                {product.specifications.dimensions && (
                  <div className={styles.spec}>
                    <Ruler size={16} className={styles.icon} />
                    <span>{product.specifications.dimensions} см</span>
                  </div>
                )}
                {product.specifications.volume && (
                  <div className={styles.spec}>
                    <Box size={16} className={styles.icon} />
                    <span>{product.specifications.volume}</span>
                  </div>
                )}
                {product.specifications.diagonal && (
                  <div className={styles.spec}>
                    <Monitor size={16} className={styles.icon} />
                    <span>{product.specifications.diagonal}</span>
                  </div>
                )}
                {product.specifications.capacity && (
                  <div className={styles.spec}>
                    <Package size={16} className={styles.icon} />
                    <span>{product.specifications.capacity}</span>
                  </div>
                )}
                <div className={styles.spec}>
                  <Zap size={16} className={styles.icon} />
                  <span>Класс {product.specifications.energyClass}</span>
                </div>
              </div>

              <div className={styles.footer}>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{formatPrice(product.price)}</span>
                </div>
                <div className={styles.viewButton}>
                  Просмотр в AR
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
