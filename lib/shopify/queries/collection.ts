import productFragment from "../fragments/product";
import seoFragment from "../fragments/seo";

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    featured: metafield(namespace: "custom", key: "featured") {
      value
    }
    cardColor: metafield(namespace: "custom", key: "card_color") {
      value
    }
    image {
      url
      altText
      width
      height
    }
    updatedAt
  }
  ${seoFragment}
`;

export const getCollectionQuery = /* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
`;

export const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: UPDATED_AT, reverse: true) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`;

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`;
