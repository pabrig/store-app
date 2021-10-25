import React, { FC } from "react";
import type { GetStaticProps } from "next";

import HomeContainer from "../containers/HomeContainer";
import { Product } from "../types/types";
import api from "./api/api";

interface Props {
  products: Product[];
}

const IndexRoute: FC<Props> = ({ products }) => {
  return (
    <>
      <HomeContainer products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();
  return {
    props: {
      products
    }
    // Refresh Cache info
    //revalidate: 5
  };
};

export default IndexRoute;
