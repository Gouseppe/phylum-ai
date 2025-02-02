import { MessageCircleQuestion } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import Button from "./Button";

interface Props {
  title: string;
  description: string;
  images?: string[];
}

function getImageUrl(name: string) {
  // note that this does not include files in subdirectories
  return new URL(`../../assets/img/${name}.png`, import.meta.url).href;
}

export const UserHelper: React.FC<Props> = ({ description, title, images }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button
            text=""
            variant="outline"
            onClick={() => {}}
            style={{ border: "none", borderRadius: "30px" }}
          >
            <div className="w-full h-full">
              <MessageCircleQuestion
                size={"1.5rem"}
                className=" text-gray-600"
              />
            </div>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:w-[700px] max-w-[95%]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>{description}</div>
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-1 ">
          {images &&
            images.map((url, index) => (
              <img
                key={url}
                src={getImageUrl(url)}
                alt={url}
                className={`${
                  index >= 2 ? "sm:hidden" : ""
                } object-contain w-full max-w-xs justify-self-center`}
              />
            ))}
        </div>
        {/* <DialogFooter>
          <Button text="submit" variant="outline" onClick={() => {}} />
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};
