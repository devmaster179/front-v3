// @ts-nocheck

import { Link } from "@/components/Link/Link";
import { initInitData } from "@tma.js/sdk";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

export function HomePage() {
  const initData = initInitData();

  const [dt, setDt] = useState([]);

  // TODO avoid unnecceary calls if receiver_id is not NULL already

  useEffect(() => {
    const run = async () => {
      // get startParam lootbox - parent and sender

      const { data } = await supabase
        .from("lootboxes")
        .select()
        .eq("id", initData.startParam);

      const { sender_id, parent } = data[0];

      setDt(data);

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
      <span className="text-center -mt-10 pb-5 ">
        To open this box, you need to fulfill a task
      </span>

      <Link to="/tasks" className="bg-blue rounded p-2 px-10 text-white">
        Go!
      </Link>

      <span>1</span>
      <span>{dt}</span>
      <span>2</span>
    </main>
  );
}
