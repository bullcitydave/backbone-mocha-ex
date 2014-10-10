var PersonView = Backbone.View.extend({

  className : 'rolodex',

  initialize: function(){
      console.log("Ready to see this!");
    },

  render: function(){
      var src = this.model.get('imgUrl');
      var template = Handlebars.compile($("#rolodex-template").html());
      var rendered = template({people: this.collection.toJSON()});
      // this.$el.append(rendered);
      // return this;
      this.$el.append('<img src = "'+ src + '">');
      return this;
  },

  events: {
      'click': 'onClick'
    }
});




var person = new Person({firstName: "Grace",
  // lastName: "Hopper",
  // role: "Computer Scientist",
  // imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
  firstName:'Tobias',
  lastName:'Fuhke',
  imgUrl:'http://i.imgur.com/eboI2wn.jpg'
})

var people = new People([
  {
    firstName:'Tobias',
    lastName:'Fuhke',
    imgUrl:'http://i.imgur.com/eboI2wn.jpg'
  },
  {
    firstName:'Phylidia',
    lastName:'Featherbottom',
    imgUrl:'http://imgur.com/featherbottom'
  },
  {
    firstName:'Carl',
    lastName:'Weathers',
    imgUrl:'http://imgur.com/carlweathers'
  }
  ]);

people.add([
  {
    firstName:'Lindsay',
    lastName:'Bluth',
    imgUrl:'http://imgur.com/lindsaybluth'
  }
]);


 var personView = new PersonView ({
   model: person
});


$(document).ready(function() {
	$('body').append(personView.render().$el);
})

///

///////

var RolodexView = Backbone.View.extend({
  render: function(){
   var source = $('#rolodex-template').html();
    var template = Handlebars.compile(source);
    var rendered = template({people: this.collection.to})
    this.$el.append(rendered);
      return this;
  }
});

var rolodexView = new RolodexView ({
  collection: people
})




//


// var RolodexView = Backbone.View.extend({
//   initialize: function(){
//     this.listenTo(this.collection, 'reset', this.render)
//   },
//   render: function(){
//     var source = $('#rolodex-template').html();
//     var template = Handlebars.compile(source);
//     var rendered = template({people: this.collection.to})
//     this.$el.append(rendered);
//     return this;
//   }
// })
// var rolodexView = new RolodexView({
//   collection: people
// })
//
// $(function(){
//   $('.people-list').append(rolodexView.render().$el);
// })


// my old render
// var src = this.model.get('imgUrl');
// // var template = Handlebars.compile($("#rolodex-template").html());
// // var rendered = template({ponies: this.collection.toJSON()});
// // this.$el.append(rendered);
// // return this;
// // this.$el.append(rendered);
// this.$el.append('<img src = "'+ src + '">');
// return this;
