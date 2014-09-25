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
        "submit": "updatePoints"
    }, 
    updatePoints: function() {
        $.ajax ({
            url: 'updatescore',
            data: $('#addPoints').serialize(),
            type: "PUT",
            success: function(response) {
                console.log(response)
            }
        });
        return false;
    }
  });

  return TeamView;

});