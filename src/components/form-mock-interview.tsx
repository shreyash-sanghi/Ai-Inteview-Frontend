import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Interview } from "@/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";
import { Headings } from "./headings";
import { Button } from "./ui/button";
import { Loader, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { chatSession } from "@/scripts";
interface FormMockInterviewProps {
  initialData: Interview | null;
}

import { createInterview, updateInterview } from "../api/mainApi/interview-api.js"

const formSchema = z.object({
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>;

export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {},
  });

  const { isValid, isSubmitting } = form.formState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const title = initialData
    ? initialData.position
    : "Create a new mock interview";
  const breadCrumpPage = initialData ? initialData?.position : "Create";
  const actions = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? { title: "Updated..!", description: "Changes saved successfully..." }
    : { title: "Created..!", description: "New Mock Interview created..." };

  const cleanAiResponse = (responseText: string) => {
    let cleanText = responseText.trim();
    cleanText = cleanText.replace(/(json|```|`)/g, "");
    const jsonArrayMatch = cleanText.match(/\[.*\]/s);
    if (jsonArrayMatch) {
      cleanText = jsonArrayMatch[0];
    } else {
      throw new Error("No JSON array found in response");
    }

    // Step 4: Parse the clean JSON text into an array of objects
    try {
      return JSON.parse(cleanText);
    } catch (error) {
      throw new Error("Invalid JSON format: " + (error as Error)?.message);
    }
  };

  const generateAiResponse = async (data: FormData) => {
    const prompt = `
        As an experienced prompt engineer, generate a JSON array containing 5 technical interview questions along with detailed answers based on the following job information. Each object in the array should have the fields "question" and "answer", formatted as follows:

        [
          { "question": "<Question text>", "answer": "<Answer text>" },
          ...
        ]

        Job Information:
        - Job Position: ${data?.position}
        - Job Description: ${data?.description}
        - Years of Experience Required: ${data?.experience}
        - Tech Stacks: ${data?.techStack}

        The questions should assess skills in ${data?.techStack} development and best practices, problem-solving, and experience handling complex requirements. Please format the output strictly as an array of JSON objects without any additional labels, code blocks, or explanations. Return only the JSON array with questions and answers.
        `;

    const aiResult = await chatSession.sendMessage(prompt);
    const cleanedResponse = cleanAiResponse(aiResult.response.text());

    return cleanedResponse;
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
     let InterviewId;
      if (initialData) {
        // update
        if (isValid) {
          const aiResult = await generateAiResponse(data);
          const fulldata = { ...data, question: aiResult };
          const id = initialData?._id;
          await updateInterview(fulldata, id)
          InterviewId = id;
          toast(toastMessage.title, { description: toastMessage.description });
        }
      } else {
        // create a new mock interview
        if (isValid) {
          const aiResult = await generateAiResponse(data);
          console.log(aiResult);
          const fulldata = { ...data, questions: aiResult, userId: userId };
         const response = await createInterview(fulldata);
         InterviewId = response?.data?.data?._id
          toast(toastMessage.title, { description: toastMessage.description });
        }
      }

      navigate(`/generate/interview/${InterviewId}`, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Error..", {
        description: `Something went wrong. Please try again later`,
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (initialData != null) {
      form.reset({
        position: initialData.position,
        description: initialData.description,
        experience: initialData.experience,
        techStack: initialData.techStack,
      });
    }
  }, [initialData, form]);

  return (
    <>
      <Headings title={title} isSubHeading />

      <div className="h-screen md:flex">
        <div
          className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-gray-800 to-gray-700 i justify-around items-center hidden">
          <div className="p-5">
            <h1 className="text-white font-bold text-4xl font-sans mb-5">Take Intervew</h1>
            <p className="text-white mt-1"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">

          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full p-8  rounded-lg flex-col flex items-start justify-start gap-6  "
            >
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="w-full space-y-4">
                    <div className="w-full flex items-center justify-between">
                      <FormLabel>Job Position</FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Input
                        className="h-12"
                        disabled={loading}
                        placeholder="eg: Mern Stack Developer"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="techStack"
                render={({ field }) => (
                  <FormItem className="w-full space-y-4">
                    <div className="w-full flex items-center justify-between">
                      <FormLabel>Tech Stacks</FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Textarea
                        className="h-12"
                        disabled={loading}
                        placeholder="eg:-NodeJS, React, Typescript..."
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full space-y-4">
                    <div className="w-full flex items-center justify-between">
                      <FormLabel>Job Description</FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Textarea
                        className="h-12"
                        disabled={loading}
                        placeholder="eg:- describle your job role"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="w-full space-y-4">
                    <div className="w-full flex items-center justify-between">
                      <FormLabel>Years of Experience</FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        className="h-12"
                        disabled={loading}
                        placeholder="eg:- 5 Years"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />



              <div className="w-full flex items-center justify-end gap-6">
                <Button
                  type="reset"
                  size={"sm"}
                  variant={"outline"}
                  disabled={isSubmitting || loading}
                >
                  Reset Form
                </Button>
                <Button
                  type="submit"
                  size={"sm"}
                  disabled={isSubmitting || !isValid || loading}
                  variant={"outline"}
                >
                  {loading ? (
                    <Loader className="text-gray-800 animate-spin" />
                  ) : (
                    actions
                  )}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
      <Separator className="my-4" />
    </>


  );
};
