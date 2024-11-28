"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import defaultImg from "../../public/images/default.png";
import Image from "next/image";

// Add validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  username: Yup.string().required("Username is required"),
});

export default function Profile() {
  const [profileImage, setProfileImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    image: null,
  };

  const handleImageUpdate = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue("image", file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Form values:", values);
      if (values.image) {
        console.log("Image to upload:", values.image);
      }
      toast("Profile updated successfully");
    } catch (error) {
      console.error("Error:", error);
      toast(error.message || "An error occurred while updating the profile");
    }
    setSubmitting(false);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-32 h-32">
                  <Image
                    src={imagePreview || defaultImg.src}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-200 cursor-pointer"
                    onClick={() => document.getElementById('image').click()}
                  />
                  <Label
                    htmlFor="image"
                    className="absolute bottom-0 right-0 cursor-pointer"
                  >
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpdate(e, setFieldValue)}
                      className="hidden"
                    />
                  </Label>
                </div>
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Field
                    name="firstName"
                    as={Input}
                    id="firstName"
                    placeholder="Susan"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Field
                    name="lastName"
                    as={Input}
                    id="lastName"
                    placeholder="Smith"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Field
                  name="username"
                  as={Input}
                  id="username"
                  placeholder="shakeAndBake"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update Profile"}
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
