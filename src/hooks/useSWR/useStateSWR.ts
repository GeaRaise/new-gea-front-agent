import useSWR from "swr";

export const useStateSWR = <T>(key: string, initialData: T): [T, (state: T) => void] => {
  const { data: state, mutate: setState } = useSWR(key, null, {
    fallbackData: initialData,
  });
  return [state as T, setState as (state: T) => void];
};
