function createEngagedModulesService(execlib,ParentService){
  'use strict';
  var dataSuite = execlib.dataSuite,
    MemoryStorage = dataSuite.MemoryStorage;

  function factoryCreator(parentFactory){
    return {
      'service': require('./users/serviceusercreator')(execlib,parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib,parentFactory.get('user')) 
    };
  }

  function EngagedModulesService(prophash){
    ParentService.call(this,prophash);
  }
  ParentService.inherit(EngagedModulesService,factoryCreator,require('./storagedescriptor'));
  EngagedModulesService.prototype.__cleanUp = function(){
    ParentService.prototype.__cleanUp.call(this);
  };
  EngagedModulesService.prototype.createStorage = function(storagedescriptor){
    return new MemoryStorage(storagedescriptor);
  };
  return EngagedModulesService;
}

module.exports = createEngagedModulesService;
