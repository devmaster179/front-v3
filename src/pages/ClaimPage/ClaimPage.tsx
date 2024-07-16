import { useState, useEffect } from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Lootbox } from "@/components/Lootbox";

export const ClaimPage = () => {
  const [showText, setShowText] = useState(false);
  const [showConnectButton, setShowConnectButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 5000);

    setTimeout(() => {
      setShowConnectButton(true);
    }, 7000);
  });

  return (
    <TonConnectUIProvider manifestUrl="https://lootfront.netlify.app/tonconnect-manifest.json">
      <div className="mt-10 flex flex-col items-center justify-center justify-items-center" style={{ paddingTop: '32%' }}>
        <div style={{
          width: '200%',
          height: '200%',
          backgroundColor: '#000',
          position: 'fixed',
          top: '0',
          zIndex: '0'
        }}></div>
        <Lootbox width={280} height={280} />

        <div className="text-white text-center items-center justify-center  text-2xl transition ease-in-out delay-150 mb-5 slowshow" style={{ zIndex: '100' }}>
          <span>
            <h1 style={{ fontWeight: 'bolder' }}>CONGRATULATIONS<br /> YOU HAVE UNLOCKED <br />5 USDT!</h1>
          </span>
        </div>
        <TonConnectButton style={{ zIndex: '100' }} className="slowshow" />
      </div>
    </TonConnectUIProvider>
  );
};
