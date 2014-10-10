/* modelTest */

(function () {
    'use strict';

    describe("Exercise 1: ", function () {
        describe("Create a Backbone Model: ", function () {
            var person;
            
            beforeEach(function () {
                person = new Person();
            })

            it("store it as a variable called 'Person'", function () {
                expect(Person).to.not.be.undefined;
            });

            describe("give it some defaults", function () {
                it("such as a 'role' attribute that equals 'student'", function () {
                    expect(person.defaults.role).to.exist;
                    expect(person.defaults.role).to.equal("student");
                });

                it("such as a 'imgUrl' attribute that equals 'http://placekitten.com/200/200'", function () {
                    expect(person.defaults.imgUrl).to.exist;
                    expect(person.defaults.imgUrl).to.equal("http://placekitten.com/200/200");
                });

                it("such as a 'firstName' attribute that equals an empty string ''", function () {
                    expect(person.defaults.firstName).to.exist;
                    expect(person.defaults.firstName).to.equal('');
                });

                it("such as a 'lastName' attribute that equals an empty string ''", function () {
                    expect(person.defaults.lastName).to.exist;
                    expect(person.defaults.lastName).to.equal('');
                });
            });

            describe("give it some custom methods", function () {
                it("such as a method called 'generateUsername'", function () {
                    expect(person.generateUsername).to.exist;
                });

                it("'generateUsername' should return a concatenated string of the 'firstName' and 'lastName'", function () {
                    var username;
                    person = new Person({
                        firstName: "Milo",
                        lastName: "Elman"
                    });
                    username = person.generateUsername();
                    expect(username).to.equal("MiloElman");
                })
            });
        });
    });
})();
