export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  long_description: string;
  image: string;
  price: number;
  quantity: number;
}
export interface CartItem extends Product {
  quantity: number;
}
