module.exports = {
  rpc: {
    host: "54.254.211.103",
    port: 30311
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {

    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    live: {
      host: "54.254.211.103",
      port: 30311,
      network_id: "*", // Match any network id
      gas : 4700000,
      from : "0x34B1BCB29f604C377359938aFb54DD038297C10e"
    },
    main : {
      network_id: '*',
      gas : 4712388
    }
  }
};
