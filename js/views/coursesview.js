var CoursesView = Backbone.View.extend({

	template: Handlebars.compile(
		'<div class="navbar navbar-inverse navbar-fixed-top">' +
		  '<div class="navbar-inner">' +
		    '<div id="block_container">' +
		      '<div id="bloc1"><a class="nav pull-left" href="#"><img src="img/home.png" height="30" width="30"></a></div>' +
		      '<div id="bloc2"><h4 align="center" style="color:white;">Courses</h4></div>' +
		    '</div>' +  
		  '</div>' +  
		'</div>' +
		
		'<div class="btn-group">' +
		  '<button id="new-course" class="btn">Add Course</button>' +
		  '<button id="remove-course" class="btn">Remove Course</button>' +
		'</div><br><br>' +
	      
		'<div class="container">' +
		  //'<input id="new-course" placeholder="Add new course" autofocus><br><br>' +
		  '<ul class="nav nav-tabs nav-stacked">' + 
		  '{{#each models}}<li class="divider-vertical"><a href="#/courses/{{attributes.name}}">{{attributes.name}}</a></li>{{/each}}' +
		  '</ul>' +
		'</div>'
	),
	
	initialize: function  () {
		console.log("--> initialize:function IN CoursesView")
		this.collection.on('reset', this.render, this);
		this.collection.on('add', this.render, this);
		this.collection.on('remove', this.render, this);
	},	

	render: function () {
		console.log("--> render: function IN CoursesView")
		this.$el.html(this.template(this.collection));
		return this;
	},
	
	events: {
		//'keypress #new-course': 'createTodoOnEnter',
		'click #new-course': 'createCourseOnClick',
		'click #remove-course': 'removeCourseOnClick'
	},
	/*
	createTodoOnEnter: function(e){
		if ( e.which !== 13 || !$("#new-course").val().trim() ) { // ENTER_KEY = 13
		  return;
		}
		var courseString = $("#new-course").val().trim()
		
		console.log("inputbox value: " + courseString);
		
		app.coursesCollection.create({id: courseString, name: courseString});
		$("#new-course").val(''); // clean input box
	},
	*/
	createCourseOnClick: function() {
		console.log("--> createCourseOnClick: function");
		var newcourse = prompt("Please enter a new course");
		
		if(!newcourse) {
			console.log("no entered value");
		}
		else {
			app.coursesCollection.create({id: newcourse, name: newcourse});
		}
	},
	
	removeCourseOnClick: function() {
		console.log("--> removeCourseOnClick: function");
		var removecourse = prompt("Please remove a course");
		
		if(!removecourse) {
			console.log("no entered value");
		}
		else {
			app.coursesCollection.remove({id: removecourse});
			//app.coursesCollection.remove(app.coursesCollection.at(2));
		}
	}

});