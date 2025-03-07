import { ActionButton } from "@/pages/TasksPage/components/ActionButton";
import { ActionItem } from "@/pages/TasksPage/components/ActionItem";
import { supabase } from "@/supabase";
import { initInitData, initUtils } from "@telegram-apps/sdk";
import { useNavigate } from "react-router-dom";

export const TasksList = () => {
  const initData = initInitData();
  const utils = initUtils();
  const navigate = useNavigate();

  const _onShare = async () => {
    try {
      const { data } = await supabase
        .from("lootboxes")
        .select("uuid")
        .is("sender_id", null); // get not used lootboxes only

      if (!data?.length) return;

      const lootbox = data[Math.floor(Math.random() * data.length)];

      await supabase
        .from("lootboxes")
        .update({
          sender_id: initData?.user?.id,
          parent: initData?.startParam,
        }) // пишем себя сендером = берем лутбокс
        .eq("uuid", lootbox.uuid);

      utils.shareURL(
        `${import.meta.env.VITE_APP_BOT_URL}?startapp=${lootbox.uuid}`,
        "Look! Some cool app here!"
      );

      // onShare(true);

      navigate("/history");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="-mt-20 pb-5 text-center text-white font-bold text-lg">
        Choose from one of the tasks below:
      </h1>
      <div>
        <ActionItem
          text="1. Share a lootbox with a friend/s"
          actionButton={<ActionButton onShare={_onShare}>Send</ActionButton>}
        />
        <ActionItem
          text="2. Upload a video with you and your friends"
          actionButton={
            <ActionButton disabled onShare={() => {}}>
              Upload
            </ActionButton>
          }
        />
        <ActionItem
          text="3. Join our group"
          actionButton={
            <ActionButton disabled onShare={() => {}}>
              Join
            </ActionButton>
          }
        />
      </div>
    </>
  );
};
