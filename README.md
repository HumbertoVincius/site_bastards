# Bastards Brewery Website

Novo site da Bastards Brewery construído com Next.js 14, TypeScript, Tailwind CSS e Sanity CMS.

## Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna
- **Sanity CMS** - Sistema de gerenciamento de conteúdo headless
- **Framer Motion** - Animações
- **next-intl** - Internacionalização (PT/EN)

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite `.env.local` e adicione suas credenciais do Sanity:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - ID do seu projeto Sanity
- `NEXT_PUBLIC_SANITY_DATASET` - Dataset (geralmente "production")

3. Configure o Sanity Studio:
```bash
cd sanity/studio
npm install
```

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

5. Execute o Sanity Studio (em outro terminal):
```bash
npm run sanity
```

O site estará disponível em `http://localhost:3000`
O Sanity Studio estará disponível em `http://localhost:3000/studio`

## Estrutura do Projeto

```
site_bastards/
├── app/                    # Páginas Next.js (App Router)
│   └── [locale]/          # Páginas com suporte a múltiplos idiomas
├── components/            # Componentes React reutilizáveis
├── lib/                   # Utilitários e configurações
│   └── sanity/            # Cliente e queries do Sanity
├── messages/              # Traduções (PT/EN)
├── sanity/                # Configuração do Sanity CMS
│   ├── schemas/           # Schemas de conteúdo
│   └── studio/            # Sanity Studio
└── public/                # Arquivos estáticos
```

## Páginas

- `/` - Home
- `/manifesto` - Manifesto
- `/rotulos` - Rótulos de cervejas com filtros
- `/os-bastards` - Perfis dos fundadores
- `/tour` - Agendamento de tour na fábrica
- `/eventos` - Lista de eventos
- `/contato` - Formulário de contato
- `/store` - Loja online (em breve)
- `/pub/[slug]` - Páginas dos pubs

## Sanity CMS

O site utiliza Sanity CMS para gerenciar todo o conteúdo. Os schemas disponíveis são:

- **Beer** - Cervejas/Produtos
- **Founder** - Fundadores
- **Event** - Eventos
- **Pub** - Bares/Pubs
- **Manifesto** - Conteúdo do manifesto
- **Settings** - Configurações gerais

## Build

Para criar uma build de produção:

```bash
npm run build
npm start
```

## Deploy

O projeto está pronto para deploy em plataformas como Vercel, Netlify, ou qualquer plataforma que suporte Next.js.

## Licença

Todos os direitos reservados, 2024.

