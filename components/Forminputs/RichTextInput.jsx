"use client";
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Quill's snow theme

export default function RichTextInput({
  label,
  name,
  value,
  setValue,
  errors,
  className = "",
}) {
  const quillRef = useRef(null); // Ref for the Quill editor
  const editorContainerRef = useRef(null); // Ref for the Quill container

  useEffect(() => {
    if (editorContainerRef.current) {
      const quill = new Quill(editorContainerRef.current, {
        theme: "snow", // Use Quill's snow theme
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // Text styling
            ["blockquote", "code-block"], // Blocks
            [{ list: "ordered" }, { list: "bullet" }], // Lists
            [{ header: [1, 2, 3, false] }], // Headers
            ["link", "image"], // Links and media
          ],
        },
      });

      // Synchronize editor content with parent state
      quill.on("text-change", () => {
        const html = editorContainerRef.current.firstChild.innerHTML;
        setValue(html);
      });

      // Set the initial value if provided
      if (value) {
        quill.root.innerHTML = value;
      }

      quillRef.current = quill;
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null; // Cleanup
      }
    };
  }, [value, setValue]);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-900 dark:text-slate-50 mb-2">
        {label}
      </label>
      <div
        ref={editorContainerRef}
        className={`w-full bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 ${className}`}
        style={{
          minHeight: "10rem", // Set a minimum height for better usability
        }}
      ></div>
      {errors && (
        <p className="text-sm text-red-500 mt-2">{errors[name]?.message}</p>
      )}
    </div>
  );
}
