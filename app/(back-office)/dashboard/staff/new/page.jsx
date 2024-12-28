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
import RichTextInput from "@/components/Forminputs/RichTextInput"; // Import the RichTextInput component

export default function NewStaff() {
  const [imageUrl, setImageUrl] = useState("");
  const markets = [
    { id: 1, title: "dsm market" },
    { id: 2, title: "arusha market" },
    { id: 3, title: "iringa market" },
    { id: 4, title: "mwanza market" },
    { id: 5, title: "songea market" }
  ];

  const [loading, setLoading] = useState(false); // Manage loading state

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
      const slug = generateSlug(data.name); // Generate slug from staff name
      data.slug = slug;
      data.image = imageUrl; // Attach the image URL to form data
      
      console.log("Form Data:", data); // Debug form data

      // Call makePostRequest
      await makePostRequest(
        setLoading, // Function to manage loading state
        "api/staff", // API endpoint
        data, // Form data
        "Staff", // Redirect path or purpose
        reset // Function to reset the form
      );

      // Reset imageUrl after successful request
      setImageUrl("");
    } catch (error) {
      console.error("Error submitting staff:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after completion
    }
  }

  return (
    <div>
      {/* Header Section */}
      <FormHeader title="New Staff" />
      <form
        onSubmit={handleSubmit(onSubmit)} // Handle form submission
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Staff Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Position"
            name="position"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Market"
            name="marketID"
            register={register}
            errors={errors}
            className="w-full"
            options={markets}
          />
          {/* Using RichTextInput for Staff Description */}
          <RichTextInput
            label="Staff Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Staff Profile Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="staffImageUploader"
          />
          <ToggleInput
            label="Active Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Inactive"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading} // Bind to loading state
          buttonTitle="Create Staff"
          loadingButtonTittle="Creating Staff, please wait..."
        />
      </form>
    </div>
  );
}
