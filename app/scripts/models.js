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
