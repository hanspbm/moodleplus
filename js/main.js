var AppRouter = Backbone.Router.extend({
	routes: {
		"": "home",
		"courses": "courses",
		"courses/:section": "section",
		"courses/section/:student": "student"
	},
	
	initialize: function  () {
		console.log("--> initialize: function");
		
		this.coursesCollection = new CoursesCollection();
		this.coursesCollection.fetch();
		
		this.coursesView = new CoursesView({collection: this.coursesCollection});

		this.studentModel = new StudentModel();
		this.studentView = new StudentDetails(
			{
				model: this.studentModel
			}
		);		
	},	

	home: function () {
		var markup =
			'<div class="navbar navbar-inverse navbar-fixed-top">' +  
			  '<div class="navbar-inner">' +  
			    '<div class="container">' +  
			      '<h4 align="center" style="color:white;">Home</h4>' +
			    '</div>' +  
			  '</div>' +  
			'</div>' +
		
			'<div class="container">' +
			  '<div class="row">' +
			    '<div class="span3">' +
			      '<a href="#courses" class="thumbnail plain">' +
				'<img src="img/RulerPlaceholder.png" height="100" width="100">' +
				'<center>Courses</center>' +
			      '</a>' +
			    '</div>' +
			  '</div>' +
			'</div>';
		
		$('#app').html(markup);
	},

	courses: function () {
		console.log("--> courses: function");
		$('#app').html(this.coursesView.render().el);
	},	
	
	section: function (section) {
		console.log("entered section: function");
		var markup =
			'<div class="navbar navbar-inverse navbar-fixed-top">' +
			  '<div class="navbar-inner">' +  
			    '<div id="block_container">' +
			      '<div id="bloc1"><a class="nav pull-left" href="#"><img src="img/home.png" height="30" width="30"></a></div>' +
			      '<div id="bloc2"><h4 align="center" style="color:white;">' + section + '</h4></div>' +
			    '</div>' +  			    
			  '</div>' +  
			'</div>' +
		      
			'<div class="container">' +			
			  '<b>Class Roster</b>:<br>' +
			  '<ul class="nav nav-tabs nav-stacked">' + 
			  '<li class="divider-vertical"><a href="#/courses/section/Sam">Sam</a></li>' +
			  '<li class="divider-vertical"><a href="#/courses/section/Frodo">Frodo</a></li>' +
			  '</ul>' +
			'</div>';
		
		$('#app').html(markup);
	},
	
	student: function (student) {
		this.studentModel.set('name', student);
		$('#app').html(this.studentView.render().el);
	},
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});