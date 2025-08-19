# Criando um aplicativo expo

Um passo a passo de como criar um arquivo expo do zero.

## Pré requisitos
-   Node.js instalado 
    
-   npm 

## Criando um projeto

Para criar um novo projeto, execute o seguinte comando:
 ` npx create-expo meu-projeto`

## Navegar para o diretório do projeto
Executar: 
 `cd meu-projeto`

## Inicializar o projeto

`npx expo start ` 
ou
`npm start`

## Estrutura do projeto criado 

meu-projeto/
├── assets/          # Arquivos estáticos (imagens, fonts)
├── node_modules/    # Dependências
├── App.js          # Arquivo principal
├── app.json        # Configurações do Expo
├── package.json    # Dependências e scripts
└── .gitignore      # Arquivos ignorados pelo Git

## Testar o projeto

-   **Expo Go**: Instale o app "Expo Go" no seu celular e escaneie o QR code  
-   **Navegador**: Acesse  [http://localhost:19002](http://localhost:19002/)  para ver a interface web


## Resetando o arquivo
Após criar o projeto é necessário reiniciar o mesmo para começar um arquivo novo do zero.
Para isso basta executar o código:

    npm run reset-project

## Comandos uteis 

### Executar em plataforma específica
npx expo start --android
npx expo start --ios
npx expo start --web

### Instalar dependências
npx expo install [package-name]
