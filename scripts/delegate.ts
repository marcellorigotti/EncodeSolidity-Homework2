import { ethers } from "hardhat";
import { Ballot, Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv";
import { cp } from "fs";

let ballotContract: Ballot;
let proposals: string[] = [];
dotenv.config()

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "");

    const args = process.argv.slice(2);
    if (args.length != 1 || !ethers.utils.isAddress(args[0])) throw new Error("A single valid ethereum address must be provided as an argument");

    // Use default provider
    const provider  = new ethers.providers.EtherscanProvider("goerli", process.env.ETHERSCAN_API_KEY);
    const signer = wallet.connect(provider);

    const ballotFactory = new Ballot__factory(signer);
    // Attach to previously deployed contract
    ballotContract = ballotFactory.attach(process.env.CONTRACT_ADDRESS ?? "");
    console.log(`Contract address ${ballotContract.address}`)

    // casting a vot to proposal number 4 (index 3) = Chocolate
    const tx = await ballotContract.delegate(args[0]);
    const receipt = await tx.wait();
    console.log(receipt);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
