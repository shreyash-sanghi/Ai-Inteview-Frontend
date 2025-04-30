import { Interview } from "@/types";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { ChevronsRight,  MonitorStop, Rows4 } from "lucide-react";
import { Button } from "@/components/ui/button";
interface InterviewPinProps {
  interview: Interview;
  onMockPage?: boolean;
}

export const InterviewPin = ({
  interview,
  onMockPage = false,
}: InterviewPinProps) => {
  const navigate = useNavigate();

  console.log(interview)
  return (
    <Card className="p-4 rounded-md  hover  text-white cursor-pointer transition-all space-y-4">
      <CardTitle className="text-lg">{interview?.position}</CardTitle>
      <CardDescription>{interview?.description}</CardDescription>
      <div className="w-full flex items-center gap-2 flex-wrap">
        {interview?.techStack.split(",").map((word, index) => (
          <Badge
            key={index}
            variant={"outline"}
            className=" rounded-md text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
          >
            {word}
          </Badge>

        ))}
      </div>

      <CardFooter
        className={cn(
          "w-full flex items-center p-0",
          onMockPage ? "justify-end" : "justify-between"
        )}
      >
    

        {!onMockPage && (
          <div className="flex justify-between w-full mt-10 ">
            <span className="flex">

            <TooltipButton
              content="View"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/${interview?._id}`, { replace: true });
              }}
              disbaled={false}
              buttonClassName="hover:text-blue-500 "
              icon={<MonitorStop />}
              loading={false}
            />

            <TooltipButton
              content="Past Feedback"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/feedback/${interview?._id}`, {
                  replace: true,
                });
              }}
              disbaled={false}
              buttonClassName="hover:text-yellow-500 "
              icon={<Rows4 />}
              loading={false}
              />
              </span>
            <Button
              onClick={() => {
                navigate(`/generate/interview/${interview?._id}`, {
                  replace: true,
                });
              }}
            className="border-2 hover:border-green-500 rounded-md text-lg" >
             Start <ChevronsRight />
          </Button>
           
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
