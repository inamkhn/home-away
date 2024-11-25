/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    firstName
    lastName
    username
    email
    profileImage
    createdAt
    updatedAt
    properties {
      nextToken
      __typename
    }
    favorites {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      username
      email
      profileImage
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const getProperty = /* GraphQL */ `query GetProperty($id: ID!) {
  getProperty(id: $id) {
    id
    name
    tagline
    category
    image
    country
    description
    price
    guests
    bedrooms
    beds
    baths
    amenities
    createdAt
    updatedAt
    profile {
      id
      firstName
      lastName
      username
      email
      profileImage
      createdAt
      updatedAt
      __typename
    }
    favorites {
      nextToken
      __typename
    }
    reviews {
      nextToken
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    profilePropertiesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPropertyQueryVariables,
  APITypes.GetPropertyQuery
>;
export const listProperties = /* GraphQL */ `query ListProperties(
  $filter: ModelPropertyFilterInput
  $limit: Int
  $nextToken: String
) {
  listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      tagline
      category
      image
      country
      description
      price
      guests
      bedrooms
      beds
      baths
      amenities
      createdAt
      updatedAt
      profilePropertiesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPropertiesQueryVariables,
  APITypes.ListPropertiesQuery
>;
export const getFavorite = /* GraphQL */ `query GetFavorite($id: ID!) {
  getFavorite(id: $id) {
    id
    createdAt
    updatedAt
    profile {
      id
      firstName
      lastName
      username
      email
      profileImage
      createdAt
      updatedAt
      __typename
    }
    property {
      id
      name
      tagline
      category
      image
      country
      description
      price
      guests
      bedrooms
      beds
      baths
      amenities
      createdAt
      updatedAt
      profilePropertiesId
      __typename
    }
    profileFavoritesId
    propertyFavoritesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFavoriteQueryVariables,
  APITypes.GetFavoriteQuery
>;
export const listFavorites = /* GraphQL */ `query ListFavorites(
  $filter: ModelFavoriteFilterInput
  $limit: Int
  $nextToken: String
) {
  listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      profileFavoritesId
      propertyFavoritesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFavoritesQueryVariables,
  APITypes.ListFavoritesQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    profile {
      id
      firstName
      lastName
      username
      email
      profileImage
      createdAt
      updatedAt
      __typename
    }
    property {
      id
      name
      tagline
      category
      image
      country
      description
      price
      guests
      bedrooms
      beds
      baths
      amenities
      createdAt
      updatedAt
      profilePropertiesId
      __typename
    }
    rating
    comment
    createdAt
    updatedAt
    profileReviewsId
    propertyReviewsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rating
      comment
      createdAt
      updatedAt
      profileReviewsId
      propertyReviewsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
export const getBooking = /* GraphQL */ `query GetBooking($id: ID!) {
  getBooking(id: $id) {
    id
    profile {
      id
      firstName
      lastName
      username
      email
      profileImage
      createdAt
      updatedAt
      __typename
    }
    property {
      id
      name
      tagline
      category
      image
      country
      description
      price
      guests
      bedrooms
      beds
      baths
      amenities
      createdAt
      updatedAt
      profilePropertiesId
      __typename
    }
    orderTotal
    totalNights
    checkIn
    checkOut
    paymentStatus
    createdAt
    updatedAt
    profileBookingsId
    propertyBookingsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBookingQueryVariables,
  APITypes.GetBookingQuery
>;
export const listBookings = /* GraphQL */ `query ListBookings(
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderTotal
      totalNights
      checkIn
      checkOut
      paymentStatus
      createdAt
      updatedAt
      profileBookingsId
      propertyBookingsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBookingsQueryVariables,
  APITypes.ListBookingsQuery
>;
