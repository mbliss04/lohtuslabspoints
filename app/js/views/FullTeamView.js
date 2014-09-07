define(['models/TeamModel'], function(TeamModel){
  
  var FullTeamView = Backbone.View.extend({
    model: new TeamModel(),
    template: _.template($("#fullTeamTemplate").html()),
    initialize: function () {
        this.model.on('change', this.render());
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
  });

  return FullTeamView;

});