/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  profileImage?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelProfileConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  profileImage?: string | null,
  createdAt: string,
  updatedAt: string,
  properties?: ModelPropertyConnection | null,
  favorites?: ModelFavoriteConnection | null,
  reviews?: ModelReviewConnection | null,
  bookings?: ModelBookingConnection | null,
};

export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items:  Array<Property | null >,
  nextToken?: string | null,
};

export type Property = {
  __typename: "Property",
  id: string,
  name: string,
  tagline: string,
  category: string,
  image: string,
  country: string,
  description: string,
  price: number,
  guests: number,
  bedrooms: number,
  beds: number,
  baths: number,
  amenities: string,
  createdAt: string,
  updatedAt: string,
  profile: Profile,
  favorites?: ModelFavoriteConnection | null,
  reviews?: ModelReviewConnection | null,
  bookings?: ModelBookingConnection | null,
  profilePropertiesId?: string | null,
};

export type ModelFavoriteConnection = {
  __typename: "ModelFavoriteConnection",
  items:  Array<Favorite | null >,
  nextToken?: string | null,
};

export type Favorite = {
  __typename: "Favorite",
  id: string,
  createdAt: string,
  updatedAt: string,
  profile: Profile,
  property: Property,
  profileFavoritesId?: string | null,
  propertyFavoritesId?: string | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  profile: Profile,
  property: Property,
  rating: number,
  comment: string,
  createdAt: string,
  updatedAt: string,
  profileReviewsId?: string | null,
  propertyReviewsId?: string | null,
};

export type ModelBookingConnection = {
  __typename: "ModelBookingConnection",
  items:  Array<Booking | null >,
  nextToken?: string | null,
};

export type Booking = {
  __typename: "Booking",
  id: string,
  profile: Profile,
  property: Property,
  orderTotal: number,
  totalNights: number,
  checkIn: string,
  checkOut: string,
  paymentStatus: boolean,
  createdAt: string,
  updatedAt: string,
  profileBookingsId?: string | null,
  propertyBookingsId?: string | null,
};

export type UpdateProfileInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  username?: string | null,
  email?: string | null,
  profileImage?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreatePropertyInput = {
  id?: string | null,
  name: string,
  tagline: string,
  category: string,
  image: string,
  country: string,
  description: string,
  price: number,
  guests: number,
  bedrooms: number,
  beds: number,
  baths: number,
  amenities: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  profilePropertiesId?: string | null,
};

export type ModelPropertyConditionInput = {
  name?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image?: ModelStringInput | null,
  country?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  guests?: ModelIntInput | null,
  bedrooms?: ModelIntInput | null,
  beds?: ModelIntInput | null,
  baths?: ModelIntInput | null,
  amenities?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPropertyConditionInput | null > | null,
  or?: Array< ModelPropertyConditionInput | null > | null,
  not?: ModelPropertyConditionInput | null,
  profilePropertiesId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePropertyInput = {
  id: string,
  name?: string | null,
  tagline?: string | null,
  category?: string | null,
  image?: string | null,
  country?: string | null,
  description?: string | null,
  price?: number | null,
  guests?: number | null,
  bedrooms?: number | null,
  beds?: number | null,
  baths?: number | null,
  amenities?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  profilePropertiesId?: string | null,
};

export type DeletePropertyInput = {
  id: string,
};

export type CreateFavoriteInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  profileFavoritesId?: string | null,
  propertyFavoritesId?: string | null,
};

export type ModelFavoriteConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFavoriteConditionInput | null > | null,
  or?: Array< ModelFavoriteConditionInput | null > | null,
  not?: ModelFavoriteConditionInput | null,
  profileFavoritesId?: ModelIDInput | null,
  propertyFavoritesId?: ModelIDInput | null,
};

export type UpdateFavoriteInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  profileFavoritesId?: string | null,
  propertyFavoritesId?: string | null,
};

export type DeleteFavoriteInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  rating: number,
  comment: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  profileReviewsId?: string | null,
  propertyReviewsId?: string | null,
};

export type ModelReviewConditionInput = {
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  profileReviewsId?: ModelIDInput | null,
  propertyReviewsId?: ModelIDInput | null,
};

