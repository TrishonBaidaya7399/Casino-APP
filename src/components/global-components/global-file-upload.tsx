"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import UploadSvg from "../common/svg_icons/upload-svg";

type GlobalFileUploadProps = {
  onChange: (file: File | null) => void;
  value?: File | null; // To sync with form field
  preview?: string | null; // Optional preview URL from parent
  id: string; // Unique ID for the input
};

export default function GlobalFileUpload({
  onChange,
  value,
  preview,
  id,
}: GlobalFileUploadProps) {
  const [file, setFile] = useState<File | null>(value || null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(preview || null);
  const fileInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    setFile(value as File);
    if (value && value instanceof File) {
      setPreviewUrl(URL.createObjectURL(value));
    } else {
      setPreviewUrl(null);
    }
  }, [value, id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onChange(selectedFile);
    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
    onChange(null);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {URL.revokeObjectURL(previewUrl)};
    };
  }, [previewUrl]);

  return (
    <div className="w-full">
      <input
        id={id}
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden" 
        accept="image/png,image/jpeg,application/pdf"
      />
      <label
        htmlFor={id}
        className="w-full flex flex-row items-center justify-center h-12 border-2 border-dashed border-foreground/55 rounded-lg cursor-pointer bg-transparent hover:bg-sidebar transition-colors duration-300"
      >
        {file ? (
          <div className="relative w-full h-full">
            <Image
              height={60}
              width={60}
              src={previewUrl || ""}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemove();
              }}
              className="absolute top-1 right-1 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs hover:bg-destructive/80"
            >
              ×
            </button>
          </div>
        ) : (
          <span className="flex flex-row items-center justify-between gap-4 w-full py-2 px-4">
            <span className="text-foreground/55">
              Upload {value ? "new" : ""} file
            </span>
            <div className="text-foreground">
              <UploadSvg />
            </div>
          </span>
        )}
      </label>
    </div>
  );
}
