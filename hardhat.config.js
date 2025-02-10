require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  etherscan: {
    apiKey: "CCXUKZFKA3JVS9EZ4PBEM6RMBW1K4VGRWI",
  },
  mocha: {
    timeout: 8000000000,
  },
  networks: {
    eth: {
      accounts: [
        "PK",
      ],
      url: "https://bsc-testnet-rpc.publicnode.com",
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    cache: "./cache",
    tests: "./test",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.22",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          viaIR: false,
        },
      },
    ],
  },
  watcher: {
    ci: {
      tasks: [
        "clean",
        { command: "compile", params: { quiet: true } },
        {
          command: "test",
          params: { noCompile: true, testFiles: ["testfile.ts"] },
        },
      ],
    },
    compilation: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
  },
};