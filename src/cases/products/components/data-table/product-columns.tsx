import type { ColumnDef } from "@tanstack/react-table";
import type { ProductDTO } from "../../dtos/product.dto.ts";
import { DataTableActions } from "@/components/layout/data-table-actions";

export const productColumns: ColumnDef<ProductDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Código'
    },
    {
        accessorKey: 'name',
        header: 'Descrição'
    },
  {
    accessorKey: "actions",
    enableHiding: true,
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex justify-end mr-5">
          <DataTableActions itemId={product.id}></DataTableActions>
        </div>
      )
    }
  }
];