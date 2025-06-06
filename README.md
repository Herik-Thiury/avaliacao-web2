# Mini Projeto E-commerce: Digital Store

## Descrição do Projeto

Este projeto é uma tela inicial de um e-commerce desenvolvida com **ReactJS** utilizando o framework **Next.js (Pages Router)**. [cite_start]O objetivo principal é consumir dados de produtos de uma API externa e exibi-los de forma organizada, funcional e responsiva, demonstrando conceitos de componentização e consumo de APIs RESTful.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js (Pages Router)**: Framework React para desenvolvimento de aplicações web otimizadas, com renderização no lado do servidor e geração de sites estáticos.
- **Bootstrap 5**: Framework CSS para estilização rápida e responsividade da interface.
- [cite_start]**FakeStoreAPI**: API RESTful utilizada para obter os dados de produtos (`https://fakestoreapi.com`).
- **CSS Modules**: Para estilização específica de componentes/layouts.
- **JavaScript (ES6+)**: Linguagem de programação principal.

## Funcionalidades Implementadas

- [cite_start]**Consumo de API Externa**: Busca de dados de produtos da FakeStoreAPI utilizando `getStaticProps` do Next.js.
- [cite_start]**Exibição de Produtos**: Apresenta nome, imagem, preço e categoria de cada produto.
- **Componentização**: Estrutura modular da aplicação com:
  - Um componente `Header` para o cabeçalho/barra de navegação.
  - [cite_start]Um componente `ProductCardComponents` para cada produto individualmente.
  - [cite_start]O componente de página (`pages/index.js`) atua como o componente de listagem/contêiner dos produtos.
- [cite_start]**Estilização Básica**: Design da interface utilizando classes do Bootstrap para elementos como cards e navegação, e CSS Modules para o layout da grade de produtos.
- [cite_start]**Interface Responsiva**: O layout da página e dos produtos se adapta a diferentes tamanhos de tela (desktop, tablet, mobile).
- [cite_start]**Mensagem de Carregamento**: Exibe um indicador visual enquanto os dados da API estão sendo buscados.
- [cite_start]**Tratamento de Erros**: Exibe uma mensagem amigável caso a API não possa ser acessada ou ocorra algum erro na busca de dados.
- **Favicon e Logo**: Configuração de um favicon e uma logo no cabeçalho da aplicação.

## Como Rodar a Aplicação

Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

1.  **Clone este repositório:**

    ```bash
    git clone SEU_LINK_DO_REPOSITORIO_GITHUB
    ```

    (Substitua `SEU_LINK_DO_REPOSITORIO_GITHUB` pelo link real do seu repositório no GitHub).

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd fake-ecommerce
    ```

3.  **Instale as dependências do projeto:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Acesse a aplicação no seu navegador:**
    Abra seu navegador e digite o endereço: `http://localhost:3000`

## Observações Importantes (ESLint Warnings)

Durante o desenvolvimento com Next.js, a ferramenta ESLint pode apresentar alguns avisos (warnings) em seu terminal ou console do navegador. [cite_start]Estes avisos ocorrem porque o Next.js oferece componentes otimizados (`<Link>` de `next/link` e `<Image>` de `next/image`) que são recomendados para melhorar a performance da aplicação (como LCP - Largest Contentful Paint e consumo de largura de banda).

Neste projeto, optamos por utilizar as tags HTML padrão (`<a>` e `<img>`) em alguns locais para atender a requisitos específicos ou para demonstração, o que causa esses avisos do ESLint:

- `@next/next/no-html-link-for-pages`: Avisa sobre o uso de `<a>` para navegação interna.
- `@next/next/no-img-element`: Avisa sobre o uso de `<img>` em vez de `<Image />` otimizado.

Estes avisos **não impedem o funcionamento** da aplicação e servem como um lembrete das melhores práticas de otimização do Next.js. [cite_start]O projeto foi desenvolvido de forma a ser funcional e atender aos requisitos da atividade mesmo com a presença desses avisos.

## Critérios de Avaliação Atendidos

- **Consumo da API**: Utilização de `fetch` em `getStaticProps` para consumir dados. [cite_start]Tratamento correto da resposta da API.
- [cite_start]**Componentização**: Criação de componentes reutilizáveis (`Header`, `ProductCardComponents`) para estruturar a aplicação.
- **Apresentação dos dados**: Exibição clara e organizada dos dados na interface. [cite_start]Utilização de imagens, preços e categorias.
- [cite_start]**Estilização e Responsividade**: Interface esteticamente agradável e responsiva, adaptada a diferentes dispositivos.
- [cite_start]**Tratamento de erros e Carregamento**: Implementação de mensagens de erro e carregamento enquanto os dados estão sendo buscados.
- [cite_start]**Código limpo e boas práticas**: Organização do código, uso de nomes descritivos, e ausência de código desnecessário.

---
