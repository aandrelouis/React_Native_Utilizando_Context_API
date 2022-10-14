import { createContext, useEffect, useState } from "react";
import { deletarProduto, pegarProdutos, salvarProduto } from "../services/requisicoes/produtos";

export const ProductsContext = createContext();

export function ProductsProvider({ children}) {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [ultimosVistos, setUltimosVistos] = useState([]);


    useEffect(async() => {
       const resultado = await pegarProdutos();
        setCarrinho(resultado);
        setQuantidade(resultado.length);
    }, []);


    async function viuProduto(produto){
        setQuantidade(quantidade + 1);


        const resultado = await salvarProduto(produto);

        let novoCarrinho = carrinho;
        novoCarrinho.push(resultado);
        setCarrinho(novoCarrinho);

        let novosVistos = new Set(ultimosVistos);
        novosVistos.add(produto);
        setUltimosVistos([...novosVistos]);
    }
    
    async function finalizarPedido(){
        try{
            carrinho.forEach(async produto => {
                 await deletarProduto(produto);
            })
    
            setQuantidade(0);
            setCarrinho([]);
            return 'Pedido finalizado com sucesso';
        }
        catch(error){
            console.log(error);
        }
       
    }

    
    
    return (
        <ProductsContext.Provider
        value={{
            quantidade,
            carrinho,
            ultimosVistos,
            viuProduto,
            finalizarPedido
        }}
        >
            {children}
        </ProductsContext.Provider>
    )
}