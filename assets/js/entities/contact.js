ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
	Entities.Contact = Backbone.Model.extend({});

	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,

		comparator: function(contact) {
			return contact.get("firstName") + contact.get("lastName");
		}
	});

	var contacts;

	var initializeContacts = function(){
		contacts = new Entities.ContactCollection([
			{ id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" }
		])
	}
});