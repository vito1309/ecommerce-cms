import { api } from "../../../lib/axios";
import type { BrandDTO } from "../dtos/brand.dto";

const _ENDPOINT = '/brands'

export const BrandService = {

    async list(): Promise<BrandDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data;
    },

    async create(Brand: BrandDTO): Promise<BrandDTO> {
        const result = await api.post(_ENDPOINT, Brand);
        return result.data;
    },

    async getById(id: string): Promise<BrandDTO> {
        const result = await api.get(`${_ENDPOINT}/${id}`);
        return result.data;
    },
    
    async update(id: string, Brand: BrandDTO): Promise<BrandDTO> {
        const result = await api.put(`${_ENDPOINT}/${id}`, Brand);
        return result.data;
    },
    
    async delete(id: string): Promise<void>{
        const result = await api.delete(`${_ENDPOINT}/${id}`);
        return result.data;
    }

}



//atributo(): valor