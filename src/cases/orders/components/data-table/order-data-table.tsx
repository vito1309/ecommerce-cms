import { DataTable } from "@/components/ui/data-table";
import { orderColumns } from "./order-columns";
import { useorders } from "../../hooks/use-order";

type OrderDataTableProps = {
  searchTerm?: string;
}
export function OrderDataTable({
  searchTerm
}:OrderDataTableProps) {

    const {data: orders, isLoading} = useorders();

    return (
        <div>
            { isLoading ? (
                <p>Carregando...</p>
            ) : (
                <DataTable columns={orderColumns} 
                    data={orders!.filter((p) => p.name.toLowerCase().includes(searchTerm?.toLowerCase() ?? ''))}  
                />
            )}
        </div>

    )
}