import { SidebarForm } from "@/components/layout/sidebar-form";
import { Form, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { id } from "zod/v4/locales";
import { useBrands, userCreateBrand, userDeleteBrand, userUpdateBrand } from "../hooks/use-brands";


const formSchema = z.object({
  name: z.string().min(2, 'Informe pelo menos 2 caracteres').max(60, 'Máximo de 60 caracteres atingidos'),
})


export function BrandForm() {
    const navigate = useNavigate()
    const {id} = useParams<{id: string}>();
    const {data, isLoading} = useBrands(id ?? '');

    const createbrand = userCreateBrand();
    const updatebrand = userUpdateBrand();
    const deletebrand = userDeleteBrand()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: ''
        }
    });

    useEffect(()=>{
        if(data){
            form.reset({
                name: data.name
            }
            )
        
        }
    }, [data, form])    
    
    function onSubmit(value: z.infer<typeof formSchema>){
        if (id){
            updatebrand.mutate({
                id, 
                BrandDTO: {
                    name: value.name
                }
            },{
                onSettled: () => {
                    navigate('/brands')
                }
            });
        } else   {
            createbrand.mutate(
               
                {name: value.name},
            {
                onSettled: () => {
                    navigate('/brands')
                }
            });
        }
    }

    function onDelete(){
        if (id) {
            deletebrand.mutate(id,{
                onSettled: () => {
                    navigate('/brands')
                }
            })
        }
    }




return (
        <SidebarForm 
            {...(id && {onDelete: onDelete})}
            isLoading={isLoading}
            title={id ? "Atualizar Marca" : "Cadastro de Marca" }
            onSave={form.handleSubmit(onSubmit)}
        >
            <Form {...form}>
                <form className="space-y-4 ">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </form>
            </Form>
        </SidebarForm>
    )
}