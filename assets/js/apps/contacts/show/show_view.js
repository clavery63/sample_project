ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.MissingContact = Marionette.ItemView.extend({
    template: "ContactManager.ContactsApp.List.Templates.missingContactView"
  });

  Show.Contact = Marionette.ItemView.extend({
    template: "ContactManager.ContactsApp.List.Templates.contactView",

    events: {
      "click button.js-list-contacts": "listContactsClicked"
    },

    listContactsClicked: function(e) {
      e.preventDefault();
      ContactManager.trigger("contacts:list");
    }
  });
});