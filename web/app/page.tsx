"use client";

import TableSection from "./components/TableSection";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-[#f5f5f5] h-screen px-10 py-5">
        <TableSection />
      </main>
    </QueryClientProvider>
  );
}
