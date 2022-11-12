import { ethers } from "hardhat";
import { Ballot, Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv";

// const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];
let ballotContract: Ballot;
dotenv.config()

//My public address: 0x80D0430C7d1Ed613ea30c02663cC9ce5bBC389A8
async function main() {
    const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "");
    // const provider = ethers.getDefaultProvider("goerli");
    
    // Use custom provider like Infura or Alchemy
    const infuraProvider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_API_KEY);
    const signer = wallet.connect(infuraProvider);
    
    const proposal = process.argv.slice(2);

    const balance = await signer.getBalance();
    console.log(`Connected to the account of address: ${signer.address}`);
    console.log(`Balance of ${balance.toString()} Wei`);

    const ballotFactory = new Ballot__factory(signer);
    ballotContract = await ballotFactory.deploy(proposal.map((prop) => ethers.utils.formatBytes32String(prop)));
    await ballotContract.deployed();
    console.log(`The ballot contract was deployed at the address ${ballotContract.address}`);

    // AVOID REDEPLOYING THE CONTRACT, USE AN EXISTING ONE
    // PASS IT AS PARAMETER OR ENV VARIABLE
    // TODO
    // let contractAddress = process.argv[2];
    // let importedContract = ballotFactory.attach(contractAddress);



    // //first two arguments are default and we are not interested in them
    // const proposal = process.argv.slice(2);
    // console.log("Deploying Ballot contract");
    // console.log("Proposals: ");
    // console.log(proposal);
    // if (proposal.length <= 0) throw new Error(`No proposal passed!`);
    // proposal.forEach((element, index) => {
    //     console.log(`Proposal N. ${index + 1}: ${element}`);
    // });

    // // TODO
    // accounts = await ethers.getSigners();
    // //Another way to create the ballotFactory without hardhat ethers!
    // const ballotFactory = new Ballot__factory(accounts[0]);
    // // const ballotFactory = await ethers.getContractFactory("Ballot");
    // ballotContract = await ballotFactory.deploy(proposal.map((prop) => ethers.utils.formatBytes32String(prop)));
    // await ballotContract.deployed();
    // console.log(`The ballot contract was deployed at the address ${ballotContract.address}`);
    // console.log(`The owner of the contract is ${accounts[0].address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});