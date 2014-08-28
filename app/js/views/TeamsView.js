define(['collections/TeamCollection', 'views/TeamView'], function(TeamCollection, TeamView){

  var TeamsView = Backbone.View.extend({
    el: '#teams',
    collection: new TeamCollection(),
    template: $("#teamsTemplate").html(),
    initialize: function() {
        var that = this;
        this.collection.fetch();
        this.collection.on('add', this.addOne, this);
    },
    render: function() {
        this.collection.forEach(this.addOne, this);
        this.$el.html( _.template( this.template, {teams:this.collection.models} ));
    }, 
    addOne: function(team){
        console.log('Adding ' + team.get('name'));
        var index = (this.collection.indexOf(team) + 1);
        var teamView = new TeamView({model:team, className:"rank"+(team.get('rank')+index).toString()});
        this.$el.append(teamView.render().el);
    }

  });

  return TeamsView;

});