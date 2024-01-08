import axios from "axios";
import useSWR from "swr";
type StatusData = {
  status: string;
  inputStatus: {
    id: string;
    inputName: string;
    status: string;
    inputMlPerKg: number;
  }[];
  pumpStatus: {
    id: string;
    pumpName: string;
    status: string;
  }[];
  fluidLevel: {
    id: string;
    pumpName: string;
    status: string;
  }[];
  washCycle: {
    daily: number;
    weekly: number;
    monthly: number;
  };
};
export function useStatus(isRevalidate: boolean) {
  const getMockData = async (url: string) => {
    return {
      status: "start",
      inputStatus: [
        {
          id: "1",
          inputName: "Detergent",
          status: "active",
          inputMlPerKg: 1,
        },
        {
          id: "2",
          inputName: "Softener",
          status: "inactive",
          inputMlPerKg: 1,
        },
        {
          id: "3",
          inputName: "Detergent",
          status: "active",
          inputMlPerKg: 1,
        },
        {
          id: "4",
          inputName: "INPUT 4",
          status: "inactive",
          inputMlPerKg: 1,
        },
        {
          id: "5",
          inputName: "INPUT 5",
          status: "inactive",
          inputMlPerKg: 1,
        },
        {
          id: "6",
          inputName: "INPUT 6",
          status: "inactive",
          inputMlPerKg: 1,
        },
      ],
      pumpStatus: [
        {
          id: "1",
          pumpName: "PUMP 1",
          status: "active",
        },
        {
          id: "2",
          pumpName: "PUMP 2",
          status: "inactive",
        },
        {
          id: "3",
          pumpName: "PUMP 3",
          status: "active",
        },
        {
          id: "4",
          pumpName: "PUMP 4",
          status: "inactive",
        },
        {
          id: "5",
          pumpName: "PUMP 5",
          status: "inactive",
        },
        {
          id: "6",
          pumpName: "PUMP 6",
          status: "inactive",
        },
      ],
      fluidLevel: [
        {
          id: "1",
          pumpName: "PUMP 1",
          status: "FULL",
        },
        {
          id: "2",
          pumpName: "PUMP 2",
          status: "LOW",
        },
        {
          id: "3",
          pumpName: "PUMP 3",
          status: "FULL",
        },
        {
          id: "4",
          pumpName: "PUMP 4",
          status: "FULL",
        },
        {
          id: "5",
          pumpName: "PUMP 5",
          status: "LOW",
        },
        {
          id: "6",
          pumpName: "PUMP 6",
          status: "FULL",
        },
      ],
      washCycle: {
        daily: 6,
        weekly: 36,
        monthly: 144,
      },
    } as StatusData;
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
  return useSWR<StatusData>("/api/v1/status", fetcher, {
    refreshInterval: isRevalidate ? 1000 : 0,
  });
}
