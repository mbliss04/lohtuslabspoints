define(['views/FullTeamView', 'views/TeamsView'], function (FullTeamView, TeamsView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      "" : "showTeams",
      "team/:name" : "showTeam"
    }
  });

  var initialize = function(){
    
    var router = new MainRouter();

    router.on('route:showTeams', function () {

        $('#logo').show();
        var teamsView = new TeamsView();
        teamsView.render();
        
    });

    router.on('route:showTeam', function (team) {

        $('#logo').hide();
        var teamView = new FullTeamView();
        $('body').prepend(teamView.render().el);

        console.log("show single team");
        
    });

    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});