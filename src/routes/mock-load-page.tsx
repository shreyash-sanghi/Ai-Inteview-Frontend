import { Interview } from "@/types";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import { Button } from "@/components/ui/button";
import { ArrowRightToLine,  WebcamIcon } from "lucide-react";
import { InterviewPin } from "@/components/pin";
import WebCam from "react-webcam";
import {getInterview} from "../api/mainApi/interview-api.js";
export const MockLoadPage = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);

  const navigate = useNavigate();

  const fetchInterviewData = async()=>{
    try{
      setIsLoading(true);
     const response = await getInterview(interviewId);
     setInterview(response?.data?.data)
    }catch(error){
      console.log(error);
    }
        finally {
          setIsLoading(false);
        }
  }

  useEffect(() => {
    fetchInterviewData();
  }, [interviewId, navigate]);

  if (isLoading) {
    return <LoaderPage className="w-full h-[70vh]" />;
  }

  if (!interviewId) {
    navigate("/generate", { replace: true });
  }

  if (!interview) {
    navigate("/generate", { replace: true });
  }
{console.log(interview)}
  return (
    <div className="flex flex-col text-white w-full gap-8 py-5">
             <h1 className="text-white font-bold text-3xl underline underline-offset-2 font-sans ">Start Intervew</h1>

<section className=" bg-blueGray-200 min-h-screen -mt-24">
  <div className="container mx-auto px-4">
   
    <div className="flex flex-wrap pt-10 items-center mt-16">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
       {interview && <InterviewPin interview={interview} onMockPage />}
        
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
        <Link to={`/generate/interview/${interviewId}/start`}>
          <Button className="border border-green-500" size={"sm"}>
            Start <ArrowRightToLine />
          </Button>
        </Link>
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          {interview?.description}
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to
          go. Just make sure you enable them first via JavaScript.
        </p>
        <a href="#" className="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
      </div>
       <div className="w-full md:w-4/12 px-4 mx-auto">
  <div className="w-full h-[400px] md:w-96 flex flex-col items-center justify-center bg-gray-100 border rounded-2xl shadow-lg overflow-hidden transition-all">
    {isWebCamEnabled ? (
      <WebCam
        onUserMedia={() => setIsWebCamEnabled(true)}
        onUserMediaError={() => setIsWebCamEnabled(false)}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <WebcamIcon className="w-20 h-20 text-gray-400" />
        <p className="mt-4 text-gray-500 text-sm">Webcam Disabled</p>
      </div>
    )}
  </div>

  <div className="flex items-center justify-center mt-6">
    <Button 
      className="px-6 py-2 rounded-full bg-gray-400 hover:bg-gray-500 text-black font-semibold transition-all"
      onClick={() => setIsWebCamEnabled(!isWebCamEnabled)}
    >
      {isWebCamEnabled ? "Disable Camere" : "Enable Camera"}
    </Button>
  </div>
</div>

    </div>
  </div>
 
</section>     
    </div>
  );
};
