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
import SelectInput from "@/components/Forminputs/Selectinputs";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import RichTextInput from "@/components/Forminputs/RichTextInput"; // Component for rich text input

export default function NewTraining() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false); // Manage loading state

  // Example options for market selection
  const markets = [
    { id: 1, title: "DSM Market" },
    { id: 2, title: "Arusha Market" },
    { id: 3, title: "Iringa Market" },
    { id: 4, title: "Mwanza Market" },
    { id: 5, title: "Songea Market" },
  ];

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");

  // Function to handle form submission
  async function onSubmit(data) {
    try {
      setLoading(true); // Set loading to true
      const slug = generateSlug(data.title); // Generate slug from the training title
      data.slug = slug;
      data.image = imageUrl; // Attach the image URL to form data

      console.log("Form Data:", data); // Debug form data

      // Call makePostRequest
      makePostRequest(
        setLoading, // Function to manage loading state
        "api/training", // API endpoint for creating community training
        data, // Form data
        "Community Training Created", // Success message
        reset // Function to reset the form after submission
      );

      // Reset imageUrl after successful request
      setImageUrl("");
    } catch (error) {
      console.error("Error submitting community training:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after completion
    }
  }

  return (
    <div>
      {/* Header Section */}
      <FormHeader title="New Community Training" />
      <form
        onSubmit={handleSubmit(onSubmit)} // Handle form submission
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <RichTextInput
            label="Training Context"
            name="context"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Training Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
          />
          <SelectInput
            label="Select Market"
            name="marketID"
            register={register}
            errors={errors}
            className="w-full"
            options={markets}
          />
          <ToggleInput
            label="Training Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading} // Bind to loading state
          buttonTitle="Create Training"
          loadingButtonTittle="Creating Training, please wait..."
        />
      </form>
    </div>
  );
}
