define([], function(){
  
  var TeamView = Backbone.View.extend({
    template: _.template($("#updateTemplate").html()),
    initialize: function () {
    },
    render: function () {
        this.$el.html(this.template());
        return this;
    }, 
    events: {
        "click #submitButton": "updatePoints"
    }, 
    updatePoints: function() {

    }
  });

  return TeamView;

});