import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProductService } from "../services/product.service.ts";
import type { ProductDTO } from "../dtos/product.dto";
import { toast } from "react-toastify";


export function useProducts(){ //hook que retorna todos os dados das products
    return useQuery<ProductDTO[]>({ //o hook retorna o estado, além dos dados, coisa que a função sozinha não faz
        queryKey: ['products'], 
        queryFn: ProductService.list 
    });
}

export function useProduct(id: string){ //retorna apenas os IDs
    return useQuery<ProductDTO>({
        queryKey:['product', id],
        queryFn: () => ProductService.getById(id),
        enabled: !!id 
        //O uso do '!' indica a negação de uma informação, assim deixando habilitado que categorias que não possuam ID sejam apresentadas
        //Ao utilizar '!!' a negação informada anteriormente é negada, assim apresentado somente as categorias com ID
        //...ao realizar a busca pelos IDs e for identificado IDs iguais aos carregados anteriormente, 
        //..esta informação é puxada do cache
    });    
}

export function userCreateProduct(){
    const queryClient = useQueryClient();
    return useMutation<ProductDTO, Error, Omit<ProductDTO, 'id'>>({//A informação ID será omitida caso de um erro
        mutationFn: (product: Omit<ProductDTO, 'id'>) => ProductService.create(product),
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey: ['products']})
            toast.success('Registro adicionado com sucesso!')
        },
            onError: (error) => {
                toast.error(`Erro ao adicionar: ${error.message}`)
            }
          })
    };


export function userUpdateProduct(){
    return useMutation<ProductDTO, Error, {id: string, product: ProductDTO}>({
        mutationFn: ({id, product}) => ProductService.update(id, product)
    });
}

export function userDeleteProduct(){
    return useMutation<void, Error, string>({//<void> não traz informações
        mutationFn: (id: string) => ProductService.delete(id)
    });
}