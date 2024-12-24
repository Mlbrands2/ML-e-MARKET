"use client";
import React, { useState, useEffect } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest"; // Adjust the path as needed.
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";

export default function NewFarmer() {
  const [loading, setLoading] = useState(false); // Manage loading state
  const [farmersUniqueCode, setFarmersUniqueCode] = useState(""); // Manage unique code state

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Watch the farmer's name to generate the unique code
  const farmerName = watch("name");

  // Generate a unique code whenever the farmer's name changes
  useEffect(() => {
    if (farmerName) {
      const initials = farmerName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("");
      const timestamp = Date.now();
      setFarmersUniqueCode(`ML-${initials}-${timestamp}`);
    } else {
      setFarmersUniqueCode("");
    }
  }, [farmerName]);

  // Handle form submission
  async function onSubmit(data) {
    try {
      setLoading(true); // Set loading to true
      const finalData = {
        ...data,
        farmersUniqueCode, // Include the dynamically generated unique code
      };
      console.log("Submitting Data:", finalData);

      // API request
      await makePostRequest(
        setLoading,
        "api/farmers", // API endpoint for farmers
        finalData,
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
            label="Farmer's Contact Person Phone"
            name="contactPersonPhone"
            type="tel"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Unique Code"
            name="farmersUniqueCode"
            register={() => ({})} // No validation, as it's auto-generated
            errors={errors}
            defaultValue={farmersUniqueCode}
            className="w-full"
            readOnly // Make it read-only since it's auto-generated
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
          isLoading={false} // Bind to loading state
          buttonTitle="Create Farmer"
          loadingButtonTittle="Creating Farmer, please wait..."
        />
      </form>
    </div>
  );
}
