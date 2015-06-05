function createServicePack(execlib){
  var execSuite = execlib.execSuite,
  DataServicePack = execSuite.registry.register('allex_dataservice'),
  ParentServicePack = DataServicePack;

  return {
    Service: require('./servicecreator')(execlib,ParentServicePack),
    SinkMap: require('./sinkmapcreator')(execlib,ParentServicePack)
  };
}

module.exports = createServicePack;
