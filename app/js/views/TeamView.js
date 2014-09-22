define(['models/TeamModel'], function(TeamModel){
  
  var TeamView = Backbone.View.extend({
    tagName: 'li',
    model: new TeamModel(),
    template: _.template($("#teamTemplate").html()),
    initialize: function () {
        this.model.on('change', this.render());
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.css({height:($(window).height()/2)});
        return this;
    }, 
    events: {
        "click .js-show-team": function() {
            this.$el.addClass('selected').animate({
                height:($(window).height()),
                width: '100%'
            }, 300);
        }, 
        "click .js-hide-team": function() {
            this.$el.removeClass('selected').animate({
                height:($(window).height()/2),
                width: '50%'
            }, 300);
        }
    }
  });

  return TeamView;

});