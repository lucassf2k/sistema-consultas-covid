export type Consultas = {
  id: number
  dataHorario: string
  local: string
  medico: {
    email: string
    nome: string
    cpf: string
    crm: string
    nascimento: string
  }
  paciente?: {
    email: string
    nome: string
    cpf: string
    crm?: string
    nascimento: string
  }
}
