const SimpleStorage = artifacts.require("simplestorage");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
