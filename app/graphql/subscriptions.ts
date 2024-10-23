/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../../../../../app/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateProperty = /* GraphQL */ `subscription OnCreateProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onCreateProperty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePropertySubscriptionVariables,
  APITypes.OnCreatePropertySubscription
>;
export const onUpdateProperty = /* GraphQL */ `subscription OnUpdateProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onUpdateProperty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePropertySubscriptionVariables,
  APITypes.OnUpdatePropertySubscription
>;
export const onDeleteProperty = /* GraphQL */ `subscription OnDeleteProperty($filter: ModelSubscriptionPropertyFilterInput) {
  onDeleteProperty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePropertySubscriptionVariables,
  APITypes.OnDeletePropertySubscription
>;
export const onCreateFavorites = /* GraphQL */ `subscription OnCreateFavorites($filter: ModelSubscriptionFavoritesFilterInput) {
  onCreateFavorites(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFavoritesSubscriptionVariables,
  APITypes.OnCreateFavoritesSubscription
>;
export const onUpdateFavorites = /* GraphQL */ `subscription OnUpdateFavorites($filter: ModelSubscriptionFavoritesFilterInput) {
  onUpdateFavorites(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFavoritesSubscriptionVariables,
  APITypes.OnUpdateFavoritesSubscription
>;
export const onDeleteFavorites = /* GraphQL */ `subscription OnDeleteFavorites($filter: ModelSubscriptionFavoritesFilterInput) {
  onDeleteFavorites(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFavoritesSubscriptionVariables,
  APITypes.OnDeleteFavoritesSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateBooking = /* GraphQL */ `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onCreateBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookingSubscriptionVariables,
  APITypes.OnCreateBookingSubscription
>;
export const onUpdateBooking = /* GraphQL */ `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onUpdateBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookingSubscriptionVariables,
  APITypes.OnUpdateBookingSubscription
>;
export const onDeleteBooking = /* GraphQL */ `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
  onDeleteBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookingSubscriptionVariables,
  APITypes.OnDeleteBookingSubscription
>;
export const onCreateChatRoom = /* GraphQL */ `subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onCreateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatRoomSubscriptionVariables,
  APITypes.OnCreateChatRoomSubscription
>;
export const onUpdateChatRoom = /* GraphQL */ `subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onUpdateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatRoomSubscriptionVariables,
  APITypes.OnUpdateChatRoomSubscription
>;
export const onDeleteChatRoom = /* GraphQL */ `subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onDeleteChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatRoomSubscriptionVariables,
  APITypes.OnDeleteChatRoomSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
