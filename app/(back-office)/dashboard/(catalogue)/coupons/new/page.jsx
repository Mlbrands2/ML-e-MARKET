"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest"; // Adjust the path as needed.
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import { generateSlug } from "@/lib/generateSlug";
//import DateInput from "@/components/Forminputs/DateInput"; // Assuming you have a date input component
import ToggleInput from "@/components/Forminputs/ToggleInput";

export default function NewCoupon() {
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
      const slug = generateSlug(data.title); // Generate slug for the coupon
      data.slug = slug;

      console.log("Form Data:", data); // Debug form data

      // Call makePostRequest
      await makePostRequest(
        setLoading, // Function to manage loading state
        "api/coupons", // API endpoint for coupons
        data, // Form data
        "Coupons", // Redirect path or purpose
        reset // Function to reset the form
      );
    } catch (error) {
      console.error("Error submitting coupon:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after completion
    }
  }

  return (
    <div>
      {/* Header Section */}
      <FormHeader title="New Coupon" />
      <form
        onSubmit={handleSubmit(onSubmit)} // Handle form submission
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Coupon Code"
            name="couponCode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Expiry Date"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
         <ToggleInput
            label="Publish your category"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading} // Bind to loading state
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating Coupon, please wait..."
        />
      </form>
    </div>
  );
}
