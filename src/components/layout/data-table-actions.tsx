import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Button } from "../ui/button"
import { EditIcon } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"

type DataTableAcionsProps = {
    itemId: string
}



export function DataTableActions({itemId}: DataTableAcionsProps)    {

    const location = useLocation();
    const navigate = useNavigate();

    function NavigateToId()   {
        const path = location.pathname;
        navigate(`${path}$/{itemId}`);
    }

    return (
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
    )
}