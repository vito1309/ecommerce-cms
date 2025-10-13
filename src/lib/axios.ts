//ao criar um arquivo com um nome separado por uma '/' é possível criar uma pasta com o nome informado antes da barra, assim como este arquivo está

import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, //Com a configuração de ambiente no arquivo '.env' a url real não é mostrada
    headers: {
        'Content-Type': 'application/json' 
        //o sistema apenas irá se comunicar a URL (http://...) com um conteúdo (Content-Type) do tipo json
    }
});

