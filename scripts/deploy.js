
const hre = require("hardhat");

async function main() {

  const demo = await hre.ethers.deployContract("Demo",[100]);
  // console.log(demo);
  await demo.waitForDeployment();

  console.log(
    `deployed to ${demo.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
