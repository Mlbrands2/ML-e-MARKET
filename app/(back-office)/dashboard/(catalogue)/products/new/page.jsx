"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backstore/FormHeader";
import TextInput from "@/components/Forminputs/Textinputs";
import { makePostRequest } from "@/lib/apiRequest";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";
import { generateSlug } from "@/lib/generateSlug";
import ImageInput from "@/components/Forminputs/imageinput";
import SelectInput from "@/components/Forminputs/Selectinputs";
import { Plus } from "lucide-react";
import ArrayItemsInput from "@/components/Forminputs/ArrayItemsInput";

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState(["tag1", "tag2"]);
  const categories = [
    { id: 1, title: "category 1" },
    { id: 2, title: "category 2" },
    { id: 3, title: "category 3" },
  ];
  const farmers = [
    { id: 1, title: "farmer 1" },
    { id: 2, title: "farmer 2" },
    { id: 3, title: "farmer 3" },
  ];

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      setLoading(true);
      const slug = generateSlug(data.title);
      data.slug = slug;
      data.image = imageUrl;
      data.tags = tags; // Passing tags to the data object

      await makePostRequest(
        setLoading,
        "api/products",
        data,
        "Product created successfully!",
        reset
      );
      setImageUrl("");
    } catch (error) {
      console.error("Error submitting product:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <FormHeader title="New Product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Product Title" name="title" register={register} errors={errors} />
          <TextareaInput label="Product Description" name="description" register={register} errors={errors} />
          <TextInput label="Product SKU" name="sku" register={register} errors={errors} />
          <TextInput label="Product Barcode" name="barcode" register={register} errors={errors} />
          <TextInput label="Product Price" name="price" type="number" register={register} errors={errors} />
          <TextInput label="Product Sale Price" name="salePrice" type="number" register={register} errors={errors} />
          <SelectInput label="Select Category" name="categoryID" register={register} errors={errors} options={categories} />
          <SelectInput label="Select Farmer" name="farmerID" register={register} errors={errors} options={farmers} />
          <ImageInput label="Product Images" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="productImageUploader" />
          
          {/* Tags input component */}
          <ArrayItemsInput setItems={setTags} items={tags} />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTittle="Creating Product, please wait..."
        />
      </form>
    </div>
  );
}
