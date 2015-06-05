function createEngagedModulesServiceTester(execlib,Tester){
  var lib = execlib.lib,
      q = lib.q;

  function EngagedModulesServiceTester(prophash,client){
    Tester.call(this,prophash,client);
    console.log('runNext finish');
    lib.runNext(this.finish.bind(this,0));
  }
  lib.inherit(EngagedModulesServiceTester,Tester);

  return EngagedModulesServiceTester;
}

module.exports = createEngagedModulesServiceTester;
