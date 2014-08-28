define(['models/TeamModel'], function(TeamModel){
  var TeamCollection = Backbone.Collection.extend({
      model: TeamModel,
      url: '/teams'
      //url: 'http://nationalpark-mongodb.jit.su/messages'
  });

  return TeamCollection;
});