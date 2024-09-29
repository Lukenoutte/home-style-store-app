import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
query GetAllProducts {
    products {
        id,
        name,
        price,
        currency,
        mainImage{
            url
        },
    }
}`

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    product(where: { id: $id }) {
      id,
      name,
      price,
      currency,
      description,
      images{
         url
      },
    }
  }
`;