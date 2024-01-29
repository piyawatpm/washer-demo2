import axios from "axios";
import useSWR from "swr";
export type FlushType = {
  isPreFlushOn:"T" |"F"
  isPostFlushOn:"T" |"F"
  preFlushTriggerTime:number
  postFlushTriggerTime:number
}
export type TriggerType={
  isOn:"T" |"F"
  firstTriggerTime:number
  secondTriggerTime:number
}
export type SolenoidData = {
 flush:FlushType
 trigger:TriggerType
};
export function useSolenoid() {
  const getMockData = async (url: string) => {
    return {
        flush: {
          isPreFlushOn: "F",
          isPostFlushOn:"F",
          preFlushTriggerTime: 10,
          postFlushTriggerTime: 20
        },
        trigger: {
            isOn: "T",
            firstTriggerTime: 30,
            secondTriggerTime: 40
        }
    }as SolenoidData;
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

  console.log("call solenoid get api");
  return useSWR<SolenoidData>("/api/v1/solenoid", fetcher,{revalidateOnFocus:false});
}
