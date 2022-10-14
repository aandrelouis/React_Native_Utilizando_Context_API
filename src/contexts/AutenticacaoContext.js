import { createContext, useState } from "react";


export const AutenticacaoContext = createContext();

export function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState({});
  
    function login(email, senha) {
        if(email === 'andre@gmail.com' && senha === '123') {
            setUsuario({
                nome: 'Louis',
                email: 'andre@gmail.com',
                endereco: 'Rua 1, 123',
                telefone: '123456789'
            })
            
            return 'ok';
        } else {
            return 'email ou senha incorretos';
        }

    }
  
  
    return (
    <AutenticacaoContext.Provider value={{
        usuario,
        login

    }}>
      {children}
    </AutenticacaoContext.Provider>
  );
}