import { RecordsDTO } from "@app/interfaces/records";
import { TableColumn } from "@app/interfaces/table";

const keysOfRecordsDTO: (keyof RecordsDTO)[] = [
  "id",
  "nrInst",
  "nrAgencia",
  "cdClient",
  "nmClient",
  "nrCpfCnpj",
  "nrContrato",
  "dtContrato",
  "qtPrestacoes",
  "vlTotal",
  "cdProduto",
  "dsProduto",
  "cdCarteira",
  "dsCarteira",
  "nrProposta",
  "nrPresta",
  "tpPresta",
  "nrSeqPre",
  "dtVctPre",
  "vlMora",
  "vlMulta",
  "vlOutAcr",
  "vlIof",
  "vlAtual",
  "vlDescon",
  "vlPresta",
  "idSituac",
  "idSitVen",
  "constVal",
];

export const columns: TableColumn[] = keysOfRecordsDTO.map((key) => ({
  field: key,
  name: key.toString(),
  width: 150,
}));
