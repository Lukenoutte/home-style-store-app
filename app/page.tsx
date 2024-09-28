"use client";

import { GET_PRODUCTS } from "@/queries/product-query";
import { IProduct } from "@/types"
import ProductCard from "@/components/product-card"
import { useQuery } from '@apollo/client';

export default function IndexPage() {
  const { loading, error, data } = useQuery<{ products: IProduct[] }>(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
      <div className="flex gap-4">
      { data && data.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      }
      </div>
  );
}
