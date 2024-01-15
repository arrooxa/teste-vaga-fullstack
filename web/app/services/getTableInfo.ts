import axios from "axios";
import { RecordsResponse } from "@app/interfaces/records";

export async function getTableInfo(
  take: number,
  page: number
): Promise<RecordsResponse> {
  const fetchData = await axios.get(`http://localhost:3001/records`, {
    params: {
      take,
      page,
    },
  });

  const response: RecordsResponse = fetchData.data;

  return response;
}
