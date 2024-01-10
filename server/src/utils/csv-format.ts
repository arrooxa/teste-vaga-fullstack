import csv from "csv-parser";
import fs from "fs";
import path from "path";
import { HistoryDTO } from "../interface/history";
import { csvDataDTO } from "../interface/csv-data";
import { parseDateString } from "./parse-date";
import { docValidator } from "./doc-validator";

export function getFormattedCSV(): Promise<HistoryDTO[]> {
    return new Promise((resolve, reject) => {
        const results: HistoryDTO[] = [];

        const coolPath = path.join(process.cwd(), "src/db/data.csv");

        const stream = fs
            .createReadStream(coolPath)
            .pipe(csv())
            .on("data", (data: csvDataDTO) => {
                const formattedObject: HistoryDTO = {
                    cdCarteira: Number(data.cdCarteira),
                    cdClient: Number(data.cdClient),
                    cdProduto: Number(data.cdProduto),
                    dsCarteira: data.dsCarteira,
                    dsProduto: data.dsProduto,
                    dtContrato: parseDateString(data.dtContrato),
                    dtVctPre: parseDateString(data.dtVctPre),
                    idSituac: data.idSituac,
                    idSitVen: data.idSitVen,
                    nmClient: data.nmClient,
                    nrAgencia: Number(data.nrAgencia),
                    nrContrato: Number(data.nrContrato),
                    nrInst: Number(data.nrInst),
                    nrPresta: Number(data.nrPresta),
                    nrProposta: Number(data.nrProposta),
                    nrSeqPre: Number(data.nrSeqPre),
                    qtPrestacoes: Number(data.qtPrestacoes),
                    tpPresta: data.tpPresta,
                    vlAtual: `R$ ${Number(data.vlAtual).toFixed(2)}`,
                    vlDescon: `R$ ${Number(data.vlDescon).toFixed(2)}`,
                    vlIof: `R$ ${Number(data.vlIof).toFixed(2)}`,
                    vlMora: `R$ ${Number(data.vlMora).toFixed(2)}`,
                    vlMulta: `R$ ${Number(data.vlMulta).toFixed(2)}`,
                    vlOutAcr: `R$ ${Number(data.vlOutAcr).toFixed(2)}`,
                    vlPresta: `R$ ${Number(data.vlPresta).toFixed(2)}`,
                    vlTotal: `R$ ${Number(data.vlTotal).toFixed(2)}`,
                    nrCpfCnpj: docValidator(data.nrCpfCnpj),
                };

                results.push(formattedObject);
            })
            .once("end", () => {
                resolve(results);
            })
            .once("error", (error) => {
                reject(error);
            });
    });
}
