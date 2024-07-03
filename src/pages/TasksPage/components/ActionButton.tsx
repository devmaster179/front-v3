interface ActionButtonProps {
  children: string;
  onShare: () => void;
}

export const ActionButton = ({ children, onShare }: ActionButtonProps) => {
  return (
    <a
      onClick={onShare}
      className="bg-blue rounded h-10 w-20 text-center  flex items-center justify-center"
    >
      <div>{children}</div>
    </a>
  );
};
