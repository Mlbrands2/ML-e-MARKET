"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest"; // Adjust the path as needed.
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import ImageInput from "@/components/Forminputs/imageinput";

export default function NewBanners() {
  const [imageUrl, setImageUrl] = useState(""); // Manage banner image URL
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
      data.image = imageUrl; // Attach the image URL to form data

      console.log("Form Data:", data); // Debug form data

      // Call makePostRequest
      await makePostRequest(
        setLoading, // Function to manage loading state
        "api/banners", // API endpoint
        data, // Form data
        "Banner Created", // Success message
        reset // Function to reset the form
      );

      // Reset imageUrl after successful request
      setImageUrl("");
    } catch (error) {
      console.error("Error submitting banner:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after completion
    }
  }

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <FormHeader
        title="New Banner"
        className="text-gray-900 dark:text-gray-100 text-2xl font-bold mb-8" // Adjusted margin-bottom for more space
      />
      <form
        onSubmit={handleSubmit(onSubmit)} // Handle form submission
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
            className="text-gray-900 dark:text-white"
          />
          <TextInput
            label="Banner Link"
            name="link"
            type="url"
            register={register}
            errors={errors}
            className="text-gray-900 dark:text-white"
          />
          <ImageInput
            label="Banner Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="bannerImageUploader" // API endpoint for uploading banner images
          />
        </div>
        <SubmitButton
          isLoading={loading} // Bind to loading state
          buttonTitle="Create Banner"
          loadingButtonTittle="Creating Banner, please wait..."
        />
      </form>
    </div>
  );
}
