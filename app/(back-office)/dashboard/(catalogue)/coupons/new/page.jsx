"use client";
import React, { useState, useEffect } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest"; // Adjust the path as needed.
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";

// Utility function to generate a coupon code
const generateCouponCode = (title, expiryDate) => {
  if (!title || !expiryDate) return "";
  const formattedTitle = title.replace(/\s+/g, "").toUpperCase(); // Remove spaces and convert to uppercase
  const formattedDate = expiryDate.split("-").reverse().join(""); // Format date as DDMMYYYY
  return `${formattedTitle}${formattedDate}`;
};

export default function NewCoupons() {
  const [loading, setLoading] = useState(false); // Manage loading state
  const [couponCode, setCouponCode] = useState(""); // State for coupon code

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Watch for form field changes
  const title = watch("title");
  const expiryDate = watch("expiryDate");

  // Update coupon code dynamically
  useEffect(() => {
    setCouponCode(generateCouponCode(title, expiryDate));
  }, [title, expiryDate]);

  // Handle form submission
  async function onSubmit(data) {
    try {
      setLoading(true); // Set loading to true
      const finalData = {
        ...data,
        couponCode, // Include the dynamically generated coupon code
      };
      console.log("Submitting Data:", finalData);

      // API request (uncomment and configure as needed)
      await makePostRequest(
       setLoading,
       "api/coupons",
       data,
      "Coupons Created",
        reset
      );
    } catch (error) {
      console.error("Error submitting coupon:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after submission
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
          />
          <TextInput
            label="Coupon Code"
            name="couponCode"
            register={() => ({})} // Prevent validation as it's generated dynamically
            errors={errors}
            defaultValue={couponCode} // Display dynamically generated coupon code
            className="w-full"
            readOnly // Make it read-only since it’s auto-generated
          />
          <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton
          isLoading={loading} // Bind to loading state
          buttonTitle="Create Coupon"
          loadingButtonTittle="Creating Coupon, please wait..."
        />
      </form>
    </div>
  );
}
