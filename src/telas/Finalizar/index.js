import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProductsContext  } from '../../contexts/ProductsContext';
import { deletarTudo, salvarProduto } from '../../services/requisicoes/produtos';

export default function Finalizar({navigation}) {
  const { temaEscolhido} = useContext(TemaContext);
  const {usuario} = useContext(AutenticacaoContext);

  const { quantidade, carrinho,finalizarPedido } = useContext(ProductsContext);


  const estilo = estilos(temaEscolhido);


  async function FinalizarDeletar(){
    await finalizarPedido();
    
    navigation.navigate("Principal")
  }



  return (
    <View style={estilo.container}>
      <StatusBar />
  
      <TouchableOpacity onPress={() => FinalizarDeletar()} style={estilo.botao}>
        <Text style={estilo.botaoTexto}>Finalizar compra</Text>
      </TouchableOpacity>


    </View>
  );
}

