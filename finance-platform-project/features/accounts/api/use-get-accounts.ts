import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export const useGetAccounts = () => {
  const query = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const response = await client.api.accounts.$get();
      //fetch("local.../api/accounts") in rpc its gonna be like the line above but like it prevents typo and some stuffs read more about hono rpc
      if (!response.ok) {
        throw new Error("failed to fetch accounts");
      }

      const data = await response.json();
      return data;
    },
  });

  return query;
};
