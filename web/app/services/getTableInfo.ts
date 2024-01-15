import axios from "axios";
import { RecordsResponse } from "@app/interfaces/records";

export async function getTableInfo(
  take: number,
  page: number
): Promise<RecordsResponse> {
  const fetchData = await axios.get(`${process.env.API_URL}/records`, {
    params: {
      take,
      page,
    },
  });

  const response: RecordsResponse = fetchData.data;

  return response;
}
