"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest"; // Adjust the path as needed.
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";

export default function NewFarmer() {
  const [loading, setLoading] = useState(false); // Manage loading state

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  async function onSubmit(data) {
    try {
      setLoading(true); // Set loading to true
      console.log("Submitting Data:", data);

      // API request (uncomment and configure as needed)
      await makePostRequest(
        setLoading,
        "api/farmers", // API endpoint for farmers
        data,
        "Farmer Created",
        reset
      );
    } catch (error) {
      console.error("Error submitting farmer:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after submission
    }
  }

  return (
    <div>
      {/* Header Section */}
      <FormHeader title="New Farmer" />
      <form
        onSubmit={handleSubmit(onSubmit)} // Handle form submission
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Farmer's Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Phone Number"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Address"
            name="address"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Contact Person phone"
            name="contactPersonPhone"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Code"
            name="farmerCode"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Farmer's Payment Terms"
            name="paymentTerms"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Farmer's Note"
            name="note"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading} // Bind to loading state
          buttonTitle="Create Farmer"
          loadingButtonTittle="Creating Farmer, please wait..."
        />
      </form>
    </div>
  );
}
