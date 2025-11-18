import { BreadCrumb } from "@/components/layout/bread-crumb"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { OrderDataTable } from "./order-data-table"

export function OrderLayout() {


    const navigate = useNavigate();

    function handleCreate() {
        navigate('/orders/new');
    }

    return (
        <div className="p-4">

            <BreadCrumb title="Marcas"/>    

            <div className="flex flex-col gap-4 py-4">
            
            <div className="flex flex-row justify-end gap- my-4">
                <InputGroup className="max-w-96">
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                    <Search />
                    </InputGroupAddon>
            </InputGroup>
            <Button onClick={handleCreate}>
                <Plus>
                    Adicionar
                </Plus>
            </Button>
            </div>



            <div>
            </div>
                <OrderDataTable></OrderDataTable>

            </div>



            
        </div>
    )
}