// import { ethers } from "ethers";
import getContractData from "./contractdata";
import { InstanceProps, OptionProps, Profile, transactionResult, TransactionResultProp } from "@/interfaces";

import { ethers, Contract, ContractTransaction, ContractReceipt } from "ethers";
import { EIP1193Provider } from "@web3-onboard/core";
import { BigNumber } from "bignumber.js";

// Return provider and signer
function getwrappedProviderAndSigner(provider?: EIP1193Provider) {
  if (!provider) return null;
  const wrappedProvider = new ethers.providers.Web3Provider(provider);
  const signer = wrappedProvider.getSigner();
  return { wrappedProvider, signer };
}

// get contract instances
function contractInstances(props: InstanceProps) {
  const { tokenAbi, vaultAbi, tokenAddr,vaultAddr, provider } = props;
  const vault_ins = new Contract(vaultAddr, vaultAbi, getwrappedProviderAndSigner(provider)?.wrappedProvider);
  const vault_ins_noSigner = new Contract(vaultAddr, vaultAbi);
  const token_ins = new Contract(tokenAddr, tokenAbi, getwrappedProviderAndSigner(provider)?.wrappedProvider);
  const token_ins_noSigner = new Contract(tokenAddr, tokenAbi);

  return { vault_ins, token_ins, vault_ins_noSigner, token_ins_noSigner }
}

async function sendtransaction(options: OptionProps) {
  const { provider, cancelLoading, functionName, value, account } = options;
  const { vaultAbi, tokenAbi, vaultAddr, tokenAddr } = getContractData();
  const { vault_ins, token_ins_noSigner } = contractInstances({
    vaultAbi,
    tokenAbi,
    vaultAddr,
    tokenAddr,
    provider
  })

  let result = transactionResult;
  try {
    switch (functionName) {
      case 'stake':
        // const txn = await vault_ins.stake({value: value });
        const txn = await vault_ins.setToken(tokenAddr);
        await txn?.wait(3).then((rec: ContractReceipt) => {
          result.receipt = rec;
          result.view = false;
          if(cancelLoading) cancelLoading();
        });
        break;

      case 'stakeOnBehalf':
        const txn_1 = await vault_ins.stakeOnBehalf({value: value });
        await txn_1?.wait(3).then((rec: ContractReceipt) => {
          result.receipt = rec;
          result.view = false;
          if(cancelLoading) cancelLoading();
        });
        break;
      
      case 'unstake':
        const txn2 = await vault_ins.unstake();
        await txn2?.wait(3).then((rec: ContractReceipt) => {
          result.receipt = rec;
          result.view = false;
          if(cancelLoading) cancelLoading();
        });
        break;

      case 'withdraw':
        const txn3 = await vault_ins.withdraw();
        await txn3?.wait(3).then((rec: ContractReceipt) => {
          result.receipt = rec;
          result.view = false;
          if(cancelLoading) cancelLoading();
        });
        break;

      case 'getStakeProfile':
        await vault_ins.getStakeProfile().then((res: Profile) => {
          result.read = res;
          result.view = true;
          if(cancelLoading) cancelLoading();
        });
        break;

      case 'balance':
        await token_ins_noSigner.balanceOf(account).then((res: ethers.BigNumber) => {
          console.log("RESULT", res);
          result.read = res;
          result.view = true;
          if(cancelLoading) cancelLoading();
        });
      break;

      default:
        break;
      }
      
    } catch (error: any) {
      console.log(error);
      if(cancelLoading) cancelLoading();
      if(error){
        if(error?.data?.code === -32000) alert("Please fund your wallet with test Celo from https://faucet.celo.org")

      }
    }
  return result;
};

export default sendtransaction;