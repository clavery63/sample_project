Backbone.Marionette.TemplateCache.prototype.loadTemplate =
function(templateId){
  var template;
  if(templateId.charAt( 0 ) == "#"){
    template = Backbone.Marionette.$(templateId).html();
  }
  else{
    //template = eval(templateId);
    template = eval(templateId);
  }

  if (!template || template.length === 0){
    errorMessage = "Could not find template: '" + templateId + "'";
    throwError(errorMessage, "NoTemplateError");
  }

  return template;
}