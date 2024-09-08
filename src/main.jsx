import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sepoliaTestnet = {
  // Required information for connecting to the network
  chainId: 11155111, // Chain ID for Sepolia testnet
  rpc: [
    "https://eth-sepolia.g.alchemy.com/v2/RiRxRVApd4NbLejKfiIoMg8mJh2qQNMC",
  ], // Array of RPC URLs

  // Information about the chain's native currency
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia ETH",
    symbol: "ETH",
  },

  // Information for adding the network to your wallet
  shortName: "sepolia", // Display value shown in the wallet UI
  slug: "sepolia", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "Ethereum", // Name of the network
  name: "Ethereum Sepolia Testnet", // Full name of the network
};

root.render(
  <ThirdwebProvider
    activeChain={sepoliaTestnet}
    clientId="9f65550b710ea26978682c6f0615a6ca"
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
