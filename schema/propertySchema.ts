import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(20, "Name must be 20 characters or less"),
    tagline: Yup.string()
      .required("Tagline is required")
      .max(30, "Tagline must be 30 characters or less"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    country: Yup.object().required("Country is required"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    category: Yup.string().required("Category is required"),
    image: Yup.mixed().required("Image is required"),
    bedrooms: Yup.number()
      .required("Number of bedrooms is required")
      .min(0, "Cannot be negative"),
    guests: Yup.number()
      .required("Number of guests is required")
      .min(1, "At least 1 guest is required"),
    beds: Yup.number()
      .required("Number of beds is required")
      .min(1, "At least 1 bed is required"),
    baths: Yup.number()
      .required("Number of baths is required")
      .min(0, "Cannot be negative"),
  });