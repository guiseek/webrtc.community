export interface City {
  id: number
  nome: string
  microrregiao: Microrregiao
  'regiao-imediata': RegiaoImediata
}

export interface Microrregiao {
  id: number
  nome: string
  mesorregiao: Mesorregiao
}

export interface Mesorregiao {
  id: number
  nome: string
  UF: Uf
}

export interface Uf {
  id: number
  sigla: string
  nome: string
  regiao?: Uf
}

export interface RegiaoImediata {
  id: number
  nome: string
  'regiao-intermediaria': Mesorregiao
}
