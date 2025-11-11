import { DataTable } from "@/components/ui/data-table";
import { categoryColumns } from "./brand-columns";
import { useCategories } from "../../hooks/use-brands";

export function CategoryDataTable() {

    const{data:categories, isLoading} = useCategories();

    return(
        <div>
            {isLoading ? (
                <p>Carregando</p>
            ) : (
                <DataTable columns={categoryColumns} data={categories!}/>
            )}
        </div>
    )
}