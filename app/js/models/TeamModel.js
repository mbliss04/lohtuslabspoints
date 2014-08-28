define([], function() {
  var TeamModel = Backbone.Model.extend({
    defaults: {
        name: "Team", 
        points: 0,
        rank: 0,
        members: {}, 
        videoUrl: "", 
        description: "",
        teamUrl: "/team/"
    }, 
    initialize: function() {

    }
  });
  return TeamModel;
});