define(['views/TeamView', 'views/TeamsView'], function (FullTeamView, TeamsView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      "" : "showTeams"
    }
  });

  var initialize = function(){
    
    var router = new MainRouter();

    router.on('route:showTeams', function () {

        $('#logo').show();
        var teamsView = new TeamsView();
        teamsView.render();
        
    });

    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});