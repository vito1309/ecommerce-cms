import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { EditIcon } from "lucide-react";

type SideBarFormProps = {
  title: string;
  children: ReactNode;
  onSave?: () => void;
  loading: boolean;
  onDelete: boolean; 
}

export function SidebarForm({ 
    title,
    children,
    onSave,
    loading,
    onDelete
}: SideBarFormProps) {
    const navigate = useNavigate();
    const location = useLocation();

    function handleCloseForm(open: boolean) {
        if (!open) {
            const currentPath = location.pathname;
            const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
        }
    }
  return (
    <Sheet open={true} onOpenChange={handleCloseForm}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo e clique em Salvar
          </SheetDescription>
        </SheetHeader>

          <div className="px-8">
            {children}
          </div>

        <SheetFooter>
          <div className="flex flex-row gap-1">
            <Button
            type="button"
            onClick={onSave}
            disabled={loading}>
                Salvar
            </Button>

            <SheetClose asChild>
              <Button
              variant='outline'>
                Cancelar
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
</div>

        <Tooltip>
            <TooltipTrigger asChild>
                <Button 
                    variant="outline"
                    size="icon"
                    onClick={NavigateToId}
                >
                    <EditIcon />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Editar/remover registro</p>
            </TooltipContent>
        </Tooltip>

}