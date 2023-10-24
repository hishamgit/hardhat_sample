require("@nomicfoundation/hardhat-toolbox");

//alchemy to talk to our blockchain
const ALCHEMY_API_KEY = "9WdSp6vnZJlsNglx5ppWtND_7O-D3lO8";

const SEPOLIA_PRIVATE_KEY = "d2645b8a6712e63d7884f499b440d5eb44169296201d911c21d54d26758a86c8";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
