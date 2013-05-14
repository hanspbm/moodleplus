var StudentDetails = Backbone.View.extend({
	template: Handlebars.compile(
	
		'<div class="navbar navbar-inverse navbar-fixed-top">' +
		  '<div class="navbar-inner">' +  
		    '<div id="block_container">' +
		      '<div id="bloc1"><a class="nav pull-left" href="#"><img src="img/home.png" height="30" width="30"></a></div>' +
		      '<div id="bloc2"><h4 align="center" style="color:white;">Profile: {{name}}</h4></div>' +
		    '</div>' +  		    
		  '</div>' +  
		'</div>' +
	      
		'<div class="container">' +			
		  '<div>' +
		  '<h1>{{name}}</h1>' +
		  '<img src="img/{{imagepath}}" class="img-polaroid" />' +
		  '</div>' +
		'</div>'
	),
		
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});