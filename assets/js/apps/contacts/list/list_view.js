ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: "ContactManager.ContactsApp.List.Templates.listItemView",

    events: {
      "click": "highlightName",
      "click td a.js-show": "showClicked",
      "click button.js-delete": "deleteClicked"
    },

    highlightName: function(e){
      this.$el.toggleClass("warning");
      this.trigger("contact:info", this.model);
    },

    showClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:show", this.model);
    },

    deleteClicked: function(e){
      e.stopPropagation();
      this.trigger("contact:delete", this.model);
    },

    remove: function(){
      this.$el.fadeOut(function(){
        Marionette.ItemView.prototype.remove.call(self);
      });
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "ContactManager.ContactsApp.List.Templates.contactList",
    itemView: List.Contact,
    itemViewContainer: "tbody",
  });

  List.ContactExample = Marionette.CompositeView.extend({
    tagName: "li",
    template: "ContactManager.ContactsApp.List.Templates.exampleItemView"
  });

  List.ContactsExample = Marionette.CompositeView.extend({
    template: "ContactManager.ContactsApp.List.Templates.exampleList",
    itemView: List.ContactExample,
    itemViewContainer: "ul"
  });
});