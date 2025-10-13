import { api } from "../../../lib/axios";
import type { CategoryDTO } from "../dtos/category.dto";

const _ENDPOINT = '/categories'

export const CateogryService = {

    async list(): Promise<CategoryDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    },

    async create(category: CategoryDTO): Promise<CategoryDTO> {
        const result = await api.post(_ENDPOINT, category);
        return result.data;
    },

    async getById(id: string): Promise<CategoryDTO> {
        const result = await api.get(`${_ENDPOINT}/${id}`);
        return result.data;
    },
    
    async update(id: string, category: CategoryDTO): Promise<CategoryDTO> {
        const result = await api.put(`${_ENDPOINT}/${id}`, category);
        return result.data;
    },
    
    async delete(id: string): Promise<void>{
        const result = await api.delete(`${_ENDPOINT}/${id}`);
        return result.data;
    }

}



//atributo(): valor