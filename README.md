# Sample Hardhat Project

This project demostrates how to deploy and interact with a contract through the usage of scripts
written in Typescript and the use of a provider like Infura, that allows us to have an "access point"
to the blockchain.

| USER                    | ADDRESS                                       |
|-------------------------|-----------------------------------------------|
| Alessandro Morandi      | 0xb91bc2a105c03667930b5ebe639e7914c5763bdb    |
| José Henrique K. Ambiel | 0x6dE6EAfDD0120279957fB3019b0eec1828D73cDa    |
| Marcello Rigotti        | 0x80d0430c7d1ed613ea30c02663cc9ce5bbc389a8    |
| Sobhan Bahrami          | 0x4d7c99e0d0672abc0e9bbd4f5f82a87f2b6956da    |
| Jeremy Bernard          | 0xc87a65ce2f3bb07c7a59ac0643a56e34a9d531a7    |

We first deploy the Ballot.sol contract running the deployment.ts script

Deploying tx: https://goerli.etherscan.io/tx/0x0dac8b87b3c13fcb88733461f5a310a2aeb8522feae6167075e10bb45d8818ab
BALLOT address: 0x0b75BC4a69C2d9b2e050ea8aD51112815e8412B0

Give right to vote to the team members:
https://goerli.etherscan.io/tx/0x828ecbd0f51931bf6e00aef9875ea81906d4f0f59dd3bd1ab45b377ec78e9755
https://goerli.etherscan.io/tx/0x07a8bd63d7ccdf6f16d5b0f1ab5c9d988fa1002f0431545b13ad10e55cba8a45
https://goerli.etherscan.io/tx/0x9d39fb464c2ed8b7a73700fe65a97b52cc27f25e22fab4891093d8cfa48dfce2
https://goerli.etherscan.io/tx/0xae292baf87bdcbc74460384159bd2d98b611b88bcf22d185c4afd0f6bb8f9deb

Voting for Chocolate (Marcello Rigotti):
https://goerli.etherscan.io/tx/0xb6b9e6501a4e76170ac3e4ec028a8983d470be79294c0ed314bad0ec0dbfddf2

Voting for Mango (Alessandro Morandi):
https://goerli.etherscan.io/tx/0xa9baae2fcbe8240a6e4b1c060a86846e06667381938b9e9a075b9b183451a58e

Delegate vote to José Henrique K. Ambiel (Jeremy Bernard):
https://goerli.etherscan.io/tx/0xeb49ac16bdd615450d27ff1761f6d47d2f68ec190fda9e246a3f91359cf2a06b

Delegate vote back to Jeremy Bernard (José Henrique K. Ambiel):
Failed because "Found loop in delegation."
https://goerli.etherscan.io/tx/0x2285bbe6e23b85c3d3406500b35143f070b5eb617cc738c7a971edaef943564f

Delegate vote to Marcello Rigotti (José Henrique K. Ambiel):
The same as voting for Chocolate since Marcello Rigotti alredy voted for Chocolate
https://goerli.etherscan.io/tx/0x69204aa193a362c3d3087b2ad99a6c44166b76aa054f7f7644a8311b262ad199

Voting for Chocolate (Marcello Rigotti)
Reverted with error "Already voted"
https://goerli.etherscan.io/tx/0x3fd7ba5013e6a7022c8683829a016ffb66af319e3fbbc23d445dcf96ef09cefe

Delegate vote to Alessandro Morandi (Marcello Rigotti):
Reverted with error "Already voted"
https://goerli.etherscan.io/tx/0x248ba5db4f0501661fa6ffdaf519b195be23fad87d5f1c8476d11db5d1e4cfd9