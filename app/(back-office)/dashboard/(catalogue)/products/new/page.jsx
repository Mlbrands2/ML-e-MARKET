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

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState(["tag1", "tag2"]);
  const [showTagForm, setShowTagForm] = useState(false);
  const [newTag, setNewTag] = useState("");
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
      data.tags = tags;

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

  const handleTagSearch = (e) => {
    setNewTag(e.target.value);
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

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

          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Tags</h3>
              {!showTagForm && (
                <button
                  type="button"
                  onClick={() => setShowTagForm(true)}
                  className="flex items-center space-x-1 text-blue-600 hover:underline"
                >
                  <Plus />
                  <span>Add Tags</span>
                </button>
              )}
            </div>

            {showTagForm && (
              <div className="relative mt-3 p-4 border rounded-lg bg-gray-100 dark:bg-gray-700">
                <input
                  type="text"
                  placeholder="Search or add new tags..."
                  value={newTag}
                  onChange={handleTagSearch}
                  className="w-full p-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Tag
                </button>
                <button
                  type="button"
                  onClick={() => setShowTagForm(false)}
                  className="w-full mt-6 px-4 py-2 text-4xl text-white dark:bg-slate-800 dark:hover:bg-slate-900 bg-slate-400 hover:bg-slate-300 rounded-lg transition-all"
                >
                  &times;
                </button>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-white hover:text-gray-300"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
        <SubmitButton
          isLoading={false}
          buttonTitle="Create Product"
          loadingButtonTittle="Creating Product, please wait..."
        />
      </form>
    </div>
  );
}
