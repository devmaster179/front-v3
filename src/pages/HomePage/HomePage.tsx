import { Link } from "@/components/Link/Link";
import { useUserBalance } from "@/hooks/useUserBalance";
import { initInitData } from "@telegram-apps/sdk";

export function HomePage() {
  const initData = initInitData();

  const { lootboxesCount, USDT, LOOT } = useUserBalance({ initData });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <img src="./lootbox-closed.gif" alt="loading..." />
      <span className="text-center mt-50 p-5 pt-50 text-white">
        {`You've already opened ${lootboxesCount} lootboxes and your balance is ${USDT} USDT and ${LOOT} LOOT. 
        To open this box, you need to fulfill a task`}
      </span>

      <Link to="/tasks" className="bg-blue rounded p-2 px-10 text-white">
        Go!
      </Link>
    </main>
  );
}
