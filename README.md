# Generic Staking DApp on Celo

- Backend
  - Stacks
    - Foundry
    - Solidity

For full understanding of the backend, follow **[this tutorial]()**

- Frontend
  - Stacks
    - React
    - NextJs
    - MaterialUi
    - etherJs
    - We3Js

**How to run**
> Note : Be sure to have metamask browser extension installed in  your browser.

```bash
git clone https://github.com/bobeu/stakingdapp-on-celo.git/
```

```bash
cd stakingdapp-on-celo/frontend
```

```bash
yarn install
```

```bash
yarn run dev
```

- Demo
**[Click to interact with Dapp](https://stakingdapp2.vercel.app/)**

**[Watch this video to know how to do that](https://youtu.be/8H-tctoES3Q)**

# Compile contracts
```bash
forge build
```

# Test contracts
```bash
forge test
```

# Deployment information
- Vault.sol

Command
```bash 
forge create --rpc-url https://alfajores-forno.celo-testnet.org --constructor-args 10000000000000000000 --private-key <paste your private key here> src/Vault.sol:Vault
```
Output
```bash
[⠢] Compiling 2 files with 0.8.17
[⠰] Solc 0.8.17 finished in 3.04s
Compiler run successful
Vault Deployed to: 0xcF56bD9292a72150271F1B4F9AaCA132e24CC4EE
Transaction hash: 0x97264f5b6c94d738e798aa440b98de1ccaccb47b31954e56e16078766723bac7     
```

- RewardToken.sol

Command
```bash 
forge create --rpc-url https://alfajores-forno.celo-testnet.org --constructor-args 500000000--private-key <paste your private key here> src/RewardToken.sol:RewardToken
```
Output
```bash
[⠔] Compiling 1 files with 0.8.17
[⠃] Solc 0.8.17 finished in 4.67s
Compiler run successful
Deployer: 0x85AbBd0605F9C725a1af6CA4Fb1fD4dC14dBD669
Token Deployed to: 0x27598d011a304494653269D94cbAFD3ce0a08A36
Transaction hash: 0x5e430c21123e8e785765b8c7e501506d835e489de320d1c662b3cc6ea287e474
```










    
<!-- "web3modal": "^1.9.12"
// import React from 'react';
// // import Web3Modal from "web3modal";
// import { 
//   // configureChains, 
//   // createClient, 
//   connect, 
//   Address,
//   Chain,
//   ConnectResult,
//   Connector,
//   ConnectorData,
//   ConnectArgs,
//   disconnect,
//   FetchBalanceResult,
//   FetchTokenResult,
//   GetContractArgs,
//   GetContractResult,
//   getAccount,
//   PrepareSendTransactionArgs,
//   PrepareSendTransactionResult,
//   readContract,
//   writeContract,
//   WriteContractResult,
// } from '@wagmi/core';

// import { Web3Modal } from "@web3modal/html";
import { celoAlfajores } from '@wagmi/core/chains';
// import { configureChains, createClient } from "@wagmi/core";
// // import { alchemyProvider } from '@wagmi/core/providers/alchemy'
// import { publicProvider } from '@wagmi/core/providers/public';
// import { InjectedConnector } from '@wagmi/core/connectors/injected';
// import {
//   EthereumClient,
//   modalConnectors,
//   walletConnectProvider,
// } from "@web3modal/ethereum";

// // import { Web3Modal } from "@web3modal/react";

// // import { configureChains, createClient, WagmiConfig } from "wagmi";

// import { arbitrum, mainnet, polygon } from "wagmi/chains";

// const providerOptions = {
//   /* See Provider Options Section */
// };

// // const web3Modal = new Web3Modal({
// //   network: "testnet", // optional
// //   cacheProvider: true, // optional
// //   providerOptions // required
// // });

// // const { chains, provider } = configureChains(
// //  [celoAlfajores],
// //  [publicProvider()],
// // )
// // // alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), 
// // const wagmiClient = createClient({
// //  autoConnect: true,
// //  connectors: [new InjectedConnector({ chains })],
// //  provider,
// // })


// const chains = [celoAlfajores];
// const PROJECT_ID = process.env.NEXT_PROJECT_ID;

// // Wagmi client
// const { provider } = configureChains(chains, [
//   walletConnectProvider({ projectId: String(PROJECT_ID) }),
// ]);
// // export const wagmiClient = createClient({
// //   autoConnect: true,
// //   connectors: modalConnectors({
// //     projectId: "<YOUR_PROJECT_ID>",
// //     version: "1",
// //     appName: "web3Modal",
// //     chains,
// //   }),
// //   provider,
// // });

// // // Web3Modal Ethereum Client
// // export const ethereumClient = new EthereumClient(wagmiClient, chains);

// const wagmiClient = createClient({
//   autoConnect: true,
  
//   connectors: modalConnectors({
//     projectId: PROJECT_ID,
//     version: "1",
//     appName: "web3Modal",
//     chains,
//   }),
//   provider,
// });

// const ethereumClient = new EthereumClient(wagmiClient, chains);

// export const web3modal = new Web3Modal(
//   { projectId: String(PROJECT_ID) },
//   ethereumClient
// );

///////////////////////////////////////////////////
// import {
//   EthereumClient,
//   modalConnectors,
//   walletConnectProvider,
// } from "@web3modal/ethereum";

// import { Web3Modal } from "@web3modal/react";

// import { configureChains, createClient, WagmiConfig } from "wagmi";

// import { celoAlfajores } from "wagmi/chains";


////////////////////////////////////////////////////////

// import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'

// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'

// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// // Configure chains & providers with the Alchemy provider.
// // Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
// const { chains, provider, webSocketProvider } = configureChains(
//  [mainnet],
//  [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
// )

// // Set up client
// export const client = createClient({
//  autoConnect: true,
//  connectors: [
//  new MetaMaskConnector({ chains }),
//  new CoinbaseWalletConnector({
//  chains,
//  options: {
//  appName: 'wagmi',
//  },
//  }),
//  new WalletConnectConnector({
//  chains,
//  options: {
//  qrcode: true,
//  },
//  }),
//  new InjectedConnector({
//  chains,
//  options: {
//  name: 'Injected',
//  shimDisconnect: true,
//  },
//  }),
//  ],
//  provider,
//  webSocketProvider,
// })



// import SignClient from '@walletconnect/sign-client'
// import { Web3Modal } from '@web3modal/standalone'
// import { useEffect, useState } from 'react'

// // 1. Get projectID at https://cloud.walletconnect.com
// if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
//   throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
// }

// // 2. Configure web3Modal
// const web3Modal = new Web3Modal({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID })

// export default function HomePage() {
//   const [signClient, setSignClient] = useState<SignClient | undefined>(undefined)

//   // 3. Initialize sign client
//   async function onInitializeSignClient() {
//     const client = await SignClient.init({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID })
//     setSignClient(client)
//   }

//   // 4. Initiate connection and pass pairing uri to the modal
//   async function onOpenModal() {
//     if (signClient) {
//       const namespaces = {
//         eip155: { methods: ['eth_sign'], chains: ['eip155:1'], events: ['accountsChanged'] }
//       }
//       const { uri, approval } = await signClient.connect({ requiredNamespaces: namespaces })
//       if (uri) {
//         await web3Modal.openModal({ uri, standaloneChains: namespaces.eip155.chains })
//         await approval()
//         web3Modal.closeModal()
//       }
//     }
//   }

//   useEffect(() => {
//     onInitializeSignClient()
//   }, [])

//   return signClient ? <button onClick={onOpenModal}>Connect Wallet</button> : 'Initializing...'
// } -->
