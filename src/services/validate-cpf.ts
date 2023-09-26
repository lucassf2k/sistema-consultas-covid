export function cpfValidateFormat(cpf: string) {
  const cleanedCpf = cpf.replace(/\D/g, '')
  const regexValidateFormatCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
  const isValidCpf = regexValidateFormatCpf.test(cleanedCpf)
  if (isValidCpf) {
    return cleanedCpf
  }
}
