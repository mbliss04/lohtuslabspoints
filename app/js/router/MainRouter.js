define(['views/TeamsView', 'views/UpdateView'], function (TeamsView, UpdateView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      "" : "showTeams",
      "update" : "updatePoints"
    }
  });

  var initialize = function(){
    
    var router = new MainRouter();

    router.on('route:showTeams', function () {

        $('#logo').show();
        var teamsView = new TeamsView();
        teamsView.render();
        
    });

    router.on('route:updatePoints', function() {

        $('#logo').hide();
        var updater = new UpdateView();
        $('html').append(updater.render().el);

    });

    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});