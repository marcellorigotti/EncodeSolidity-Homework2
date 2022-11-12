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

    //Maybe there is a way to check the array length at runtime??? TODO
    for(let i=0; i<5; i++){
        proposals.push(ethers.utils.toUtf8String((await ballotContract.proposals(i)).name));
    }
    console.log(proposals.toString())

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});