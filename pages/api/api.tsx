import Papa from "papaparse";
import axios from "axios";

import { Product } from "../../types/types";
import { information } from "../../utils/constants";

export default {
  list: async (): Promise<Product[]> => {
    return axios.get(information.db_sheet, { responseType: "blob" }).then(
      (response: any) =>
        new Promise<Product[]>((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => {
              const products = results.data as Product[];
              return resolve(
                products.map((product) => ({
                  ...product,
                  price: Number(product.price)
                }))
              );
            },
            error: (error) => reject(error.message)
          });
        })
    );
  }
};
