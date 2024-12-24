"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest"; // Adjust the path as needed.
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import ImageInput from "@/components/Forminputs/imageinput";
import TextareaInput from "@/components/Forminputs/TextareaInput";
import { generateSlug } from "@/lib/generateSlug";

export default function NewMarkets() {
  const [imageUrl, setImageUrl] = useState(""); // Manage market logo URL
  const [loading, setLoading] = useState(false); // Manage loading state

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  async function onSubmit(data) {
    try {
      setLoading(true); // Set loading to true
      data.logo = imageUrl; // Attach the logo URL to form data

      // Generate slug from the title
      const slug = generateSlug(data.title);
      data.slug = slug;

      console.log("Form Data:", data); // Debug form data

      // Call makePostRequest
      await makePostRequest(
        setLoading, // Function to manage loading state
        "api/markets", // API endpoint
        data, // Form data
        "Market Created", // Success message
        reset // Function to reset the form
      );

      // Reset imageUrl after successful request
      setImageUrl("");
    } catch (error) {
      console.error("Error submitting market:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after completion
    }
  }

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <FormHeader
        title="New Market"
        className="text-gray-900 dark:text-gray-100 text-2xl font-bold mb-8" // Adjusted margin-bottom for more space
      />
      <form
        onSubmit={handleSubmit(onSubmit)} // Handle form submission
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Market Logo"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="marketLogoUploader" // API endpoint for uploading market logos
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={false} // Bind to loading state
          buttonTitle="Create Market"
          loadingButtonTittle="Creating Market, please wait..."
        />
      </form>
    </div>
  );
}
