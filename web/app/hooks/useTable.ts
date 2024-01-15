import { RecordsDTO } from "@app/interfaces/records";
import { TableColumn } from "@app/interfaces/table";
import { getTableInfo } from "@app/services/getTableInfo";
import { columns } from "@app/utils/table-columns";
import { create } from "zustand";

interface TableState {
  take: number;
  page: number;
  totalPages: number;
  recordsCount: number;
  tableData: RecordsDTO[];
  columns: TableColumn[];
  setTableData: (page: number) => Promise<void>;
}

export const useTable = create<TableState>((set) => ({
  take: 7,
  page: 1,
  totalPages: 0,
  recordsCount: 0,
  tableData: [],
  columns,
  setTableData: async (page: number) => {
    const { count, totalPages, data: tableData } = await getTableData(page);

    set({ tableData, page });
  },
}));

export async function getTableData(page: number) {
  const tableInfo = await getTableInfo(7, page);

  return tableInfo;
}

getTableData(1)
  .then((tableData) => {
    useTable.setState({
      tableData: tableData.data,
      totalPages: tableData.totalPages,
      recordsCount: tableData.count,
    });
  })
  .catch((err) => console.error(err));
