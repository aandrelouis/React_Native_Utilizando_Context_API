<h1 align="center">
    <img alt="ContextAPI" title="#ContextAPI" src=".images/header.png" width="100%" />
</h1>

# ⚛️ React Native: utilizando o Context API nas suas aplicações

O projeto foi desenvolvido durante do curso **React Native: utilizando o Context API nas suas aplicações** cujo o objetivo do projeto é implementar uma aplicação feita em React Native que simula um e-commerce. A ideia é usar o Context API, do react, para ver a vantagem de se ter estados globais na aplicação. Também é usado o AsyncStorage e uma Web API para ter a persistência dos dados.


![foto1](https://github.com/aandrelouis/React_Native_Utilizando_Context_API/blob/main/assets/App/foto1.png)

## 🧑‍💻 Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- `Expo`: tecnologia para simplificar o ambiente de desenvolvimento
- `Componentes React Native`: componentes já existentes básicos da tecnologia para compor a tela
- `Componentes customizados`: criação e utilização de componentes customizados
- `StyleSheet`: estilização básica de componentes
- `Json Server`: Para criação de fake Api
- `Web APi`: Através de requisições conectar a aplicação com outras aplicações
- `Async Storage`: Para salvar dados diretamente no dispositivo



## :information_source: Como usar
Para copiar e executar essa aplicação, você precisa de três pré-requisitos: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.


## 🛠️ Abrir e rodar o projeto

```bash
# Clonar esse repositório
$ git clone https://github.com/aandrelouis/React_Native_Utilizando_Context_API
# Vá para o ropositório
$ cd React_Native_Utilizando_Context_API
# Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
$ npm install
# Então rodar o projeto:
$ npm start
```

## 🛠️  Executar a Web API

```bash
# Execute em outro terminal (dentro da pasta AluraCommerce)
# Lembre-se de alterar o endereco ip (192.168.5.123) para o do seu computador!
$ json-server --watch --host 192.168.5.123 db.json
```


[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
