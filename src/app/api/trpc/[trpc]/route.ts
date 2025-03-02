import {appRouter} from "@/trpc";
import {fetchRequestHandler} from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // headers: {"Content-Type": "application/json"},
    // @ts-expect-error context alredy passed from express middleware
    createContext: () => ({}),
  });
};

export {handler as GET, handler as POST};
