import axios from "axios";
import useSWR from "swr";
export type InputType =  {
   inputId:string,
   inputName:string,
   inputMl:number
   status?:string
  }
type InputData =InputType[];
export function useInput() {
  const getMockData = async (url: string) => {
    return [ {
      inputId: "1",
      inputName: "Detergent",
      inputMl: 1,
    },
    {
      inputId: "2",
      inputName: "Softener",
      inputMl: 1,
    },
    {
      inputId: "3",
      inputName: "Detergent",
    
      inputMl: 1,
    },
    {
      inputId: "4",
      inputName: "INPUT 4",
    
      inputMl: 2,
    },
    {
      inputId: "5",
      inputName: "INPUT 5",
    
      inputMl: 1,
    },
    {
      inputId: "6",
      inputName: "INPUT 6",
    
      inputMl: 1,
    },] as InputData;
  };

  const fetcher = async (url: string) => {
    return await axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error)
        console.log('use mock data')
        return getMockData(url);
      });
  };
  return useSWR<InputData>("/api/v1/input", fetcher);
}
