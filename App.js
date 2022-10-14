import Rotas from "./src/rotas";

import { TemaProvider } from "./src/contexts/TemaContext";
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { ProductsProvider } from "./src/contexts/ProductsContext";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProductsProvider>
          <Rotas />
        </ProductsProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}