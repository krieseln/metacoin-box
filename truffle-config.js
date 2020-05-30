const HDWalletProvider = require("@truffle/hdwallet-provider");
const teamsMnemonic = "ritual opera viable knife theory woman naive cousin limb teach play catch";
//const path = require("path");


module.exports = {
    //contracts_build_directory: "/client/src/contracts",
    networks: {
        teams: {
            provider: function() {
                return new HDWalletProvider(teamsMnemonic, "https://sandbox.truffleteams.com/75c361c5-502c-4169-9651-36e265b87246", 0, 10, false);
            },
            network_id: 1590854877142
        }
    }
};