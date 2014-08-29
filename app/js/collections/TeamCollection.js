define(['models/TeamModel'], function(TeamModel){
  var TeamCollection = Backbone.Collection.extend({
      model: TeamModel,
      comparator: 'points',
      url: '/teams'
      //url: 'http://nationalpark-mongodb.jit.su/messages'
  });

  return TeamCollection;
});