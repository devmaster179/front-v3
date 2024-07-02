interface ActionButtonProps {
  children: string;
  onShare: (prevState: boolean) => void;
}

export const ActionButton = ({ children }: ActionButtonProps) => {
  return (
    <a
      onClick={() => {}}
      className="bg-blue rounded h-10 w-20 text-center  flex items-center justify-center"
    >
      <div>{children}</div>
    </a>
  );
};
