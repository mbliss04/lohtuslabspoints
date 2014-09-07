define(['collections/TeamCollection', 'views/TeamView'], function(TeamCollection, TeamView){

  var TeamsView = Backbone.View.extend({
    el: '#teams',
    template: "<%= teams %>",
    initialize: function() {
        var that = this;
        this.collection = new TeamCollection();
        this.listenTo(this.collection, 'sync', this.addTeams);
        this.collection.fetch({
            success: function() {
                that.$el.animate({opacity:1}, 400);
            }
        });
    },
    render: function() {
        this.$el.html( _.template( this.template, {teams:this.collection.models} ));
        return this;
    },
    addTeams: function(teams) {
        var that = this;
        this.$el.empty();
        teams.each(function(team) {
            that.addOne(team);
        });
    },
    addOne: function(team){
        var index = (this.collection.indexOf(team) + 1);
        team.set({rank: index});
        var teamView = new TeamView({model: team, className:"rank"+(team.get('rank').toString())});
        this.$el.append(teamView.render({collection:true}).el);
    }
  });

  return TeamsView;

});