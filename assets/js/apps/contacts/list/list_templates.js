ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _){
  Templates.listItemView =
  "<td><%- firstName %></td>"+
  "<td><%-lastName %></td>"+
  "<td>"+
    "<a href='#contacts/<%- id %>' class='btn btn-small js-show'>"+
      "<i class='icon-eye-open'></i>"+
      "Show"+
    "</a>"+
    "<button class='btn btn-small js-delete'>"+
      "<i class='icon-remove'></i>"+
      "Delete"+
    "</button>"+
  "</td>";

  Templates.contactList =
  "<thead>"+
    "<tr>"+
      "<th>First Name</th>"+
      "<th>Last Name</th>"+
      "<th></th>"+
    "</tr>"+
  "</thead>"+
  "<tbody>"+
  "</tbody>";

  Templates.contactView =
  "<h1><%- firstName %> <%- lastName %></h1>"+
  "<p><strong>Phone number: </strong> <%- phoneNumber %></p>"+
  "<a href='#contacts' class='btn btn-small js-list-contacts'>"+
      "<i class='icon-eye-open'></i>"+
      "Contact List"+
    "</a>";

  Templates.missingContactView =
  "<div class='alert alert-error'>This contact doesn't exist !</div>";

  Templates.exampleItemView =
  "<%- firstName %> <%-lastName %>";

  Templates.exampleList =
  "<p>Here is the list of all the contacts we have information for:</p><ul></ul>";
});