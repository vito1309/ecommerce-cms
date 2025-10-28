import { SidebarForm } from "@/components/layout/sidebar-form";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/use-categories";
import { useEffect, useState } from "react";

export function CategoryForm() {
    const {id} = useParams<{id: string}>();
    const {data, isLoading} = useCategory(id ?? '');

    const [name, setName] = useState('');


    function handleSave(){
        
    }
    return (
        <SidebarForm 
            title={id ? "Editar Categoria" : "Nova Categoria"}
            onSave={handleSave}
        >
            {isLoading ? (

                <h4>Carregando...</h4>
            ) : (

                <>
                    <div>
                        <label htmlFor="name">Nome da Categoria</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border p-2 rounded"
                        />
                    </div>

                </>
            )}
        </SidebarForm>
    )
}