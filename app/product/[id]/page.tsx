"use client";

import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_ID } from "@/queries/product-query";
import { IProduct } from "@/types"
import {Image} from "@nextui-org/image";
import { formatCurrency } from "@/utils";

export default function ProductDetails({ params }: { params: { id: number } }) {
  const { id } = params;
  const { loading, error, data } = useQuery<{ product: IProduct }>(GET_PRODUCT_BY_ID,
    { variables: { id } }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const product = data?.product
  return (<div>
    { product &&
      <>
      <p>Product: {product.name}</p>
      <p>{formatCurrency(product.price, product.currency)}</p>
      <Image
        width={300}
        alt={product.name}
        src={product.images[0].url}
      />
      <p className="mt-2">{product.description}</p>
      </>
    }
  </div>)
}