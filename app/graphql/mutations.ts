/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../../../../../app/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    first_name
    last_name
    email
    image
    properties {
      items {
        id
        name
        category
        description
        price
        image
        address
        country
        guests
        bedrooms
        beds
        baths
        amenities
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
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
        chatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userPropertiesId
        __typename
      }
      nextToken
      __typename
    }
    favorites {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        createdAt
        updatedAt
        userFavoritesId
        propertyFavoritesId
        __typename
      }
      nextToken
      __typename
    }
    reviews {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        rating
        comment
        createdAt
        updatedAt
        userReviewsId
        propertyReviewsId
        __typename
      }
      nextToken
      __typename
    }
    bookings {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        startDate
        endDate
        total_nights
        total_price
        status
        createdAt
        updatedAt
        userBookingsId
        propertyBookingsId
        __typename
      }
      nextToken
      __typename
    }
    chatRoomsAsUser {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    chatRoomsAsOwner {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        content
        sender {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        senderId
        chatRoom {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    first_name
    last_name
    email
    image
    properties {
      items {
        id
        name
        category
        description
        price
        image
        address
        country
        guests
        bedrooms
        beds
        baths
        amenities
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
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
        chatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userPropertiesId
        __typename
      }
      nextToken
      __typename
    }
    favorites {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        createdAt
        updatedAt
        userFavoritesId
        propertyFavoritesId
        __typename
      }
      nextToken
      __typename
    }
    reviews {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        rating
        comment
        createdAt
        updatedAt
        userReviewsId
        propertyReviewsId
        __typename
      }
      nextToken
      __typename
    }
    bookings {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        startDate
        endDate
        total_nights
        total_price
        status
        createdAt
        updatedAt
        userBookingsId
        propertyBookingsId
        __typename
      }
      nextToken
      __typename
    }
    chatRoomsAsUser {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    chatRoomsAsOwner {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        content
        sender {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        senderId
        chatRoom {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    first_name
    last_name
    email
    image
    properties {
      items {
        id
        name
        category
        description
        price
        image
        address
        country
        guests
        bedrooms
        beds
        baths
        amenities
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
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
        chatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userPropertiesId
        __typename
      }
      nextToken
      __typename
    }
    favorites {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        createdAt
        updatedAt
        userFavoritesId
        propertyFavoritesId
        __typename
      }
      nextToken
      __typename
    }
    reviews {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        rating
        comment
        createdAt
        updatedAt
        userReviewsId
        propertyReviewsId
        __typename
      }
      nextToken
      __typename
    }
    bookings {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        startDate
        endDate
        total_nights
        total_price
        status
        createdAt
        updatedAt
        userBookingsId
        propertyBookingsId
        __typename
      }
      nextToken
      __typename
    }
    chatRoomsAsUser {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    chatRoomsAsOwner {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        content
        sender {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        senderId
        chatRoom {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createProperty = /* GraphQL */ `mutation CreateProperty(
  $input: CreatePropertyInput!
  $condition: ModelPropertyConditionInput
) {
  createProperty(input: $input, condition: $condition) {
    id
    name
    category
    description
    price
    image
    address
    country
    guests
    bedrooms
    beds
    baths
    amenities
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    favorites {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        createdAt
        updatedAt
        userFavoritesId
        propertyFavoritesId
        __typename
      }
      nextToken
      __typename
    }
    reviews {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        rating
        comment
        createdAt
        updatedAt
        userReviewsId
        propertyReviewsId
        __typename
      }
      nextToken
      __typename
    }
    bookings {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        startDate
        endDate
        total_nights
        total_price
        status
        createdAt
        updatedAt
        userBookingsId
        propertyBookingsId
        __typename
      }
      nextToken
      __typename
    }
    chatRooms {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userPropertiesId
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
    category
    description
    price
    image
    address
    country
    guests
    bedrooms
    beds
    baths
    amenities
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    favorites {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        createdAt
        updatedAt
        userFavoritesId
        propertyFavoritesId
        __typename
      }
      nextToken
      __typename
    }
    reviews {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        rating
        comment
        createdAt
        updatedAt
        userReviewsId
        propertyReviewsId
        __typename
      }
      nextToken
      __typename
    }
    bookings {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        startDate
        endDate
        total_nights
        total_price
        status
        createdAt
        updatedAt
        userBookingsId
        propertyBookingsId
        __typename
      }
      nextToken
      __typename
    }
    chatRooms {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userPropertiesId
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
    category
    description
    price
    image
    address
    country
    guests
    bedrooms
    beds
    baths
    amenities
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    favorites {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        createdAt
        updatedAt
        userFavoritesId
        propertyFavoritesId
        __typename
      }
      nextToken
      __typename
    }
    reviews {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        rating
        comment
        createdAt
        updatedAt
        userReviewsId
        propertyReviewsId
        __typename
      }
      nextToken
      __typename
    }
    bookings {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        startDate
        endDate
        total_nights
        total_price
        status
        createdAt
        updatedAt
        userBookingsId
        propertyBookingsId
        __typename
      }
      nextToken
      __typename
    }
    chatRooms {
      items {
        id
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
        propertyOwner {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        propertyOwnerId
        property {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        propertyId
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userPropertiesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePropertyMutationVariables,
  APITypes.DeletePropertyMutation
>;
export const createFavorites = /* GraphQL */ `mutation CreateFavorites(
  $input: CreateFavoritesInput!
  $condition: ModelFavoritesConditionInput
) {
  createFavorites(input: $input, condition: $condition) {
    id
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    createdAt
    updatedAt
    userFavoritesId
    propertyFavoritesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFavoritesMutationVariables,
  APITypes.CreateFavoritesMutation
>;
export const updateFavorites = /* GraphQL */ `mutation UpdateFavorites(
  $input: UpdateFavoritesInput!
  $condition: ModelFavoritesConditionInput
) {
  updateFavorites(input: $input, condition: $condition) {
    id
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    createdAt
    updatedAt
    userFavoritesId
    propertyFavoritesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFavoritesMutationVariables,
  APITypes.UpdateFavoritesMutation
>;
export const deleteFavorites = /* GraphQL */ `mutation DeleteFavorites(
  $input: DeleteFavoritesInput!
  $condition: ModelFavoritesConditionInput
) {
  deleteFavorites(input: $input, condition: $condition) {
    id
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    createdAt
    updatedAt
    userFavoritesId
    propertyFavoritesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFavoritesMutationVariables,
  APITypes.DeleteFavoritesMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
    id
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    rating
    comment
    createdAt
    updatedAt
    userReviewsId
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
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    rating
    comment
    createdAt
    updatedAt
    userReviewsId
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
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    rating
    comment
    createdAt
    updatedAt
    userReviewsId
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
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    startDate
    endDate
    total_nights
    total_price
    status
    createdAt
    updatedAt
    userBookingsId
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
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    startDate
    endDate
    total_nights
    total_price
    status
    createdAt
    updatedAt
    userBookingsId
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
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    startDate
    endDate
    total_nights
    total_price
    status
    createdAt
    updatedAt
    userBookingsId
    propertyBookingsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBookingMutationVariables,
  APITypes.DeleteBookingMutation
>;
export const createChatRoom = /* GraphQL */ `mutation CreateChatRoom(
  $input: CreateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  createChatRoom(input: $input, condition: $condition) {
    id
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    propertyOwner {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    propertyOwnerId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    messages {
      items {
        id
        content
        sender {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        senderId
        chatRoom {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatRoomMutationVariables,
  APITypes.CreateChatRoomMutation
>;
export const updateChatRoom = /* GraphQL */ `mutation UpdateChatRoom(
  $input: UpdateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  updateChatRoom(input: $input, condition: $condition) {
    id
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    propertyOwner {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    propertyOwnerId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    messages {
      items {
        id
        content
        sender {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        senderId
        chatRoom {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatRoomMutationVariables,
  APITypes.UpdateChatRoomMutation
>;
export const deleteChatRoom = /* GraphQL */ `mutation DeleteChatRoom(
  $input: DeleteChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  deleteChatRoom(input: $input, condition: $condition) {
    id
    user {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    propertyOwner {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    propertyOwnerId
    property {
      id
      name
      category
      description
      price
      image
      address
      country
      guests
      bedrooms
      beds
      baths
      amenities
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRooms {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPropertiesId
      __typename
    }
    propertyId
    messages {
      items {
        id
        content
        sender {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        senderId
        chatRoom {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatRoomMutationVariables,
  APITypes.DeleteChatRoomMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    content
    sender {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    senderId
    chatRoom {
      id
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      propertyOwner {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      propertyOwnerId
      property {
        id
        name
        category
        description
        price
        image
        address
        country
        guests
        bedrooms
        beds
        baths
        amenities
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
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
        chatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userPropertiesId
        __typename
      }
      propertyId
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatRoomId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    content
    sender {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    senderId
    chatRoom {
      id
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      propertyOwner {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      propertyOwnerId
      property {
        id
        name
        category
        description
        price
        image
        address
        country
        guests
        bedrooms
        beds
        baths
        amenities
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
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
        chatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userPropertiesId
        __typename
      }
      propertyId
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatRoomId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    content
    sender {
      id
      username
      first_name
      last_name
      email
      image
      properties {
        items {
          id
          name
          category
          description
          price
          image
          address
          country
          guests
          bedrooms
          beds
          baths
          amenities
          userId
          createdAt
          updatedAt
          userPropertiesId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          userId
          propertyId
          createdAt
          updatedAt
          userFavoritesId
          propertyFavoritesId
          __typename
        }
        nextToken
        __typename
      }
      reviews {
        items {
          id
          userId
          propertyId
          rating
          comment
          createdAt
          updatedAt
          userReviewsId
          propertyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      bookings {
        items {
          id
          userId
          propertyId
          startDate
          endDate
          total_nights
          total_price
          status
          createdAt
          updatedAt
          userBookingsId
          propertyBookingsId
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsUser {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomsAsOwner {
        items {
          id
          userId
          propertyOwnerId
          propertyId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    senderId
    chatRoom {
      id
      user {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      propertyOwner {
        id
        username
        first_name
        last_name
        email
        image
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
        chatRoomsAsUser {
          nextToken
          __typename
        }
        chatRoomsAsOwner {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      propertyOwnerId
      property {
        id
        name
        category
        description
        price
        image
        address
        country
        guests
        bedrooms
        beds
        baths
        amenities
        user {
          id
          username
          first_name
          last_name
          email
          image
          createdAt
          updatedAt
          __typename
        }
        userId
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
        chatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userPropertiesId
        __typename
      }
      propertyId
      messages {
        items {
          id
          content
          senderId
          chatRoomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatRoomId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
