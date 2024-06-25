interface ActionButtonProps {
  children: string;
  onShare: (prevState: boolean) => void;
}

export const ActionButton = ({ children, onShare }: ActionButtonProps) => {
  return (
    <a
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        window.open(
          "https://t.me/share/url?url=https://lootfront.netlify.app",
          "_blank"
        );
        onShare(true);

        // Simulate a delay to allow the user to share the link
        // setTimeout(() => {
        //   // Navigate to the new page in your app
        //   window.open("/"); // Replace '/newpage' with your desired route
        // }, 2000); // Adjust the delay as needed
      }}
      //   href="https://t.me/share/url?url=https://google.com"
      className="bg-blue rounded h-10 w-20 text-center  flex items-center justify-center"
    >
      <div>{children}</div>
    </a>
  );
};
