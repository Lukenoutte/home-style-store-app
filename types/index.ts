import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type IProduct = {
  name: string;
  description: string;
  id: string;
  price: number;
  images: { url: string; }[]
  mainImage: { url: string; },
  currency: string;
}