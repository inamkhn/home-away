/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onCreateProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onUpdateProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
  onDeleteProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateProperty = /* GraphQL */ `subscription OnCreateProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onCreateProperty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePropertySubscriptionVariables,
  APITypes.OnCreatePropertySubscription
>;
export const onUpdateProperty = /* GraphQL */ `subscription OnUpdateProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onUpdateProperty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePropertySubscriptionVariables,
  APITypes.OnUpdatePropertySubscription
>;
export const onDeleteProperty = /* GraphQL */ `subscription OnDeleteProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onDeleteProperty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePropertySubscriptionVariables,
  APITypes.OnDeletePropertySubscription
>;
export const onCreateFavorite = /* GraphQL */ `subscription OnCreateFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
  onCreateFavorite(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFavoriteSubscriptionVariables,
  APITypes.OnCreateFavoriteSubscription
>;
export const onUpdateFavorite = /* GraphQL */ `subscription OnUpdateFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
  onUpdateFavorite(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFavoriteSubscriptionVariables,
  APITypes.OnUpdateFavoriteSubscription
>;
export const onDeleteFavorite = /* GraphQL */ `subscription OnDeleteFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
  onDeleteFavorite(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFavoriteSubscriptionVariables,
  APITypes.OnDeleteFavoriteSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateBooking = /* GraphQL */ `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onCreateBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookingSubscriptionVariables,
  APITypes.OnCreateBookingSubscription
>;
export const onUpdateBooking = /* GraphQL */ `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onUpdateBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookingSubscriptionVariables,
  APITypes.OnUpdateBookingSubscription
>;
export const onDeleteBooking = /* GraphQL */ `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
  onDeleteBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookingSubscriptionVariables,
  APITypes.OnDeleteBookingSubscription
>;
