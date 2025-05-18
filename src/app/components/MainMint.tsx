
import { useEffect } from "react";

export default function MainMint() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.ownerId = "7DZRJgvt16kAwfKTVwMAkbaV9CZouBvxyANrRUMehDKi";
      window.collectionId = "J99CizsQopb9oDKEku58WNv1XomjD1PLSGbr6hrze4nN";

      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://storage.googleapis.com/scriptslmt/0.1.3/solana.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-3xl border-[6px] border-akatsukiRed rounded-[10px] p-6 text-white bg-black bg-opacity-40 backdrop-blur flex flex-col items-center gap-6 mt-10">
      <h3 className="text-title mb-4 text-center">Mint Your Akatsuki NFT</h3>
      <div id="mint-button-container" />
      <div id="mint-counter" />
    </div>
  );
}
