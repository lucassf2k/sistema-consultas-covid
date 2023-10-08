export function transformarFormatoDataHora(dataHoraString: string): string {
  const [dataParte, horaParte] = dataHoraString.split('T')
  const [ano, mes, dia] = dataParte.split('-')
  const [hora, minuto] = horaParte.split(':')

  return `${dia}/${mes}/${ano} ${hora}:${minuto}`
}
