// @ts-nocheck

// import { ClaimReward } from "@/pages/TasksPage/components/ClaimReward";
import { TasksList } from "@/pages/TasksPage/components/TaskList";
import { initInitData, initUtils } from "@tma.js/sdk";

import { supabase } from "../../supabase";

export default function TasksPage() {
  const initData = initInitData();
  const utils = initUtils();

  const onShare = async () => {
    const { data } = await supabase
      .from("lootboxes")
      .select()
      .is("sender_id", null); // get not used lootboxes only

    console.log(data);

    if (!data) return;

    const lootbox = data[Math.floor(Math.random() * data.length)];

    console.log(lootbox);

    console.log(initData);

    await supabase
      .from("lootboxes")
      .update({ sender_id: initData.user.id }) // пишем себя сендером = берем лутбокс
      .eq("id", lootbox.id);

    // TODO stopped here
    // utils.shareURL(
    //   import.meta.env.VITE_APP_SUPABASE_URL,
    //   "Look! Some cool app here!"
    // );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {
        // hasShared ? <ClaimReward /> :
        <TasksList onShare={onShare} />
      }
    </main>
  );
}
