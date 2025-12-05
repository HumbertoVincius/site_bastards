# Configuração do Sanity CMS

## Passo 1: Criar conta e projeto no Sanity

1. Acesse https://sanity.io e crie uma conta (ou faça login)
2. Vá para https://sanity.io/manage
3. Clique em "Create project"
4. Preencha:
   - **Project name**: Bastards Brewery (ou outro nome)
   - **Organization**: Selecione ou crie uma
   - **Plan**: Free (plano gratuito é suficiente para começar)
5. Após criar, você verá o **Project ID** (algo como `abc123xyz`)

## Passo 2: Configurar variáveis de ambiente

1. Na raiz do projeto, crie um arquivo chamado `.env.local`
2. Adicione as seguintes linhas:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
```

**Substitua `seu_project_id_aqui` pelo Project ID que você copiou no passo 1.**

## Passo 3: Instalar e configurar o Sanity CLI

Execute no terminal:

```bash
npm install -g @sanity/cli
```

Depois, dentro da pasta do projeto:

```bash
cd sanity
sanity init
```

Quando perguntar:
- **Select project to use**: Escolha o projeto que você criou
- **Select dataset to use**: `production`
- **Project output path**: Deixe como está (ou pressione Enter)

## Passo 4: Reiniciar o servidor

Após configurar o `.env.local`, reinicie o servidor Next.js:

```bash
npm run dev
```

## Passo 5: Acessar o Sanity Studio

Acesse: `http://localhost:3000/pt/studio` ou `http://localhost:3000/en/studio`

Aqui você poderá:
- Adicionar cervejas
- Criar eventos
- Adicionar informações dos fundadores
- Gerenciar pubs
- Editar o manifesto

## Estrutura de conteúdo

O Sanity está configurado com os seguintes tipos de conteúdo:

- **Beer** (Cerveja): Nome, tipo, descrição, imagem, ABV, IBU
- **Founder** (Fundador): Nome, foto, biografia
- **Event** (Evento): Título, data, descrição, local, imagem
- **Pub** (Bar): Nome, endereço, descrição, horários, imagens
- **Manifesto**: Conteúdo editável do manifesto
- **Settings**: Configurações gerais do site

## Problemas comuns

### Erro: "Configuration must contain `projectId`"
- Verifique se o arquivo `.env.local` existe na raiz do projeto
- Verifique se o `NEXT_PUBLIC_SANITY_PROJECT_ID` está correto
- Reinicie o servidor Next.js após criar/editar o `.env.local`

### Erro: "Project not found"
- Verifique se o Project ID está correto
- Certifique-se de que o projeto existe no painel do Sanity

### Sanity Studio não carrega
- Verifique se as variáveis de ambiente estão configuradas
- Certifique-se de que o servidor Next.js está rodando
- Tente acessar `http://localhost:3000/pt/studio` diretamente

