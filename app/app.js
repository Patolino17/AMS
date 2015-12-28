/*(function myScope(){
	var myApp = function(){
		function login(user,pw){
			console.log("logged in as: " + user);
		}

		var myAPI = {
			login:login
		}

		return myAPI;
	}();
	
	debugger;
	myApp.login('diego','abc123');
})();

/*(function myBlog(){
	
	var app = function(){
		
		function getSections(id){
			return document.getElementsByTagName(id);
		}

		var publicAPI = {
			getSections: getSections
		}

		return publicAPI;
	}();
	
	
	console.log(app.getSections('section'));

})();*/

(function myBlog(){

	var app = {
		myDOMapi: domApiFunc(),
		addSections: addSectionsFunc,
		updateArticle: updateArticleFunc,
		mainContainer: null,
		init: init
	}

	app.init();

	function init(){
		this.updateArticle();
	}

	function addSectionsFunc() {
		this.mainContainer = this.myDOMapi.getSectionsContainer('posts');
		var sections = ['<section>section1</section>',
						'<section>section2</section>'						
						];
		function addItemHTML(item){
			this.mainContainer.innerHTML += item;
		}
		this.myDOMapi.addItems(sections, addItemHTML.bind(this));
	}

	function updateArticleFunc(){
		var sections = this.myDOMapi.getSections('.section');
		for (var i = 0; i < sections.length; i++) {
			var els = sections[i].children[3].getElementsByTagNamet('p');
			for (var x = 0; x <els.length;x++){
				els[x].textContent = 'lorem';	
			};
		};
	}

	function domApiFunc(){

		function getSectionsContainer(id){
				return document.getElementById(id);
		}

		function addItems(items , callback){
			for (var i = 0; i <items.length; i++) {
				callback(items[i]);
			};
		}

		var publicAPI = {
			getSectionContainer: getSectionsContainer,
			addItems: addItems
		}

		return publicAPI;

	};


	/*animaciones y callback
	
	$("main-container").animate({}, function (){
		$(this).animate({}, function (){

		})
	})*/
	

})();
