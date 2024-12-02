/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onCreateProfile(filter: $filter, owner: $owner) {
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onUpdateProfile(filter: $filter, owner: $owner) {
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onDeleteProfile(filter: $filter, owner: $owner) {
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateProperty = /* GraphQL */ `subscription OnCreateProperty(
  $filter: ModelSubscriptionPropertyFilterInput
  $owner: String
) {
  onCreateProperty(filter: $filter, owner: $owner) {
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePropertySubscriptionVariables,
  APITypes.OnCreatePropertySubscription
>;
export const onUpdateProperty = /* GraphQL */ `subscription OnUpdateProperty(
  $filter: ModelSubscriptionPropertyFilterInput
  $owner: String
) {
  onUpdateProperty(filter: $filter, owner: $owner) {
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePropertySubscriptionVariables,
  APITypes.OnUpdatePropertySubscription
>;
export const onDeleteProperty = /* GraphQL */ `subscription OnDeleteProperty(
  $filter: ModelSubscriptionPropertyFilterInput
  $owner: String
) {
  onDeleteProperty(filter: $filter, owner: $owner) {
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePropertySubscriptionVariables,
  APITypes.OnDeletePropertySubscription
>;
export const onCreateFavorite = /* GraphQL */ `subscription OnCreateFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onCreateFavorite(filter: $filter, owner: $owner) {
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
      owner
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
      owner
      __typename
    }
    profileFavoritesId
    propertyFavoritesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFavoriteSubscriptionVariables,
  APITypes.OnCreateFavoriteSubscription
>;
export const onUpdateFavorite = /* GraphQL */ `subscription OnUpdateFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onUpdateFavorite(filter: $filter, owner: $owner) {
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
      owner
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
      owner
      __typename
    }
    profileFavoritesId
    propertyFavoritesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFavoriteSubscriptionVariables,
  APITypes.OnUpdateFavoriteSubscription
>;
export const onDeleteFavorite = /* GraphQL */ `subscription OnDeleteFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onDeleteFavorite(filter: $filter, owner: $owner) {
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
      owner
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
      owner
      __typename
    }
    profileFavoritesId
    propertyFavoritesId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFavoriteSubscriptionVariables,
  APITypes.OnDeleteFavoriteSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onCreateReview(filter: $filter, owner: $owner) {
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
      owner
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
      owner
      __typename
    }
    rating
    comment
    createdAt
    updatedAt
    profileReviewsId
    propertyReviewsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onUpdateReview(filter: $filter, owner: $owner) {
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
      owner
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
      owner
      __typename
    }
    rating
    comment
    createdAt
    updatedAt
    profileReviewsId
    propertyReviewsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onDeleteReview(filter: $filter, owner: $owner) {
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
      owner
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
      owner
      __typename
    }
    rating
    comment
    createdAt
    updatedAt
    profileReviewsId
    propertyReviewsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateBooking = /* GraphQL */ `subscription OnCreateBooking(
  $filter: ModelSubscriptionBookingFilterInput
  $owner: String
) {
  onCreateBooking(filter: $filter, owner: $owner) {
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
      owner
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBookingSubscriptionVariables,
  APITypes.OnCreateBookingSubscription
>;
export const onUpdateBooking = /* GraphQL */ `subscription OnUpdateBooking(
  $filter: ModelSubscriptionBookingFilterInput
  $owner: String
) {
  onUpdateBooking(filter: $filter, owner: $owner) {
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
      owner
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBookingSubscriptionVariables,
  APITypes.OnUpdateBookingSubscription
>;
export const onDeleteBooking = /* GraphQL */ `subscription OnDeleteBooking(
  $filter: ModelSubscriptionBookingFilterInput
  $owner: String
) {
  onDeleteBooking(filter: $filter, owner: $owner) {
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
      owner
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBookingSubscriptionVariables,
  APITypes.OnDeleteBookingSubscription
>;
