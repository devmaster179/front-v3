import { Link } from "@/components/Link/Link";
import { TonConnectButton } from "@tonconnect/ui-react";

export const HistoryPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <div className="flex mt-5 items-center justify-between gap-4">
        <div className="flex gap-2">
          <div>USDT 50</div>
          <div>LOOT 10103</div>
        </div>
        <TonConnectButton />
      </div>

      <Link
        to="/tasks"
        className="bg-blue py-2 px-6 text-white rounded-full mt-12"
      >
        Send another link
      </Link>

      {/* Transaction history */}
      <div></div>
    </main>
  );
};
