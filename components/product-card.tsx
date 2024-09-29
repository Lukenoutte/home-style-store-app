import { IProduct } from "@/types";
import { formatCurrency } from "@/utils";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import Link from 'next/link';

export default function Product ({ product }: { product: IProduct }) {
    const { mainImage } = product

    return (
  <Link href={`/product/${product.id}`}>
    <Card shadow="sm" isPressable>
      <CardBody className="overflow-visible p-2 w-[300px]">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={product.name}
          className="w-full object-contain h-[160px]"
          src={mainImage.url}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{product.name}</b>
        <p className="text-default-500">{formatCurrency(product.price, product.currency)}</p>
      </CardFooter>
    </Card>
  </Link>)
}