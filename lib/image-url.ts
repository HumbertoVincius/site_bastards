import imageUrlBuilder from '@sanity/image-url'
import { client, isSanityConfigured } from './sanity/client'

// Cria um builder dummy quando o Sanity não está configurado
const dummyClient = {
  projectId: 'dummy',
  dataset: 'production',
}

const builder = isSanityConfigured && client
  ? imageUrlBuilder(client)
  : imageUrlBuilder(dummyClient as any)

// Objeto dummy que retorna null para todos os métodos quando não há Sanity
const dummyBuilder = {
  image: () => ({
    width: () => ({
      height: () => ({
        url: () => null,
      }),
      url: () => null,
    }),
    height: () => ({
      url: () => null,
    }),
    url: () => null,
  }),
}

export function urlFor(source: any) {
  if (!source) {
    return dummyBuilder
  }
  
  if (!isSanityConfigured || !client) {
    return dummyBuilder
  }
  
  try {
    return builder.image(source)
  } catch (error) {
    console.warn('Erro ao processar imagem do Sanity:', error)
    return dummyBuilder
  }
}

