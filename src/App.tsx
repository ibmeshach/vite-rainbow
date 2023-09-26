import { ConnectButton } from "@rainbow-me/rainbowkit";
import Github from "./Components/github";
import Twitter from "./Components/twitter";

function App() {
  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen text-white w-screen p-10">
      <div className="flex justify-center">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}

export default App;
