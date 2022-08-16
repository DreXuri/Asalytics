import { gql } from "@apollo/client";

export const GET_LIST = gql`
  query getAsalist {
    asalist {
      result {
        assetId
        name
        logo
        available
      }
    }
  }
`;
