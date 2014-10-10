var Person = Backbone.Model.extend({
  defaults: {
      role: 'student',
      imgUrl: 'http://placekitten.com/200/200',
      firstName: '',
      lastName: ''
    },

  generateUsername: function() {
       return this.get('firstName') + this.get('lastName');
  }
});

var People = Backbone.Collection.extend({
  model: Person,
  comparator: 'firstName'
});



var people = new People([
  {
    firstName:'Tobias',
    lastName:'Fuhke',
    imgUrl:'http://i.imgur.com/Z9eviXx.jpg'
  },
  {
    firstName:'Phylidia',
    lastName:'Featherbottom',
    imgUrl:'http://i.imgur.com/pD716oq.png'
  },
  {
    firstName:'Carl',
    lastName:'Weathers',
    imgUrl:'http://i.imgur.com/DuORab4.jpg'
  }
  ]);

people.add([
  {
    firstName:'Lindsay',
    lastName:'Bluth',
    imgUrl:'http://i.imgur.com/MpklGuw.jpg'
  }
]);

people.add([
  {
    firstName:'Grace',
    lastName:'Hopper',
    imgUrl:'http://i.imgur.com/0qwEijp.jpg'
  }
]);

var PersonView = Backbone.View.extend({

  className : 'rolodex',

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
