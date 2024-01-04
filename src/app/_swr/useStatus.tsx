import axios from "axios";
import useSWR from "swr";

export function useStatus() {
  const getMockData = async (url: string) => {
    return {
      status: "start",
      inputStatus: [
        {
          id: 1,
          inputName: "Detergent",
          status: "active",
        },
        {
          id: 2,
          inputName: "Softener",
          status: "inactive",
        },
        {
          id: 3,
          inputName: "Detergent",
          status: "active",
        },
        {
          id: 4,
          inputName: "INPUT 4",
          status: "inactive",
        },
        {
          id: 5,
          inputName: "INPUT 5",
          status: "inactive",
        },
        {
          id: 6,
          inputName: "INPUT 6",
          status: "inactive",
        },
      ],
      pumpStatus: [
        {
          id: 1,
          pumpName: "PUMP 1",
          status: "active",
        },
        {
          id: 2,
          pumpName: "PUMP 2",
          status: "inactive",
        },
        {
          id: 3,
          pumpName: "PUMP 3",
          status: "active",
        },
        {
          id: 4,
          pumpName: "PUMP 4",
          status: "inactive",
        },
        {
          id: 5,
          pumpName: "PUMP 5",
          status: "inactive",
        },
        {
          id: 6,
          pumpName: "PUMP 6",
          status: "inactive",
        },
      ],
      fluidLevel: [
        {
          id: 1,
          pumpName: "PUMP 1",
          status: "FULL",
        },
        {
          id: 2,
          pumpName: "PUMP 2",
          status: "LOW",
        },
        {
          id: 3,
          pumpName: "PUMP 3",
          status: "FULL",
        },
        {
          id: 4,
          pumpName: "PUMP 4",
          status: "FULL",
        },
        {
          id: 5,
          pumpName: "PUMP 5",
          status: "LOW",
        },
        {
          id: 6,
          pumpName: "PUMP 6",
          status: "FULL",
        },
      ],
      washCycle: {
        daily: 6,
        weekly: 36,
        monthly: 144,
      },
    };
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
  return useSWR("/api/v1/status", fetcher, {
    refreshInterval: 1000,
  });
}
