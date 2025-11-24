'use client';

import React from 'react';
import { Share2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '@/shared/ui';
import { shareProduct } from '@/shared/lib';

export interface ShareButtonProps {
  productId: string;
  productName: string;
}

export function ShareButton({ productId, productName }: ShareButtonProps) {
  const handleShare = async () => {
    const result = await shareProduct(productId, productName);

    if (result.success) {
      if (result.method === 'native') {
        toast.success('Товар успешно отправлен!');
      } else if (result.method === 'clipboard') {
        toast.success('Ссылка скопирована!');
      }
    } else {
      toast.error('Не удалось поделиться товаром');
    }
  };

  return (
    <Button variant="outline" onClick={handleShare}>
      <Share2 size={20} />
      <span>Поделиться</span>
    </Button>
  );
}
