"use client";

import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useTable } from "@app/hooks/useTable";

const Table: React.FC = () => {
  const [
    columns,
    recordsCount,
    setTableData,
    page,
    tableData,
    take,
    totalPages,
  ] = useTable((state) => [
    state.columns,
    state.recordsCount,
    state.setTableData,
    state.page,
    state.tableData,
    state.take,
    state.totalPages,
  ]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column) => (
                <th scope="col" className="px-6 py-3" key={column.field}>
                  {column.headerName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={data.id}
              >
                <td className="px-6 py-4">{data.id}</td>
                <td className="px-6 py-4">{data.nrInst}</td>
                <td className="px-6 py-4">{data.nrAgencia}</td>
                <td className="px-6 py-4">{data.cdClient}</td>
                <td className="px-6 py-4">{data.nmClient}</td>
                <td className="px-6 py-4">{data.nrCpfCnpj ?? "N/A"}</td>
                <td className="px-6 py-4">{data.nrContrato}</td>
                <td className="px-6 py-4">
                  {new Date(data.dtContrato).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{data.qtPrestacoes}</td>
                <td className="px-6 py-4">{data.vlTotal}</td>
                <td className="px-6 py-4">{data.cdProduto}</td>
                <td className="px-6 py-4">{data.dsProduto}</td>
                <td className="px-6 py-4">{data.cdCarteira}</td>
                <td className="px-6 py-4">{data.dsCarteira}</td>
                <td className="px-6 py-4">{data.nrProposta}</td>
                <td className="px-6 py-4">{data.nrPresta}</td>
                <td className="px-6 py-4">{data.tpPresta}</td>
                <td className="px-6 py-4">{data.nrSeqPre}</td>
                <td className="px-6 py-4">
                  {new Date(data.dtVctPre).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{data.vlMora}</td>
                <td className="px-6 py-4">{data.vlMulta}</td>
                <td className="px-6 py-4">{data.vlOutAcr}</td>
                <td className="px-6 py-4">{data.vlIof}</td>
                <td className="px-6 py-4">{data.vlAtual}</td>
                <td className="px-6 py-4">{data.vlDescon}</td>
                <td className="px-6 py-4">{data.vlPresta}</td>
                <td className="px-6 py-4">{data.idSituac}</td>
                <td className="px-6 py-4">{data.idSitVen}</td>
                <td className="px-6 py-4">
                  {data.constVal ? (
                    <CheckIcon height={10} />
                  ) : (
                    <XMarkIcon height={30} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {page}-{totalPages}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {recordsCount}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              onClick={() => page > 1 && setTableData(page - 1)}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight ${
                page > 1
                  ? "text-gray-500 bg-white cursor-pointer"
                  : "bg-gray-100 text-gray-700 cursor-not-allowed"
              } border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700`}
            >
              Previous
            </button>
          </li>

          <li>
            <button
              onClick={() => page < totalPages && setTableData(page + 1)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                page < totalPages
                  ? "text-gray-500 bg-white cursor-pointer"
                  : "bg-gray-100 text-gray-700 cursor-not-allowed"
              } border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Table;
