var CoursesCollection = Backbone.Collection.extend({
  model: CoursesModel,
  localStorage: new Store("backbone-course")
});