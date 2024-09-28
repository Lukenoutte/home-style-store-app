import { IProduct } from "@/types";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";

export default function Product ({ product }: { product: IProduct }) {
    const { mainImage } = product
    function formatCurrency(value: number, currencyCode: string) {
      const numberFormat = new Intl.NumberFormat('en-US', { 
        style: 'currency', currency: currencyCode 
      })
      return numberFormat.format(value);
    }

    return (<Card shadow="sm" isPressable>
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
  </Card>)
}