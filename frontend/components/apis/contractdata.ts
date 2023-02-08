import vault from "../../../foundry/out/Vault.sol/Vault.json";
import token from "../../../foundry/out/RewardToken.sol/RewardToken.json";

export default function getContractData() {
  return {
    vaultAbi: vault.abi,
    tokenAbi: token.abi,
    vaultAddr: "0xcF56bD9292a72150271F1B4F9AaCA132e24CC4EE",
    tokenAddr: "0x27598d011a304494653269D94cbAFD3ce0a08A36"
  }
}
