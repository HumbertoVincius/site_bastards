import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Verifica se o Sanity está configurado
export const isSanityConfigured = !!projectId && projectId !== 'your_project_id_here'

// Cria o cliente apenas se estiver configurado
export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

// Função helper para fazer fetch com fallback para dados mock
export async function fetchWithFallback<T>(
  query: string,
  mockData: T[],
  params?: Record<string, any>
): Promise<T[]> {
  if (isSanityConfigured && client) {
    try {
      const data = await client.fetch<T[]>(query, params || {})
      return data || mockData
    } catch (error) {
      console.warn('Erro ao buscar dados do Sanity, usando dados de exemplo:', error)
      return mockData
    }
  }
  console.log('⚠️ Sanity não configurado. Usando dados de exemplo.')
  return mockData
}

// Função helper para buscar um item específico com fallback
export async function fetchOneWithFallback<T>(
  query: string,
  mockData: T[],
  findFn: (item: T) => boolean,
  params?: Record<string, any>
): Promise<T | null> {
  if (isSanityConfigured && client) {
    try {
      const data = await client.fetch<T>(query, params || {})
      return data || null
    } catch (error) {
      console.warn('Erro ao buscar dados do Sanity, usando dados de exemplo:', error)
      return mockData.find(findFn) || null
    }
  }
  return mockData.find(findFn) || null
}

