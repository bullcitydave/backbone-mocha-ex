(function () {
    'use strict';
    describe("Exercise 2: ", function () {
        describe("Define a Backbone Collection: ", function () {
            var people;

            beforeEach(function () {
                people = new People({
                    model: Person
                });
            });

            it("store it as a variable called 'People'", function () {
                expect(People).to.not.be.undefined;
            });

            it("set the model class to 'Person'", function () {
                expect(people.models[0].get('imgUrl')).to.exist;
                expect(people.models[0].get('lastName')).to.exist;
                expect(people.models[0].get('firstName')).to.exist;
            });

            it("give it a comparator of 'lastName'", function () {
                expect(people.comparator).to.equal("lastName");
            });
        });

        describe("Instantiate a new Collection: ", function () {
            it("store it as a variable called 'people'", function () {
                expect(people).to.exist;
            });

            it("add at least three models to it, and give them unique last names", function () {
                expect(people.length).to.be.above(2);
                expect(people.models[0].get('lastName')).to.not.equal(people.models[1].get('lastName'))
                expect(people.models[0].get('lastName')).to.not.equal(people.models[2].get('lastName'))
                expect(people.models[1].get('lastName')).to.not.equal(people.models[2].get('lastName'))
            })
        });

        describe("Add some more models: ", function () {

            it("use .add to add at least 1 more model", function () {
                expect(people.length).to.be.above(3);
            });

        });
    });
})();
