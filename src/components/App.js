import Web3 from "web3";
import Onboard from "bnc-onboard";

let web3;

const onboard = Onboard({
  dappId: "bb283005-63fe-494a-84af-7f7ad15bcfde",
  networkId: 4,
  subscriptions: {
    wallet: (wallet) => {
      web3 = new Web3(wallet.provider);
    },
  },
});

async function login() {
  await onboard.walletSelect();
}

function App() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      window.ethereum.enable().then(function () {});
    } catch (e) {}
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    alert("You have to install MetaMask !");
  }

  return (
    <div className="App">
      <button onClick={login}>Login</button>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
