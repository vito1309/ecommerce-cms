import { useMutation, useQuery } from "@tanstack/react-query";
import type { BrandDTO } from "../dtos/brand.dto";
import { BrandService } from "../services/brand.service";

export function useBrands(){ //hook que retorna todos os dados das brands
    return useQuery<BrandDTO[]>({ //o hook retorna o estado, além dos dados, coisa que a função sozinha não faz
        queryKey: ['brands'], 
        queryFn: BrandService.list 
    });
}

export function useBrand(id: string){ //retorna apenas os IDs
    return useQuery<BrandDTO>({
        queryKey:['BrandDTO', id],
        queryFn: () => BrandService.getById(id),
        enabled: !id 
        //O uso do '!' indica a negação de uma informação, assim deixando habilitado que categorias que não possuam ID sejam apresentadas
        //Ao utilizar '!!' a negação informada anteriormente é negada, assim apresentado somente as categorias com ID
        //...ao realizar a busca pelos IDs e for identificado IDs iguais aos carregados anteriormente, 
        //..esta informação é puxada do cache
    });    
}

export function userCreateBrand(){
    return useMutation<BrandDTO, Error, Omit<BrandDTO, 'id'>>({//A informação ID será omitida caso de um erro
        mutationFn: (BrandDTO: Omit<BrandDTO, 'id'>) => BrandService.create(BrandDTO)
    });
}

export function userUpdateBrand(){
    return useMutation<BrandDTO, Error, {id: string, BrandDTO: BrandDTO}>({
        mutationFn: ({id, BrandDTO}) => BrandService.update(id, BrandDTO)
    });
}

export function userDeleteBrand(){
    return useMutation<void, Error, string>({//<void> não traz informações
        mutationFn: (id: string) => BrandService.delete(id)
    });
}