function createEngagedModulesUserTester(execlib,Tester){
  var lib = execlib.lib,
      q = lib.q;

  function EngagedModulesUserTester(prophash,client){
    Tester.call(this,prophash,client);
    console.log('runNext finish');
    lib.runNext(this.finish.bind(this,0));
  }
  lib.inherit(EngagedModulesUserTester,Tester);

  return EngagedModulesUserTester;
}

module.exports = createEngagedModulesUserTester;
