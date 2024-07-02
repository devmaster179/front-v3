import { Link } from "@/components/Link/Link";
import { initInitData } from "@tma.js/sdk";

export function HomePage() {
  const initData = initInitData();
  console.log(initData?.startParam);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <img src="./lootbox-closed.gif" alt="loading..." />
      <span className="text-center -mt-10 pb-5 ">
        To open this box, you need to fulfill a task
      </span>

      <Link to="/tasks" className="bg-blue rounded p-2 px-10 text-white">
        Go!
      </Link>

      <span>Hello</span>

      <span>{initData?.startParam}</span>
    </main>
  );
}
