describe("Exercise 3: ", function() {
  describe("Define a Backbone View of a Model: ", function() {

    var myPersonView;

    beforeEach(function() {

      var person = new Person({firstName: "Grace",
        lastName: "Hopper",
        role: "Computer Scientist",
        imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
      })

      myPersonView = new PersonView({
        model: person
      });
    });

    it("store it as a variable called 'PersonView'", function() {
      expect(PersonView).to.not.be.undefined;
    });

    it("give your PersonView a className of 'person'", function() {
      expect(myPersonView.$el.hasClass('person')).to.be.true;
    });

    it("in .render, use jQuery to add an img tag to the $el", function() {
      myPersonView.render();
      expect(myPersonView.$('img').length).to.be.above(0);
    })

    it("use model.get('imgUrl') to populate the src tag", function() {
      myPersonView.render();
      expect(myPersonView.$('img').attr('src')).to.equal(myPersonView.model.get('imgUrl'));
    })

    it("make sure your .render function returns this", function() {
      var returnExpectation = myPersonView.render();
      expect(returnExpectation).to.equal(myPersonView);
    });

    it("give your PersonView an event object, with an event for 'click' that has a callback of 'onClick'", function() {
      expect(myPersonView.events).to.exist;
      expect(typeof myPersonView.events).to.equal("object");
      expect(myPersonView.events['click']).to.exist;
      expect(myPersonView.events['click']).to.equal('onClick');
    });
  });

  describe("Instantiate a new PersonView: ", function() {
    beforeEach(function() {
      var person = new Person({firstName: "Grace",
        lastName: "Hopper",
        role: "Computer Scientist",
        imgUrl: "http://www.history.navy.mil/photos/images/h96000/h96920k.jpg"
      })

      myPersonView = new PersonView({
        model: person
      });
    });

    it("store it as a variable called 'personView'", function() {
      expect(personView).to.exist;
    });

    it("give your instantiated view a model. Make sure the model has an 'imgUrl' attribute", function() {
      expect(personView.model).to.exist;
      expect(personView.model.get('imgUrl')).to.exist;
    });
  });

  describe("In app.js, listen for $(document).ready(): ", function() {
    it("and when the document is ready, append your personView to the DOM", function() {
      expect($(personView.el).length).to.be.above(0);
    });
  });
});
