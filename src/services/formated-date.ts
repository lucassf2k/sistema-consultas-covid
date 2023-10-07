export function transformarFormatoData(dataString: string): string {
  const partesData = dataString.split('-')
  if (partesData.length !== 3) {
    throw new Error('A data deve estar no formato "YYYY-MM-DD".')
  }
  const ano = partesData[0]
  const mes = partesData[1]
  const dia = partesData[2]
  return `${mes}/${dia}/${ano}`
}
