define(['views/TeamView', 'views/TeamsView'], function (TeamView, TeamsView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      "" : "showTeams",
      "team/:name" : "showTeam"
    }
  });

  var initialize = function(){
    
    var router = new MainRouter();

    router.on('route:showTeams', function () {

        var teamsView = new TeamsView();
        teamsView.render();
        
    });

    router.on('route:showTeam', function (team) {

      var teamView = new TeamView();
      teamView.render();

      console.log("show single team");
        
    });

    Backbone.history.start();
    
  };
  return {
    initialize: initialize
  };
});