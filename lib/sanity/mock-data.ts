// Dados de exemplo para quando o Sanity não estiver configurado

export const mockBeers = [
  {
    _id: '1',
    name: 'Jean Le Blanc',
    type: 'witbier',
    description: 'Cerveja de trigo belga tradicional',
    abv: 5.0,
    ibu: 15,
    slug: { current: 'jean-le-blanc' },
  },
  {
    _id: '2',
    name: 'Zé do Morro',
    type: 'premium lager',
    description: 'Lager premium brasileira',
    abv: 4.8,
    ibu: 18,
    slug: { current: 'ze-do-morro' },
  },
  {
    _id: '3',
    name: 'Willie The Bitter',
    type: 'american pale ale',
    description: 'Pale ale americana com lúpulo cítrico',
    abv: 5.5,
    ibu: 35,
    slug: { current: 'willie-the-bitter' },
  },
  {
    _id: '4',
    name: 'Piná a Vivá',
    type: 'imperial india pale lager',
    description: 'IPL imperial com alta lupulagem',
    abv: 7.5,
    ibu: 65,
    slug: { current: 'pina-a-viva' },
  },
  {
    _id: '5',
    name: 'Mark The Shadow',
    type: 'oatmeal stout',
    description: 'Stout cremosa com aveia',
    abv: 6.0,
    ibu: 25,
    slug: { current: 'mark-the-shadow' },
  },
  {
    _id: '6',
    name: 'Hector 5 Rounds',
    type: 'american india pale ale',
    description: 'IPA americana intensa',
    abv: 6.5,
    ibu: 70,
    slug: { current: 'hector-5-rounds' },
  },
  {
    _id: '7',
    name: 'Juicy Jill',
    type: 'new england indian pale ale',
    description: 'NEIPA turbia e suculenta',
    abv: 6.2,
    ibu: 45,
    slug: { current: 'juicy-jill' },
  },
  {
    _id: '8',
    name: 'GIN Bastardo',
    type: 'gin',
    description: 'Gin artesanal com botânicos selecionados',
    abv: 40,
    slug: { current: 'gin-bastardo' },
  },
]

export const mockFounders = [
  {
    _id: '1',
    name: 'Xico',
    bio: 'Um dos fundadores da Bastards Brewery, apaixonado por cerveja artesanal.',
  },
  {
    _id: '2',
    name: 'Humberto',
    bio: 'Co-fundador da Bastards, especialista em produção cervejeira.',
  },
  {
    _id: '3',
    name: 'Richard',
    bio: 'Fundador da Bastards Brewery, visionário do projeto desde 2013.',
  },
]

export const mockEvents: any[] = []

export const mockPubs = [
  {
    _id: '1',
    name: 'We Are Bastards Pub',
    address: 'Av. Iguaçu, 2300 – Água Verde, Curitiba – PR',
    description: 'Localizado na Av. Iguaçu conta com um cardápio extenso focado em rangos com carne de porco, drinks pra meter o louco e claro, um taplist com 32 torneiras de beras de linha Bastards e convidadas.',
    hours: 'Segunda a Domingo: 18h - 02h',
    slug: { current: 'we-are-bastards' },
  },
  {
    _id: '2',
    name: 'Bar da Fábrica',
    address: 'Rua Comendador Lustoza de Andrade, 69 – Bom Retiro, Curitiba/PR',
    description: 'Um bar dentro da fábrica bastarda, que proporciona aos clientes uma experiência completa e a visualização da produção de cervejas de dentro do bar.',
    hours: 'Segunda a Sábado: 11h - 23h',
    slug: { current: 'bar-da-fabrica' },
  },
]

