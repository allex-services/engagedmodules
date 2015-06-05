function createEngagedModulesService(execlib,ParentServicePack){
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite;

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
    return ParentService.prototype.createStorage.call(this,storagedescriptor);
  };
  return EngagedModulesService;
}

module.exports = createEngagedModulesService;
