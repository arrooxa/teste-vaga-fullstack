import { RecordsDTO } from "@app/interfaces/records";
import { GridColDef } from "@mui/x-data-grid";

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

export const columns: GridColDef[] = keysOfRecordsDTO.map((key) => ({
  field: key,
  headerName: key.toString(),
  width: 150,
}));
