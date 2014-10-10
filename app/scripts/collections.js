var People = Backbone.Collection.extend({
  model: Person,
  comparator: 'lastName'
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
