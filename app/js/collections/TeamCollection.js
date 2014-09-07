define(['models/TeamModel'], function(TeamModel){
  var TeamCollection = Backbone.Collection.extend({
      model: TeamModel,
      url: '/teams',
      comparator: function(model) {
        return parseInt(model.get('points'));
      }
  });

  return TeamCollection;
});