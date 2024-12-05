"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import SelectCategory from "react-select";
import GuestCard from "./GuestCard/page";
import { MyCheckbox } from "./CheckBox/page";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { generateClient } from "aws-amplify/api";
import { createProperty } from "@/app/graphql/mutations";
import { toast } from "sonner";
import Loading from "../Loading";
import { getCurrentUser } from "aws-amplify/auth";
import { validationSchema } from "@/schema/propertySchema";
import { uploadData } from "aws-amplify/storage";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

interface amentie {
  id: number;
  label: string;
  checked: boolean;
}

const Accommodation = [
  {
    id: 1,
    name: "Bedrooms",
    description: "Specify the number of bedrooms",
    total: "0",
  },
  {
    id: 2,
    name: "Guests",
    description: "Specify the number of guests",
    total: "0",
  },
  {
    id: 3,
    name: "Beds",
    description: "Specify the number of Beds",
    total: "0",
  },
  {
    id: 4,
    name: "Baths",
    description: "Specify the number of Baths",
    total: "0",
  },
];

export default function PropertyForm() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [isChecked, setIsChecked] = useState({
    "Unlimited Cloud Storage": false,
    "Self-Lighting Fire Pit": false,
    "Outdoor Furniture (Tree Stumps)": false,
    "Hot Shower (Sun Required)": false,
    "VIP Parking For Squirrels": false,
    "BBQ Grill With A Masterchef Diploma": false,
    "Private Bathroom (Bushes Nearby)": false,
    "Natural Heating (Bring A Coat)": false,
    "Bed Linens (Leaves)": false,
    "Picnic Table (Yet Another Tree Stump)": false,
    "Solar Power (Daylight)": false,
    "Cooking Utensils (Sticks And Stones)": false,
    "Lanterns (Fireflies)": false,
    "Kitchenette (Aka Fire Pit)": false,
    "Air Conditioning (Breeze From The West)": false,
    "Towels (More Leaves)": false,
    "Hammock (Two Trees And A Rope)": false,
    "Water Supply (River A Mile Away)": false,
    "Cool Box (Hole In The Ground)": false,
    "First Aid Kit (Hope And Prayers)": false,
  });
  const [userId, setUserId] = useState("");
  const client = generateClient();

  useEffect(() => {
    async function getCurrentFunction() {
      const res = await getCurrentUser();
      console.log("signinDetails:", res);
      setUserId(res.userId);
    }
    getCurrentFunction();
  }, []);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const handleCheckboxChange = (label: string) => {
    setIsChecked((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const selectedAmenities = Object.entries(isChecked)
    .filter(([_, value]) => value)
    .map(([key, _]) => key);

  const amenties: amentie[] = [
    {
      id: 1,
      label: "Unlimited Cloud Storage",
      checked: isChecked["Unlimited Cloud Storage"],
    },
    {
      id: 2,
      label: "Self-Lighting Fire Pit",
      checked: isChecked["Self-Lighting Fire Pit"],
    },
    {
      id: 3,
      label: "Outdoor Furniture (Tree Stumps)",
      checked: isChecked["Outdoor Furniture (Tree Stumps)"],
    },
    {
      id: 4,
      label: "Hot Shower (Sun Required)",
      checked: isChecked["Hot Shower (Sun Required)"],
    },
    {
      id: 5,
      label: "VIP Parking For Squirrels",
      checked: isChecked["VIP Parking For Squirrels"],
    },
    {
      id: 6,
      label: "BBQ Grill With A Masterchef Diploma",
      checked: isChecked["BBQ Grill With A Masterchef Diploma"],
    },
    {
      id: 7,
      label: "Private Bathroom (Bushes Nearby)",
      checked: isChecked["Private Bathroom (Bushes Nearby)"],
    },
    {
      id: 8,
      label: "Natural Heating (Bring A Coat)",
      checked: isChecked["Natural Heating (Bring A Coat)"],
    },
    {
      id: 9,
      label: "Bed Linens (Leaves)",
      checked: isChecked["Bed Linens (Leaves)"],
    },
    {
      id: 10,
      label: "Picnic Table (Yet Another Tree Stump)",
      checked: isChecked["Picnic Table (Yet Another Tree Stump)"],
    },
    {
      id: 11,
      label: "Solar Power (Daylight)",
      checked: isChecked["Solar Power (Daylight)"],
    },
    {
      id: 12,
      label: "Cooking Utensils (Sticks And Stones)",
      checked: isChecked["Cooking Utensils (Sticks And Stones)"],
    },
    {
      id: 13,
      label: "Lanterns (Fireflies)",
      checked: isChecked["Lanterns (Fireflies)"],
    },
    {
      id: 14,
      label: "Kitchenette (Aka Fire Pit)",
      checked: isChecked["Kitchenette (Aka Fire Pit)"],
    },
    {
      id: 15,
      label: "Air Conditioning (Breeze From The West)",
      checked: isChecked["Air Conditioning (Breeze From The West)"],
    },
    {
      id: 16,
      label: "Towels (More Leaves)",
      checked: isChecked["Towels (More Leaves)"],
    },
    {
      id: 17,
      label: "Hammock (Two Trees And A Rope)",
      checked: isChecked["Hammock (Two Trees And A Rope)"],
    },
    {
      id: 18,
      label: "Water Supply (River A Mile Away)",
      checked: isChecked["Water Supply (River A Mile Away)"],
    },
    {
      id: 19,
      label: "Cool Box (Hole In The Ground)",
      checked: isChecked["Cool Box (Hole In The Ground)"],
    },
    {
      id: 20,
      label: "First Aid Kit (Hope And Prayers)",
      checked: isChecked["First Aid Kit (Hope And Prayers)"],
    },
  ].map((amenity) => ({
    ...amenity,
    checked: isChecked[amenity.label] || false,
  }));

  const initialValues = {
    name: "",
    tagline: "",
    price: "",
    country: null,
    description: "",
    category: "",
    image: null,
    bedrooms: 0,
    guests: 1,
    beds: 1,
    baths: 0,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await uploadData({
        path: `properties/${Date.now()}-${values.image.name}`,
        data: values.image,
        options: {
          contentType: values.image.type,
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              console.log(
                `Upload progress ${Math.round(
                  (transferredBytes / totalBytes) * 100
                )} %`
              );
            }
          },
        },
      }).result;
      const formData = {
        name: values.name,
        tagline: values.tagline,
        category: values.category,
        description: values.description,
        country: values.country.label,
        price: parseInt(values.price),
        guests: parseInt(values.guests),
        bedrooms: parseInt(values.bedrooms),
        beds: parseInt(values.beds),
        baths: parseInt(values.baths),
        image: result,
        amenities: JSON.stringify(selectedAmenities),
        profilePropertiesId: userId,
      };

      const currentSession = await getCurrentUser();
      if (!currentSession) {
        throw new Error("No authenticated user");
      }
      const newProperty = await client.graphql({
        query: createProperty,
        variables: {
          input: formData,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      console.log("Property created:", newProperty);
      toast.success("Property created successfully");
    } catch (error) {
      console.error("Error creating property:", error);

      // More specific error handling
      if (error.message?.includes("not authenticated")) {
        toast.error("Please sign in to create a property");
      } else if (error.message?.includes("expired")) {
        toast.error("Your session has expired. Please sign in again");
      } else {
        toast.error(error.message || "Failed to create property");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-5xl mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center text-xl">Create Property</CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">General Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Field
                      name="name"
                      as={Input}
                      id="name"
                      placeholder="Cabin in Canada"
                      maxLength={20}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Field
                      name="tagline"
                      as={Input}
                      id="tagline"
                      placeholder="Dream Getaway Awaits You Here"
                      maxLength={30}
                    />
                    <ErrorMessage
                      name="tagline"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Field
                    name="price"
                    as={Input}
                    id="price"
                    type="number"
                    placeholder="Enter price"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Field name="country">
                    {({ field, form }: any) => (
                      <SelectCategory
                        options={countries}
                        value={field.value}
                        onChange={(selectedOption) =>
                          form.setFieldValue("country", selectedOption)
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Field
                  name="description"
                  as={Textarea}
                  id="description"
                  placeholder="Enter property description"
                  className="min-h-[150px]"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Field name="category">
                    {({ field, form }: any) => (
                      <Select
                        onValueChange={(value) =>
                          form.setFieldValue("category", value)
                        }
                      >
                        <SelectTrigger className="w-[180px]" id="category">
                          <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white w-full">
                          <SelectGroup>
                            <SelectLabel>Types</SelectLabel>
                            <SelectItem value="cabin">Cabin</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Image</Label>
                  <br />
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                    }}
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <p className="text-xl font-bold">Accommodation Details</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Accommodation.map((value) => (
                  <div className="space-y-2" key={value.id}>
                    <Field name={value.name.toLowerCase()}>
                      {({ field, form }: any) => (
                        <GuestCard
                          name={value.name}
                          description={value.description}
                          total={field.value}
                          onChange={(newValue) =>
                            form.setFieldValue(
                              value.name.toLowerCase(),
                              newValue
                            )
                          }
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name={value.name.toLowerCase()}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenties.map((amenity) => (
                  <div className="space-y-2" key={amenity.id}>
                    <MyCheckbox
                      label={amenity.label}
                      checked={amenity.checked}
                      onChange={() => handleCheckboxChange(amenity.label)}
                    />
                  </div>
                ))}
              </div>
              <Button
                type="submit"
                className="w-full bg-yellow-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loading size="sm" color="yellow" />
                ) : (
                  "Create Property"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
