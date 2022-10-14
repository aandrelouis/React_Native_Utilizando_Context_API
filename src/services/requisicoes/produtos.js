import api from '../api';

export async function salvarProduto(produto){
    try{
        const response = await api.post('/produtos', produto);
        return response.data;
    }
    catch(error){
        console.log('erro ' +error);
        return {}
    }
}

export async function pegarProdutos(){
    try{
        const response = await api.get('/produtos');
        return response.data;
    }
    catch(error){
        console.log('erro ' +error);
        return []
    }
}

export async function deletarProduto(produto){
    try{
        const response = await api.delete(`/produtos/${produto.id}`);
        return response.data;
    }
    catch(error){
        console.log('erro ' +error);
        return []
    }
}