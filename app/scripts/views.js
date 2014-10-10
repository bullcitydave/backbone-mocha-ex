var PersonView = Backbone.View.extend({

  className : 'person',

  initialize: function(){
      console.log("Ready to see this!");
    },

  render: function(){
      var src = this.model.get('imgUrl');
      this.$el.append('<img src = "'+ src + '">');
      return this;
  },

  events: {
      'click': 'onClick'
    }
});




var person = new Person({firstName: "Grace",
  lastName: "Hopper",
  role: "Computer Scientist",
  imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
})


var personView = new PersonView ({
  model: person
});





///////
/// Create view of collection to render Handelbars template ////
///////


var RolodexView = Backbone.View.extend({
  className : 'rolodex-list',

  initialize: function(){
      console.log("Ready to see this!");
    },

    render: function(){
      var source = $('#rolodex-template').html();
      var template = Handlebars.compile(source);
      var rendered = template({people: this.collection.toJSON()})
      this.$el.append(rendered);
      return this;
  }
});

var rolodexView = new RolodexView ({
  collection: people
})





$(document).ready(function() {
 $('.people-list').append(rolodexView.render().$el);
})
