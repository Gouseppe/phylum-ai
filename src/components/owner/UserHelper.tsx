import { MessageCircleQuestion } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import Button from "./Button";

interface Props {
  title: string;
  description: string;
}

export const UserHelper: React.FC<Props> = ({ description, title }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          text=""
          variant="outline"
          onClick={() => {}}
          style={{ border: "none", borderRadius: "30px" }}
        >
          <div className="w-full h-full">
            <MessageCircleQuestion size={"1.5rem"} className=" text-gray-600" />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[700px] max-w-[95%]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {/* <DialogFooter>
          <Button text="submit" variant="outline" onClick={() => {}} />
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};
