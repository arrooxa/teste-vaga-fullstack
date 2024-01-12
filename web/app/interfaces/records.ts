export interface RecordsDTO {
  id: number;
  nrInst: number;
  nrAgencia: number;
  cdClient: number;
  nmClient: string;
  nrCpfCnpj: string | null;
  nrContrato: number;
  dtContrato: Date;
  qtPrestacoes: number;
  vlTotal: string;
  cdProduto: number;
  dsProduto: string;
  cdCarteira: number;
  dsCarteira: string;
  nrProposta: number;
  nrPresta: number;
  tpPresta: string;
  nrSeqPre: number;
  dtVctPre: Date;
  vlPresta: string;
  vlMora: string;
  vlMulta: string;
  vlOutAcr: string;
  vlIof: string;
  vlDescon: string;
  vlAtual: string;
  idSituac: string;
  idSitVen: string;
  constVal: boolean;
}

export interface RecordsResponse {
  count: number;
  totalPages: number;
  data: RecordsDTO[];
}
