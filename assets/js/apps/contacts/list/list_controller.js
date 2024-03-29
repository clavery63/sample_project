ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Controller = {
    listContacts: function(){
      var contacts = ContactManager.request("contact:entities");

      var contactsListView = new List.Contacts({
        collection: contacts
      });

      contactsListView.on("itemview:contact:show", function(childView, model){
        ContactManager.trigger("contact:show", model.get("id"));
      });

      contactsListView.on("itemview:contact:delete", function(childView, model){
        contacts.remove(model);
      });

      contactsListView.on("itemview:contact:info", function(childView, model){
        console.log("Highlighting toggled on model: ", model);
      });

      var contactsExample = new List.ContactsExample({
        collection: contacts
      })

      ContactManager.mainRegion.show(contactsListView);
      //ContactManager.exampleRegion.show(contactsExample);
    }
  }
});