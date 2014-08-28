define(['models/TeamModel'], function(TeamModel){
  
  var TeamView = Backbone.View.extend({
    tagName: 'li',
    template: _.template( $("#teamTemplate").html()),
    initialize: function () {
        console.log('creating team view');
        this.model.on("change", this.render);
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.css({height:($(window).height()/2)});
        return this;
    }, 
    events: function() {

    }
  });

  return TeamView;

});