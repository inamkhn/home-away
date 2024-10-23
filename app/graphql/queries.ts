/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../../../../../app/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getProperty = /* GraphQL */ `query GetProperty($id: ID!) {
  getProperty(id: $id) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPropertiesQueryVariables,
  APITypes.ListPropertiesQuery
>;
export const getFavorites = /* GraphQL */ `query GetFavorites($id: ID!) {
  getFavorites(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFavoritesQueryVariables,
  APITypes.GetFavoritesQuery
>;
export const listFavorites = /* GraphQL */ `query ListFavorites(
  $filter: ModelFavoritesFilterInput
  $limit: Int
  $nextToken: String
) {
  listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      createdAt
      updatedAt
      userFavoritesId
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
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
export const getBooking = /* GraphQL */ `query GetBooking($id: ID!) {
  getBooking(id: $id) {
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
}
` as GeneratedQuery<
  APITypes.ListBookingsQueryVariables,
  APITypes.ListBookingsQuery
>;
export const getChatRoom = /* GraphQL */ `query GetChatRoom($id: ID!) {
  getChatRoom(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChatRoomQueryVariables,
  APITypes.GetChatRoomQuery
>;
export const listChatRooms = /* GraphQL */ `query ListChatRooms(
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatRoomsQueryVariables,
  APITypes.ListChatRoomsQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      chatRoomId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const propertiesByName = /* GraphQL */ `query PropertiesByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelPropertyFilterInput
  $limit: Int
  $nextToken: String
) {
  propertiesByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PropertiesByNameQueryVariables,
  APITypes.PropertiesByNameQuery
>;
export const chatRoomsByUserId = /* GraphQL */ `query ChatRoomsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  chatRoomsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatRoomsByUserIdQueryVariables,
  APITypes.ChatRoomsByUserIdQuery
>;
export const chatRoomsByPropertyOwnerId = /* GraphQL */ `query ChatRoomsByPropertyOwnerId(
  $propertyOwnerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  chatRoomsByPropertyOwnerId(
    propertyOwnerId: $propertyOwnerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatRoomsByPropertyOwnerIdQueryVariables,
  APITypes.ChatRoomsByPropertyOwnerIdQuery
>;
export const chatRoomsByPropertyId = /* GraphQL */ `query ChatRoomsByPropertyId(
  $propertyId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  chatRoomsByPropertyId(
    propertyId: $propertyId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatRoomsByPropertyIdQueryVariables,
  APITypes.ChatRoomsByPropertyIdQuery
>;
export const messagesBySenderId = /* GraphQL */ `query MessagesBySenderId(
  $senderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesBySenderId(
    senderId: $senderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      chatRoomId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesBySenderIdQueryVariables,
  APITypes.MessagesBySenderIdQuery
>;
export const messagesByChatRoomId = /* GraphQL */ `query MessagesByChatRoomId(
  $chatRoomId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByChatRoomId(
    chatRoomId: $chatRoomId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      chatRoomId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByChatRoomIdQueryVariables,
  APITypes.MessagesByChatRoomIdQuery
>;
