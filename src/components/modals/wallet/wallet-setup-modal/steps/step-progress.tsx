"use client";

import { useFormContext } from "react-hook-form";

interface StepProgressProps {
  goToStep: (step: string) => void;
  currentStep: number;
}

export default function StepProgress({
  goToStep,
  currentStep,
}: StepProgressProps) {
  const form = useFormContext();

  // Only show step bar for steps "1", "2", "3" (currentStep 1, 2, 3)
  if (currentStep === 0) {
    return null;
  } // Hide for "welcome" and "confirmEmail"

  const isStepComplete = (step: string) => {
    switch (step) {
      case "welcome":
        return true; // Initial step is always complete
      case "confirmEmail":
        return form?.getValues("email") && form?.getValues("emailCode");
      case "1":
        return (
          form?.getValues("firstName") &&
          form?.getValues("lastName") &&
          form?.getValues("country") &&
          form?.getValues("placeOfBirth") &&
          form?.getValues("dateOfBirth") &&
          form?.getValues("residentialAddress") &&
          form?.getValues("city") &&
          form?.getValues("postalCode") &&
          form?.getValues("occupationIndustry") &&
          form?.getValues("occupation") &&
          form?.getValues("occupationExperience")
        );
      case "2":
        return true; // Eligibility switch step is informational
      case "3":
        return (
          form?.getValues("documentType") &&
          form?.getValues("frontSide") &&
          form?.getValues("backSide")
        );
      default:
        return false;
    }
  };

  return (
    <div className="flex flex-row items-center gap-4 w-full mb-6">
      <div className="grid grid-cols-3 gap-4 w-full">
        <div
          onClick={() => isStepComplete("confirmEmail") && goToStep("1")}
          className={`h-0.5 w-full rounded-lg cursor-pointer ${
            currentStep === 1
              ? "bg-foreground"
              : isStepComplete("1")
              ? "bg-foreground"
              : "bg-foreground/55"
          }`}
        />
        <div
          onClick={() => isStepComplete("1") && goToStep("2")}
          className={`h-0.5 w-full rounded-lg cursor-pointer ${
            currentStep === 2
              ? "bg-foreground"
              : isStepComplete("2")
              ? "bg-foreground"
              : "bg-foreground/55"
          }`}
        />
        <div
          onClick={() => isStepComplete("2") && goToStep("3")}
          className={`h-0.5 w-full rounded-lg cursor-pointer ${
            currentStep === 3
              ? "bg-foreground"
              : isStepComplete("3")
              ? "bg-foreground"
              : "bg-foreground/55"
          }`}
        />
      </div>
      <p className="text-sm text-foreground/55 text-nowrap">
        Step <span className="text-foreground">{currentStep}</span> of 3
      </p>
    </div>
  );
}
