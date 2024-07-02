// @ts-nocheck

import { Link } from "@/components/Link/Link";
import { initInitData } from "@tma.js/sdk";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

export function HomePage() {
  const initData = initInitData();

  const [lootboxesCount, setLootboxesCount] = useState(0);
  const [USDT, setUSDT] = useState(0);
  const [LOOT, setLOOT] = useState(0);

  // TODO avoid unnecceary calls if receiver_id is not NULL already

  useEffect(() => {
    const run = async () => {
      // get startParam lootbox - parent and sender

      const [lootbox, usersLootboxes] = await Promise.all([
        supabase.from("lootboxes").select().eq("id", initData.startParam),
        supabase
          .from("lootboxes")
          .select("balance")
          .eq("receiver_id", initData.user.id),
      ]);

      setLootboxesCount(usersLootboxes.length());

      setUSDT(
        usersLootboxes
          .map((i) => i.balance)
          .filter((i) => i < 11)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      );

      setLOOT(
        usersLootboxes
          .map((i) => i.balance)
          .filter((i) => i > 40)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      );

      const { data } = lootbox;

      const { sender_id, parent } = data[0];

      await supabase
        .from("lootboxes")
        .update({ receiver_id: sender_id }) // sender of current lootbox
        .eq("id", parent); // условие - parent lootbox
    };

    run();
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <img src="./lootbox-closed.gif" alt="loading..." />
      <span className="text-center mt-50 p-5 pt-50 ">
        {`You've already opened ${lootboxesCount} lootboxes and your balance is ${USDT} USDT and ${LOOT} LOOT. 
        To open this box, you need to fulfill a task`}
      </span>

      <Link to="/tasks" className="bg-blue rounded p-2 px-10 text-white">
        Go!
      </Link>
    </main>
  );
}
