import productFragment from "../fragments/product";
import seoFragment from "../fragments/seo";

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    id
    handle
    title
    description
    seo {
      ...seo
    }
    featured: metafield(namespace: "custom", key: "featured") {
      value
    }
    subtitle: metafield(namespace: "custom", key: "subtitle") {
      value
    }
    image {
      url
      altText
      width
      height
    }
    cardOverlay: metafield(namespace: "custom", key: "card_overlay") {
      reference {
        ... on Metaobject {
          id
          handle
          color: field(key: "color") {
            value
          }
          direction: field(key: "direction") {
            value
          }
        }
      }
    }
    koreanTitle: metafield(namespace: "custom", key: "korean_title") {
      reference {
        ... on Metaobject {
          id
          handle
          title: field(key: "value") {
            value
          }
          orientation: field(key: "orientation") {
            value
          }
          position: field(key: "position") {
            value
          }
        }
      }
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

export const getLatestCollectionsQuery = /* GraphQL */ `
  query getLatestCollections {
    collections(first: 5, sortKey: UPDATED_AT, reverse: true) {
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
