// @ts-nocheck

// import { ClaimReward } from "@/pages/TasksPage/components/ClaimReward";
import { TasksList } from "@/pages/TasksPage/components/TaskList";

export default function TasksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {
        // hasShared ? <ClaimReward /> :
        <TasksList onShare={() => {}} />
      }
    </main>
  );
}
