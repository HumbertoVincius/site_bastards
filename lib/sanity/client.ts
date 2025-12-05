// Função helper para retornar dados mock (compatibilidade com código existente)
export async function fetchWithFallback<T>(
  query: string,
  mockData: T[],
  params?: Record<string, any>
): Promise<T[]> {
  return mockData
}

// Função helper para buscar um item específico com fallback
export async function fetchOneWithFallback<T>(
  query: string,
  mockData: T[],
  findFn: (item: T) => boolean,
  params?: Record<string, any>
): Promise<T | null> {
  return mockData.find(findFn) || null
}
