import { ethers } from "hardhat";
import { Ballot, Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv";

let ballotContract: Ballot;
let proposals: string[] = [];
dotenv.config()

async function main() {
    const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "");
    // const provider = ethers.getDefaultProvider("goerli");
    
    // Use custom provider like Infura or Alchemy
    const infuraProvider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_API_KEY);
    const signer = wallet.connect(infuraProvider);

    const ballotFactory = new Ballot__factory(signer);
    //Import existing contract already deployed previously
    ballotContract = ballotFactory.attach(process.env.CONTRACT_ADDRESS ?? "");
    console.log(`Contract address ${ballotContract.address}`)

    //Alessandro Morandi
    await ballotContract.giveRightToVote("0xb91bc2a105c03667930b5ebe639e7914c5763bdb");
    //José Henrique K. Ambiel
    await ballotContract.giveRightToVote("0x6dE6EAfDD0120279957fB3019b0eec1828D73cDa");
    //Sobhan BAhrami 
    await ballotContract.giveRightToVote("0x4d7c99e0d0672abc0e9bbd4f5f82a87f2b6956da");
    //Jeremy
    await ballotContract.giveRightToVote("0xc87a65ce2f3bb07c7a59ac0643a56e34a9d531a7");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});