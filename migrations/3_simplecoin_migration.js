const SimpleCoin = artifacts.require("SimpleCoin")

module.exports = function(deployer) {
    deployer.deploy(SimpleCoin, 1000000000000000)
}