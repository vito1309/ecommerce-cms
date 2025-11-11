import { useMutation, useQuery } from "@tanstack/react-query";
import type { OrderDTO } from "../dto/order.dto";
import { orderService } from "../services/order.service";


export function useCategories(){ //hook que retorna todos os dados das categories
    return useQuery<OrderDTO[]>({ //o hook retorna o estado, além dos dados, coisa que a função sozinha não faz
        queryKey: ['orders'], 
        queryFn: orderService.list 
    });
}

export function useorders(id: string){ //retorna apenas os IDs
    return useQuery<OrderDTO>({
        queryKey:['OrderDTO', id],
        queryFn: () => orderService.getById(id),
        enabled: !id 
        //O uso do '!' indica a negação de uma informação, assim deixando habilitado que categorias que não possuam ID sejam apresentadas
        //Ao utilizar '!!' a negação informada anteriormente é negada, assim apresentado somente as categorias com ID
        //...ao realizar a busca pelos IDs e for identificado IDs iguais aos carregados anteriormente, 
        //..esta informação é puxada do cache
    });    
}

export function userCreateorder(){
    return useMutation<OrderDTO, Error, Omit<OrderDTO, 'id'>>({//A informação ID será omitida caso de um erro
        mutationFn: (OrderDTO: Omit<OrderDTO, 'id'>) => orderService.create(OrderDTO)
    });
}

export function userUpdateorder(){
    return useMutation<OrderDTO, Error, {id: string, OrderDTO: OrderDTO}>({
        mutationFn: ({id, OrderDTO}) => orderService.update(id, OrderDTO)
    });
}

export function userDeleteorder(){
    return useMutation<void, Error, string>({//<void> não traz informações
        mutationFn: (id: string) => orderService.delete(id)
    });
}