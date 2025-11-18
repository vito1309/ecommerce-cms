import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderStatus } from "@/cases/orders/dto/order.dto";
import { Badge } from "../ui/badge";
import { Info } from "lucide-react";

type DataTableBadgeProps = {
    itemId: string | number;
}
export function DataTableBadge({
    itemId
}: DataTableBadgeProps) {
    const info = OrderStatus.find((s) => s.value === status)
    }

    return (
        status ? ()(
            <Badge
            variant="outline"
            className={´${Info?.bg} ${info?.border} ${Info.text}´}
            >
                {Info?.label}
            </Badge>
        )(
            <p>Não encontrado!</p>
        )
        )
    )

