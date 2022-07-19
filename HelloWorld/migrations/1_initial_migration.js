const Hello = artifacts.require("helloworld");

module.exports = function (deployer) {
  deployer.deploy(Hello);
};
