import type { ColumnDef } from "@tanstack/react-table";
import type { BrandDTO } from "../../dtos/brand.dto";
import { DataTableActions } from "@/components/layout/data-table-actions";

export const brandColumns: ColumnDef<BrandDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },
    {
        accessorKey: 'name',
        header: 'Nome da Marca'
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const brand = row.original;

            return(
                <div className="flex justify-end mr-4">
                    <DataTableActions itemId={brand.id!} />
                </div>
            )
        }
    }
];