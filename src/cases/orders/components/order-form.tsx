import { SidebarForm } from "@/components/layout/sidebar-form";
import { Form, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { id } from "zod/v4/locales";
import { useorders, userCreateorder, userDeleteorder, userUpdateorder } from "../hooks/use-order";


const formSchema = z.object({
  name: z.string().min(2, 'Informe pelo menos 2 caracteres').max(60, 'Máximo de 60 caracteres atingidos'),
})


export function OrderForm() {
    const navigate = useNavigate()
    const {id} = useParams<{id: string}>();
    const {data, isLoading} = useorders(id ?? '');

    const createorder = userCreateorder();
    const updateorder = userUpdateorder();
    const deleteorder = userDeleteorder()

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
            updateorder.mutate({
                id, 
                OrderDTO: {
                    name: value.name
                }
            },{
                onSettled: () => {
                    navigate('/orders')
                }
            });
        } else   {
            createorder.mutate(
               
                {name: value.name},
            {
                onSettled: () => {
                    navigate('/orders')
                }
            });
        }
    }

    function onDelete(){
        if (id) {
            deleteorder.mutate(id,{
                onSettled: () => {
                    navigate('/orders')
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