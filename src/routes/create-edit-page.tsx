import { FormMockInterview } from "@/components/form-mock-interview";
import { Interview } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getInterview} from "../api/mainApi/interview-api.js"
export const CreateEditPage = () => {
  const { interviewId } = useParams();
  const [interview, setInterview] = useState<Interview | null>(null);
  const fetchInterview = async () => {
    console.log(interviewId)
    if (interviewId && interviewId!="create") {
      try {
        const interviewResponse = await getInterview(interviewId);
        const interviewDoc = interviewResponse?.data?.data;
        setInterview({
                id: interviewDoc._id,
                ...interviewDoc,
              } as Interview);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchInterview();
  }, [interviewId]);

  return (
    <div className="my-4 flex-col w-full">
      <FormMockInterview initialData={interview} />
    </div>
  );
};
