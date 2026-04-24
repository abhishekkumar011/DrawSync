import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/element.png"} alt="Empty" height={350} width={350} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Draw <span className="text-brand font-boldna">Sync</span></h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="cursor-pointer">Create organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none w-[calc(100vw-2rem)] max-w-[430px]">
            <div className="hidden">
              <DialogTitle></DialogTitle>
            </div>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
