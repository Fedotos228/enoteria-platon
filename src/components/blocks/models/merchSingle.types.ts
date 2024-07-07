export type ColorTypes = {
  id: number;
  title: string;
  hex: string;
};

export type MerchSingleDetailsProps = {
  title: string;
  price: number;
  discount: number;
  colors: ColorTypes[];
  sizes: {
    id: number;
    name: string;
  }[];
};

export interface ISelectedOptions {
  color?: {
    id: number;
    title: string;
    hex: string;
  };
  size?: {
    id: number;
    name: string;
  };
}
