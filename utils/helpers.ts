import {CartItem, Product} from "../types/types";

export default function parseCurrency(value: number): string {
    return value.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS"
    });
  }



export function editCart(product: Product, action: "increment" | "decrement"|"delete") {
  return (cart: CartItem[]): CartItem[] => {
    const isInCart = cart.some((item) => item.id === product.id);

    if (!isInCart) {
      return cart.concat({...product, quantity: 1});
    }

    return cart.reduce((acc, _product) => {
      if (product.id !== _product.id) {
        return acc.concat(_product);
      }

      switch (action) {
        case "decrement": {
          if (_product.quantity === 1) {
            return acc;
          }

          return acc.concat({..._product, quantity: _product.quantity - 1});
        }
     

        case "increment": {
          return acc.concat({..._product, quantity: _product.quantity + 1});
        };
        case "delete":{
          return acc.splice({..._product});
        };

        default: {
          return acc.concat(_product);
        }
      }
    }, []);
  };
}