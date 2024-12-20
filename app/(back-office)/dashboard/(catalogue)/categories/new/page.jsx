"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest"; // Adjust the path as needed.
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";
import { generateSlug } from "@/lib/generateSlug";
import ImageInput from "@/components/Forminputs/imageinput";

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState(""); // Manage image URL state
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  async function onSubmit(data) 
   { 
    
    const slug = generateSlug(data.title); // Generate slug
    data.slug = slug;
    data.image = imageUrl; // Attach the image URL to form data
        // Log data to the terminal
    console.log(data);
    // Call makePostRe quest
    makePostRequest(
      setLoading, // Function to manage loading state
      "api/categories", // API endpoint
      data, // Form data
      "Categories", // Redirect path or purpose
      reset // Function to reset the form
    );
  }

  return (
    <div>
      {/* Header Section */}
      <FormHeader title="New Category" />
      <form
        onSubmit={handleSubmit(onSubmit)} // Handle form submission
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Category Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Category"
          loadingButtonTittle="Creating Category, please wait..."
        />
      </form>
    </div>
  );
}
