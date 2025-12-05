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

Crie um arquivo `.env.local` na raiz do projeto e adicione:

**Para envio de emails (formulário de candidatura):**
- `SMTP_HOST` - Servidor SMTP (ex: smtp.gmail.com)
- `SMTP_PORT` - Porta SMTP (ex: 587)
- `SMTP_USER` - Usuário do email SMTP
- `SMTP_PASSWORD` - Senha do email SMTP
- `SMTP_FROM` - Email remetente (opcional, usa SMTP_USER se não definido)

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
- `/trabalhe-conosco` - Formulário de candidatura para vagas
- `/store` - Loja online (em breve)
- `/pub/[slug]` - Páginas dos pubs

## Funcionalidades

### Envio de Emails

O formulário de candidatura (`/trabalhe-conosco`) envia emails para `humberto@bastards.com.br` usando Nodemailer. Configure as variáveis de ambiente SMTP conforme descrito acima.

**Nota:** Para Gmail, você precisará usar uma "Senha de App" ao invés da senha normal da conta. Veja mais em: https://support.google.com/accounts/answer/185833

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

