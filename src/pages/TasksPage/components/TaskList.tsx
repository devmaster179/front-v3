import { ActionButton } from "@/pages/TasksPage/components/ActionButton";
import { ActionItem } from "@/pages/TasksPage/components/ActionItem";

interface TasksListProps {
  onShare: () => void;
}

export const TasksList = ({ onShare }: TasksListProps) => {
  return (
    <>
      <h1 className="-mt-20 pb-5 text-center font-bold text-lg">
        Choose from one of the tasks below:
      </h1>
      <div>
        <ActionItem
          text="1. Share a lootbox with a friend/s"
          actionButton={<ActionButton onShare={onShare}>Send</ActionButton>}
        />
        <ActionItem
          text="2. Upload a video with you and your friends"
          actionButton={<ActionButton onShare={onShare}>Upload</ActionButton>}
        />
        <ActionItem
          text="3. Join our group"
          actionButton={<ActionButton onShare={onShare}>Join</ActionButton>}
        />
      </div>
    </>
  );
};
