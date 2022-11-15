import { ethers } from "hardhat";
import { Ballot, Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv";

let ballotContract: Ballot;
dotenv.config()

async function main() {
    const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "");
    //const wallet = ethers.Wallet.createRandom() 
    // const provider = ethers.getDefaultProvider("goerli");
    
    // Use custom provider like Infura or Alchemy
    const infuraProvider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_API_KEY);
    const signer = wallet.connect(infuraProvider);

    const ballotFactory = new Ballot__factory(signer);
    //Import existing contract already deployed previously
    ballotContract = ballotFactory.attach(process.env.CONTRACT_ADDRESS ?? "");
    console.log(`Contract address ${ballotContract.address}`)

    // 0x80d0430c7d1ed613ea30c02663cc9ce5bbc389a8 (Marcello Rigotti)
    const voter = await ballotContract.voters("0x80d0430c7d1ed613ea30c02663cc9ce5bbc389a8");    
    console.log({"weight": voter.weight.toNumber(), "voted": voter.voted, "proposalNumber": voter.vote.toNumber(), "delegate": voter.delegate});
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
