import axios from "axios";
import useSWR from "swr";
type PumpData = {
  pumpId: string;
  inputId: string;
  inputName: string;
  pumpNumber: number;
  isFlush: boolean;
}[];

export function usePump() {
  const getMockData = async (url: string) => {
    return [
      {
        pumpId: "1",
        inputId: "1",
        inputName: "Detergent",
        pumpNumber: 1,
        isFlush: true,
      },
      {
        pumpId: "2",
        inputId: "2",
        inputName: "Softener",
        pumpNumber: 2,
        isFlush: true,
      },
      {
        pumpId: "3",
        inputId: "3",
        inputName: "Detergent",
        pumpNumber: 3,
        isFlush: false,
      },
      {
        pumpId: "4",
        inputId: "4",
        inputName: "INPUT 4",
        pumpNumber: 4,
        isFlush: true,
      },
      {
        pumpId: "5",
        inputId: "5",
        inputName: "INPUT 5",
        pumpNumber: 5,
        isFlush: false,
      },
      {
        pumpId: "6",
        inputId: "6",
        inputName: "INPUT 6",
        pumpNumber: 6,
        isFlush: true,
      },
    ] as PumpData;
  };

  const fetcher = async (url: string) => {
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
        return getMockData(url);
      });
  };

  console.log("call");
  return useSWR<PumpData>("/api/v1/pump", fetcher, {
    refreshInterval: 1000,
  });
}
