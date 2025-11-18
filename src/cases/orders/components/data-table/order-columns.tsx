import type { ColumnDef } from "@tanstack/react-table";
import { DataTableActions } from "@/components/layout/data-table-actions";
import type { OrderDTO } from "../../dto/order.dto";

export const orderColumns: ColumnDef<OrderDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },

    {
        accessorKey: 'customer.name',
        header: 'Nome do CLiente'
    },
        {
            accessorKey: 'status',
            
            )
        }
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const order = row.original;

            return(
                <div className="flex justify-end mr-4">
                    <DataTableActions itemId={order.id!} />
                </div>
            )
        }
    }
];