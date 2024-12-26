"use client";
import React, { useState, useEffect } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest"; // Adjust the path as needed.
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import ImageInput from "@/components/Forminputs/imageinput"; // Component for image upload

export default function NewStaff() {
  const [loading, setLoading] = useState(false); // Manage loading state
  const [staffUniqueCode, setStaffUniqueCode] = useState(""); // Manage unique code state

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  // Watch the staff's full name to generate the unique code
  const staffFullName = watch("fullName");
  const isActive = watch("isActive");

  // Generate a unique code whenever the staff's full name changes
  useEffect(() => {
    if (staffFullName) {
      const initials = staffFullName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("");
      const timestamp = Date.now();
      setStaffUniqueCode(`ST-${initials}-${timestamp}`);
    } else {
      setStaffUniqueCode("");
    }
  }, [staffFullName]);

  // Handle form submission
  async function onSubmit(data) {
    try {
      setLoading(true); // Set loading to true
      const finalData = {
        ...data,
        staffUniqueCode, // Include the dynamically generated unique code
      };
      console.log("Submitting Data:", finalData);

      // API request
      await makePostRequest(
        setLoading,
        "api/staff", // API endpoint for staff
        finalData,
        "Staff Created",
        reset
      );
    } catch (error) {
      console.error("Error submitting staff:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after submission
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
            label="Full Name"
            name="fullName"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Phone Number"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Physical Address"
            name="address"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Staff Image"
            imageUrl={""} // Provide a default empty value for the image URL
            setImageUrl={(url) => console.log("Uploaded image URL:", url)} // Handle the image URL
            endpoint="staffImageUploader"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Unique Code"
            name="staffUniqueCode"
            register={() => ({})} // No validation, as it's auto-generated
            errors={errors}
            defaultValue={staffUniqueCode}
            readOnly // Make it read-only since it's auto-generated
          />
          <ToggleInput
            label="Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
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
