import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Ballot } from "../typechain-types";

const PROPOSALS = ["Vanilla", "Lime", "Chocolate"];

//We can use this function instead of mapping formatBytes32String
function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let index = 0; index < array.length; index++) {
        bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
    }
    return bytes32Array;
}

describe("Ballot", async () => {
    let ballotContract: Ballot;
    let accounts: SignerWithAddress[];

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        const ballotFactory = await ethers.getContractFactory("Ballot");
        ballotContract = await ballotFactory.deploy(PROPOSALS.map((prop) => ethers.utils.formatBytes32String(prop)));
        await ballotContract.deployed();
    })
    describe("When the contract is deployed", async () => {
        it("has the provided proposals", async () => {
            //I cannot get back a whole array, I need to get back
            //each element one by one, let's do a loop!
            // const proposal = await ballotContract.proposals(0);
            // remember to convert back byte32 to string
            // expect(ethers.utils.parseBytes32String(proposal.name)).to.eq(PROPOSALS[0]);
            for(let index = 0; index < PROPOSALS.length; index++){
                const proposal = await ballotContract.proposals(index);
                expect(ethers.utils.parseBytes32String(proposal.name)).to.eq(PROPOSALS[index]);
            }
        })

        it("sets the deployer address as chairperson", async () => {
            const chairperson = await ballotContract.chairperson();
            expect(chairperson).to.eq(accounts[0].address)
        });

        it("Set the voting weight of the chairperson as 1", async () => {
            const chairpersonVoter = await ballotContract.voters(accounts[0].address);
            expect(chairpersonVoter.weight).to.eq(1);
        })
    })
});