define(['models/TeamModel'], function(TeamModel){
  
  var TeamView = Backbone.View.extend({
    tagName: 'li',
    model: new TeamModel(),
    template: _.template($("#teamTemplate").html()),
    fullTemplate: _.template($("#fullTeamTemplate").html()),
    initialize: function () {
        this.model.on('change', this.render());
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.css({height:($(window).height()/2)});
        return this;
    }, 
    events: {
        "click js-expand": function() {
            console.log(this.model);
        }
    }
  });

  return TeamView;

});