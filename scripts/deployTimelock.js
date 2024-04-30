const hre = require("hardhat");

const admin = "";
const delay = 43200;

async function main() {
    const Timelock = await hre.ethers.getContractFactory("Timelock");
    const timelock = await Timelock.deploy(admin, delay);
    await timelock.deployed();
    console.log(`Timelock deployed to ${timelock.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});