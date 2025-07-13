'use client';

import Link from 'next/link';
import { Button } from './Button';

export function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <div className="relative pb-[100%] bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="absolute h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-primary transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary">${product.price}</span>
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}