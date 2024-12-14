"use client"
import React, { useState } from 'react';
import { X } from "lucide-react";
import FormHeader from '@/components/backstore/FormHeader';
import TextInput from '@/components/Forminputs/Textinputs';


import {useForm} from "react-hook-form"
import SubmitButton from '@/components/Forminputs/SubmitButton';
import TextareaInput from '@/components/Forminputs/TextareaInput';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/Forminputs/imageinput';

export default function NewCategory() {
  const [imageUrl,setImageUrl]=useState("")
  const {register,handleSubmit,formState:{errors}}=useForm();
  async function onSubmit(data) {
    const slug=generateSlug(data.title)
    data.slug=slug
    console.log(data);
  }
  return (
    <div>
      {/* Header Section */}
     <FormHeader title="New category"/>
    <form onSubmit={handleSubmit(onSubmit)}className='w-full max-w-5xl p- bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Category Title"
                    name="title"
                    register={register}
                    errors={errors}
        />  
        <TextareaInput
          label="Category Description"
          name="description"
          register={register}
          errors={errors}/>
          <ImageInput label="category image"/>
      </div>
      <SubmitButton imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="categoryimageUploader" isLoading={false} buttonTitle="Create Category" loadingButtonTittle="Creating Category please wait.."/>
    </form>
      {/* Additional Fields */}
      {/*
       -id
       -title
       -slug
       -image
       -description
       */}
    </div>
  );
};
