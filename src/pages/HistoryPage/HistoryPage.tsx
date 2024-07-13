import { Link } from "@/components/Link/Link";
import { TonConnectButton } from "@tonconnect/ui-react";
import USDT from "@/assets/usdt.svg?react";
import LOOT from "@/assets/loot.svg?react";

export const HistoryPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#1D2733]">
      {/* Header */}
      <div className="flex w-full px-2 mt-5 items-center justify-between gap-2">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <USDT />
            <p className="text-sm">USDT 50</p>
          </div>
          <div className="flex gap-2 items-center">
            <LOOT />
            <p className="text-sm">LOOT 10103</p>
          </div>
        </div>
        <TonConnectButton />
      </div>

      <Link
        to="/tasks"
        className="bg-blue py-2 px-6 text-white rounded-full my-12"
      >
        Send another link
      </Link>

      {/* Transaction history */}
      <div className="w-full px-2">
        <p>Transaction history</p>

        <div className="bg-black rounded-md mt-2 px-2 flex items-center gap-2">
          <img src="./box.png" height={75} width={75} />
          <p>10:00 15JUL2023</p>
          <p>@maxim_kraevoy</p>
          <p>Unopened</p>
        </div>
      </div>
    </main>
  );
};