export type UpdateReviewInput = {
  id: string,
  rating?: number | null,
  comment?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  profileReviewsId?: string | null,
  propertyReviewsId?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreateBookingInput = {
  id?: string | null,
  orderTotal: number,
  totalNights: number,
  checkIn: string,
  checkOut: string,
  paymentStatus: boolean,
  createdAt?: string | null,
  updatedAt?: string | null,
  profileBookingsId?: string | null,
  propertyBookingsId?: string | null,
};

export type ModelBookingConditionInput = {
  orderTotal?: ModelIntInput | null,
  totalNights?: ModelIntInput | null,
  checkIn?: ModelStringInput | null,
  checkOut?: ModelStringInput | null,
  paymentStatus?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
  profileBookingsId?: ModelIDInput | null,
  propertyBookingsId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBookingInput = {
  id: string,
  orderTotal?: number | null,
  totalNights?: number | null,
  checkIn?: string | null,
  checkOut?: string | null,
  paymentStatus?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  profileBookingsId?: string | null,
  propertyBookingsId?: string | null,
};

export type DeleteBookingInput = {
  id: string,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelPropertyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image?: ModelStringInput | null,
  country?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  guests?: ModelIntInput | null,
  bedrooms?: ModelIntInput | null,
  beds?: ModelIntInput | null,
  baths?: ModelIntInput | null,
  amenities?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPropertyFilterInput | null > | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  not?: ModelPropertyFilterInput | null,
  profilePropertiesId?: ModelIDInput | null,
};

export type ModelFavoriteFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFavoriteFilterInput | null > | null,
  or?: Array< ModelFavoriteFilterInput | null > | null,
  not?: ModelFavoriteFilterInput | null,
  profileFavoritesId?: ModelIDInput | null,
  propertyFavoritesId?: ModelIDInput | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
  profileReviewsId?: ModelIDInput | null,
  propertyReviewsId?: ModelIDInput | null,
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  orderTotal?: ModelIntInput | null,
  totalNights?: ModelIntInput | null,
  checkIn?: ModelStringInput | null,
  checkOut?: ModelStringInput | null,
  paymentStatus?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
  profileBookingsId?: ModelIDInput | null,
  propertyBookingsId?: ModelIDInput | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  profilePropertiesId?: ModelSubscriptionIDInput | null,
  profileFavoritesId?: ModelSubscriptionIDInput | null,
  profileReviewsId?: ModelSubscriptionIDInput | null,
  profileBookingsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPropertyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  tagline?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  guests?: ModelSubscriptionIntInput | null,
  bedrooms?: ModelSubscriptionIntInput | null,
  beds?: ModelSubscriptionIntInput | null,
  baths?: ModelSubscriptionIntInput | null,
  amenities?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  or?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  propertyFavoritesId?: ModelSubscriptionIDInput | null,
  propertyReviewsId?: ModelSubscriptionIDInput | null,
  propertyBookingsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFavoriteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFavoriteFilterInput | null > | null,
  or?: Array< ModelSubscriptionFavoriteFilterInput | null > | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rating?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
};

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderTotal?: ModelSubscriptionIntInput | null,
  totalNights?: ModelSubscriptionIntInput | null,
  checkIn?: ModelSubscriptionStringInput | null,
  checkOut?: ModelSubscriptionStringInput | null,
  paymentStatus?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookingFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    profileImage?: string | null,
    createdAt: string,
    updatedAt: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    profileImage?: string | null,
    createdAt: string,
    updatedAt: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    profileImage?: string | null,
    createdAt: string,
    updatedAt: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePropertyMutationVariables = {
  input: CreatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type CreatePropertyMutation = {
  createProperty?:  {
    __typename: "Property",
    id: string,
    name: string,
    tagline: string,
    category: string,
    image: string,
    country: string,
    description: string,
    price: number,
    guests: number,
    bedrooms: number,
    beds: number,
    baths: number,
    amenities: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    profilePropertiesId?: string | null,
  } | null,
};

export type UpdatePropertyMutationVariables = {
  input: UpdatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type UpdatePropertyMutation = {
  updateProperty?:  {
    __typename: "Property",
    id: string,
    name: string,
    tagline: string,
    category: string,
    image: string,
    country: string,
    description: string,
    price: number,
    guests: number,
    bedrooms: number,
    beds: number,
    baths: number,
    amenities: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    profilePropertiesId?: string | null,
  } | null,
};

export type DeletePropertyMutationVariables = {
  input: DeletePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type DeletePropertyMutation = {
  deleteProperty?:  {
    __typename: "Property",
    id: string,
    name: string,
    tagline: string,
    category: string,
    image: string,
    country: string,
    description: string,
    price: number,
    guests: number,
    bedrooms: number,
    beds: number,
    baths: number,
    amenities: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    profilePropertiesId?: string | null,
  } | null,
};

export type CreateFavoriteMutationVariables = {
  input: CreateFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type CreateFavoriteMutation = {
  createFavorite?:  {
    __typename: "Favorite",
    id: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    profileFavoritesId?: string | null,
    propertyFavoritesId?: string | null,
  } | null,
};

export type UpdateFavoriteMutationVariables = {
  input: UpdateFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type UpdateFavoriteMutation = {
  updateFavorite?:  {
    __typename: "Favorite",
    id: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    profileFavoritesId?: string | null,
    propertyFavoritesId?: string | null,
  } | null,
};

export type DeleteFavoriteMutationVariables = {
  input: DeleteFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type DeleteFavoriteMutation = {
  deleteFavorite?:  {
    __typename: "Favorite",
    id: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    profileFavoritesId?: string | null,
    propertyFavoritesId?: string | null,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string,
    profileReviewsId?: string | null,
    propertyReviewsId?: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string,
    profileReviewsId?: string | null,
    propertyReviewsId?: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string,
    profileReviewsId?: string | null,
    propertyReviewsId?: string | null,
  } | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type CreateBookingMutation = {
  createBooking?:  {
    __typename: "Booking",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    orderTotal: number,
    totalNights: number,
    checkIn: string,
    checkOut: string,
    paymentStatus: boolean,
    createdAt: string,
    updatedAt: string,
    profileBookingsId?: string | null,
    propertyBookingsId?: string | null,
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type UpdateBookingMutation = {
  updateBooking?:  {
    __typename: "Booking",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    orderTotal: number,
    totalNights: number,
    checkIn: string,
    checkOut: string,
    paymentStatus: boolean,
    createdAt: string,
    updatedAt: string,
    profileBookingsId?: string | null,
    propertyBookingsId?: string | null,
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type DeleteBookingMutation = {
  deleteBooking?:  {
    __typename: "Booking",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    orderTotal: number,
    totalNights: number,
    checkIn: string,
    checkOut: string,
    paymentStatus: boolean,
    createdAt: string,
    updatedAt: string,
    profileBookingsId?: string | null,
    propertyBookingsId?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    profileImage?: string | null,
    createdAt: string,
    updatedAt: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPropertyQueryVariables = {
  id: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    id: string,
    name: string,
    tagline: string,
    category: string,
    image: string,
    country: string,
    description: string,
    price: number,
    guests: number,
    bedrooms: number,
    beds: number,
    baths: number,
    amenities: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    profilePropertiesId?: string | null,
  } | null,
};

export type ListPropertiesQueryVariables = {
  filter?: ModelPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertiesQuery = {
  listProperties?:  {
    __typename: "ModelPropertyConnection",
    items:  Array< {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFavoriteQueryVariables = {
  id: string,
};

export type GetFavoriteQuery = {
  getFavorite?:  {
    __typename: "Favorite",
    id: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    profileFavoritesId?: string | null,
    propertyFavoritesId?: string | null,
  } | null,
};

export type ListFavoritesQueryVariables = {
  filter?: ModelFavoriteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFavoritesQuery = {
  listFavorites?:  {
    __typename: "ModelFavoriteConnection",
    items:  Array< {
      __typename: "Favorite",
      id: string,
      createdAt: string,
      updatedAt: string,
      profileFavoritesId?: string | null,
      propertyFavoritesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string,
    profileReviewsId?: string | null,
    propertyReviewsId?: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      rating: number,
      comment: string,
      createdAt: string,
      updatedAt: string,
      profileReviewsId?: string | null,
      propertyReviewsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking?:  {
    __typename: "Booking",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    orderTotal: number,
    totalNights: number,
    checkIn: string,
    checkOut: string,
    paymentStatus: boolean,
    createdAt: string,
    updatedAt: string,
    profileBookingsId?: string | null,
    propertyBookingsId?: string | null,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      orderTotal: number,
      totalNights: number,
      checkIn: string,
      checkOut: string,
      paymentStatus: boolean,
      createdAt: string,
      updatedAt: string,
      profileBookingsId?: string | null,
      propertyBookingsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    profileImage?: string | null,
    createdAt: string,
    updatedAt: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    profileImage?: string | null,
    createdAt: string,
    updatedAt: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    profileImage?: string | null,
    createdAt: string,
    updatedAt: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    id: string,
    name: string,
    tagline: string,
    category: string,
    image: string,
    country: string,
    description: string,
    price: number,
    guests: number,
    bedrooms: number,
    beds: number,
    baths: number,
    amenities: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    profilePropertiesId?: string | null,
  } | null,
};

export type OnUpdatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    id: string,
    name: string,
    tagline: string,
    category: string,
    image: string,
    country: string,
    description: string,
    price: number,
    guests: number,
    bedrooms: number,
    beds: number,
    baths: number,
    amenities: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    profilePropertiesId?: string | null,
  } | null,
};

export type OnDeletePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    id: string,
    name: string,
    tagline: string,
    category: string,
    image: string,
    country: string,
    description: string,
    price: number,
    guests: number,
    bedrooms: number,
    beds: number,
    baths: number,
    amenities: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    profilePropertiesId?: string | null,
  } | null,
};

export type OnCreateFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
};

export type OnCreateFavoriteSubscription = {
  onCreateFavorite?:  {
    __typename: "Favorite",
    id: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    profileFavoritesId?: string | null,
    propertyFavoritesId?: string | null,
  } | null,
};

export type OnUpdateFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
};

export type OnUpdateFavoriteSubscription = {
  onUpdateFavorite?:  {
    __typename: "Favorite",
    id: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    profileFavoritesId?: string | null,
    propertyFavoritesId?: string | null,
  } | null,
};

export type OnDeleteFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
};

export type OnDeleteFavoriteSubscription = {
  onDeleteFavorite?:  {
    __typename: "Favorite",
    id: string,
    createdAt: string,
    updatedAt: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    profileFavoritesId?: string | null,
    propertyFavoritesId?: string | null,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string,
    profileReviewsId?: string | null,
    propertyReviewsId?: string | null,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string,
    profileReviewsId?: string | null,
    propertyReviewsId?: string | null,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string,
    profileReviewsId?: string | null,
    propertyReviewsId?: string | null,
  } | null,
};

export type OnCreateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking?:  {
    __typename: "Booking",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    orderTotal: number,
    totalNights: number,
    checkIn: string,
    checkOut: string,
    paymentStatus: boolean,
    createdAt: string,
    updatedAt: string,
    profileBookingsId?: string | null,
    propertyBookingsId?: string | null,
  } | null,
};

export type OnUpdateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking?:  {
    __typename: "Booking",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    orderTotal: number,
    totalNights: number,
    checkIn: string,
    checkOut: string,
    paymentStatus: boolean,
    createdAt: string,
    updatedAt: string,
    profileBookingsId?: string | null,
    propertyBookingsId?: string | null,
  } | null,
};

export type OnDeleteBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking?:  {
    __typename: "Booking",
    id: string,
    profile:  {
      __typename: "Profile",
      id: string,
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      profileImage?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    property:  {
      __typename: "Property",
      id: string,
      name: string,
      tagline: string,
      category: string,
      image: string,
      country: string,
      description: string,
      price: number,
      guests: number,
      bedrooms: number,
      beds: number,
      baths: number,
      amenities: string,
      createdAt: string,
      updatedAt: string,
      profilePropertiesId?: string | null,
    },
    orderTotal: number,
    totalNights: number,
    checkIn: string,
    checkOut: string,
    paymentStatus: boolean,
    createdAt: string,
    updatedAt: string,
    profileBookingsId?: string | null,
    propertyBookingsId?: string | null,
  } | null,
};
