import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrganizationProfile } from "@clerk/nextjs";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 bg-transparent border-none min-w-fit w-[calc(100vw-2rem)] sm:w-auto flex justify-center">
        <div className="hidden">
          <DialogTitle></DialogTitle>
        </div>

        <div className="max-h-[80vh] overflow-y-auto overflow-x-hidden w-full rounded-xl">
          <div className="w-full sm:w-[880px]">
            <OrganizationProfile routing="hash" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
