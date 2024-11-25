/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const createProperty = /* GraphQL */ `mutation CreateProperty(
  $input: CreatePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  createProperty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePropertyMutationVariables,
  APITypes.CreatePropertyMutation
>;
export const updateProperty = /* GraphQL */ `mutation UpdateProperty(
  $input: UpdatePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  updateProperty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePropertyMutationVariables,
  APITypes.UpdatePropertyMutation
>;
export const deleteProperty = /* GraphQL */ `mutation DeleteProperty(
  $input: DeletePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  deleteProperty(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePropertyMutationVariables,
  APITypes.DeletePropertyMutation
>;
export const createFavorite = /* GraphQL */ `mutation CreateFavorite(
  $input: CreateFavoriteInput!
  $condition: ModelFavoriteConditionInput
) {
  createFavorite(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFavoriteMutationVariables,
  APITypes.CreateFavoriteMutation
>;
export const updateFavorite = /* GraphQL */ `mutation UpdateFavorite(
  $input: UpdateFavoriteInput!
  $condition: ModelFavoriteConditionInput
) {
  updateFavorite(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFavoriteMutationVariables,
  APITypes.UpdateFavoriteMutation
>;
export const deleteFavorite = /* GraphQL */ `mutation DeleteFavorite(
  $input: DeleteFavoriteInput!
  $condition: ModelFavoriteConditionInput
) {
  deleteFavorite(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFavoriteMutationVariables,
  APITypes.DeleteFavoriteMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const createBooking = /* GraphQL */ `mutation CreateBooking(
  $input: CreateBookingInput!
  $condition: ModelBookingConditionInput
) {
  createBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBookingMutationVariables,
  APITypes.CreateBookingMutation
>;
export const updateBooking = /* GraphQL */ `mutation UpdateBooking(
  $input: UpdateBookingInput!
  $condition: ModelBookingConditionInput
) {
  updateBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBookingMutationVariables,
  APITypes.UpdateBookingMutation
>;
export const deleteBooking = /* GraphQL */ `mutation DeleteBooking(
  $input: DeleteBookingInput!
  $condition: ModelBookingConditionInput
) {
  deleteBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBookingMutationVariables,
  APITypes.DeleteBookingMutation
>;
