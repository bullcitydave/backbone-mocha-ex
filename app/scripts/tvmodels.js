// MODELS AND COLLECTIONS

// A model is a essentially a package containing both an object, that will exist within your Javascript application and interact with elements outside of the application, and an instruction manual for that object. It defines all the various properties of the object, including attributes possessed by the object, potential behaviors exhibited by the object, and potential actions that can be applied to the object. Models can have defined default values, validation criteria, rules for flagging and handling both successfuiiiiiiiiiiiiiiiiil changes to properties and any errors thrown. Implicitly, model properties can be changed or outputted within the application, retrieved from or provided to external sources.

// An example of a model in the physical world would be a Vizio television that's just arrived at a CrazyDavesElectronics.com warehouse. The model isn't just the television object itself. It includes the instruction manual that ships with it, which outlines how the TV works–how to power on and off, how to find channels, control the volume, etc. User can set properties like viewing mode and color contrast, but these properties have factory defaults.  A troubleshooting section of the manual will list several standard error messages and what behaviors cause them. There are also manufacturing properties–the glass, the buttons, the wiring, etc. that are more of concern to the vendor than the consumer. Then there are the retail properties–the price, the model number, etc. For shipping purposes, there are box properties and the product weight.

// Much-abbreviated code snippet of how a Vizio TV "model" (in the programmatical sense) might be defined

// Creating a Vizio TV "model" (in the programmatical sense)

  var vizioTelevision = Backbone.Model.extend({

    initialize: function(){
        alert("New Vizio TV accepted in the warehouse!");
      },

    // All television sets come with certain factory default settings and have other default properties
    defaults: {
        displayControls: [{'viewing-mode': 'widescreen'},{'brightness':50},{'tint':25}],
        language: 'English',
        brandname: 'Vizio',
        sellStatus: 'new'
      },

    // A function of every television is that the screen size can be obtained from the modelnumber
    screenSize: function() {
        return (this.get('modelnumber')).substring(3,5);
    }
  });

// Creating an new instance of a TV...information provided by the manufacturer
  var vTV = new vizioTelevision({ modelnumber: 'VZ-5515W', serialnumber: 'KJH720PN381N981', remotecontrol: 'RC023', prodweight: 34, shipweight: 38});

// Adding a new property...added by the vendor
  vTV.set({price: '679.99'});

// Calling a method defined in the model
  var shippingMemoText = 'This is a ' + vTV.screenSize() + '-inch television';

///////////

// A collection is an ordered set of like models, where each model shares the same base instruction manual but may be differentiated by its own identifying properties.

// A collection of Vizio televisions may represent the inventory of Vizio televisions that CrazyDavesElectronics.com has in its warehouse. All of the models (in the programming sense) here will share most of the same properties; they are all televisions, after all. Most of the instructions will be the same. But there will be variations between Vizio models (in the retail sense), reflected in the size, weight, features, behaviors, and instructions.  The collection is ordered in a particular way within the warehouse, perhaps by size, then Vizio model, then manufacturing date. And each model is uniquely identified by a serial nunber.

var vizioTVInventory = Backbone.Collection.extend({
      model: vizioTelevision,
      comparator: function(item) {
        return [item.get("modelnumber"), item.get("serialnumber")]
      }
  });

// CrazyDavesElectronics doesn't carry too many Vizio televisions
var cdeVizioTVInventory = new vizioTVInventory([
      { modelnumber: 'VZ-5515W', serialnumber: 'KJH720PN381N981', remotecontrol: 'RC023', prodweight: 34, shipweight: 38},
      { modelnumber: 'VZ-5515W', serialnumber: 'KJH720PN381N982', remotecontrol: 'RC023', prodweight: 34, shipweight: 38},
      { modelnumber: 'VZ-5515W', serialnumber: 'KJH720PN381N983', remotecontrol: 'RC023', prodweight: 34, shipweight: 38},
      { modelnumber: 'VZ-6515X', serialnumber: 'KJH720PN382J180', remotecontrol: 'RC025', prodweight: 44, shipweight: 48},
      { modelnumber: 'VZ-6515X', serialnumber: 'KJH720PN382J181', remotecontrol: 'RC025', prodweight: 44, shipweight: 48},
      { modelnumber: 'VZ-7255Z', serialnumber: 'KJH720PN344P002', remotecontrol: 'RC027', prodweight: 54, shipweight: 58},
      { modelnumber: 'VZ-7255Z', serialnumber: 'KJH720PN344P003', remotecontrol: 'RC027', prodweight: 54, shipweight: 58},
      { modelnumber: 'VZ-7255Z', serialnumber: 'KJH720PN344P004', remotecontrol: 'RC027', prodweight: 54, shipweight: 58},
      { modelnumber: 'VZ-7255Z', serialnumber: 'KJH720PN344P005', remotecontrol: 'RC027', prodweight: 54, shipweight: 58}]);

// A refurbished TV was just sent to the warehousing missing a remote control
      cdeVizioTVInventory.add(new vizioTelevision({ modelnumber: 'VZ-3715B', serialnumber: 'KJH78393J21N981', remotecontrol: '', prodweight: 17, shipweight: 20, sellStatus: 'refurb'}));

// Because the comparator is set to order the collection first by model number and then by serial number, the newly added TV is the first element of the collection
      console.log(cdeVizioTVInventory);


///////////

// A view is a declaration of how model data is presented on a web page, including how that presentation changes based on user activity and changes to the model data.

var vizioTVInventory = Backbone.View.extend({

  className : 'inventory',

  initialize: function(){
      this.render();
    },

  render: function() {
    var serialnum = this.model.get('serialnumber');
    var modelnum= this.model.get('modelnumber');
    var shipweight = this.model.get('shipweight');
    var shipReportItem = $('<p>Serial Number: ' + serialnum + '</p><p>Model Number: ' + modelnumber + '</p><p>Shipping Weight: ' + shipweight + ' pounds</p>');
    this.$el.append(shipReportItem);
    return this;
  },

  events: {
      'click': 'onClick'
    }
});

var inventoryView = new vizioTVInventory ({
   model:vizioTelevision
   });
