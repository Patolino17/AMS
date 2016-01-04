(function myBlog () {
	document.addEventListener("DOMContentLoaded", function(event){
		var app = {
			DOMapi: domApiFunc(),
			DataApi: dataApiFunc(),
			addMenu: addMenuFunc,
			addSections: addSectionsFunc,
			addMenuMobile: addMenuMobileFunc,
			sections: null,
			menu: null,
			mobilemenu: null,
			init: init
		}

		app.init();

		function init(){
			this.addMenu();
			this.addSections();
			this.addMenuMobile();
		};

		function addMenuFunc() {
			
			function constructMenu() {
				var container = this.DOMapi.getContainer("main-navigation");
				var newNav = document.createElement("nav");
				var newList = document.createElement("ul");
				newNav.appendChild(newList);
				container.appendChild(newNav);
				
				function addList(item, index) {
					var index = index + 1;
					newList.innerHTML += "<li>"+(item.title + " " + index)+"</li>";
				}
				this.DOMapi.addItems(this.menu, addList)
			}

			function addMenuToDOM(obj) {
				this.sections = obj.data.sections;
				this.menu = obj.data.menu;
				constructMenu.call(this);
			}
			this.DataApi.getData(addMenuToDOM.bind(this));
		};

		function addMenuMobileFunc() {
			
			function constructMenu() {
				var container = this.DOMapi.getContainer("mobile_nav");
				var newNav = document.createElement("nav");
				var newList = document.createElement("ul");
				newNav.appendChild(newList);
				container.appendChild(newNav);
				
				function addList(item, index) {
					var index = index + 1;
					newList.innerHTML += "<li>"+(item.title + " " + index)+"</li>";
				}
				this.DOMapi.addItems(this.menu, addList)
			}

			function addMenuToDOM(obj) {
				this.sections = obj.data.sections;
				this.menu = obj.data.menu;
				constructMenu.call(this);
			}
			this.DataApi.getData(addMenuToDOM.bind(this));
		};

		
		function addSectionsFunc() {
			var self = this;
			var observer = setInterval(function() {
				if (self.sections){
					clearInterval(observer);
					var container = self.DOMapi.getContainer("posts");

					function addItems(items,index) {
						var index = index + 1;
						var newSection = document.createElement("section");
						newSection.classList.add("articule-prev")
						var newHeader = document.createElement("header");
						newHeader.appendChild(document.createElement("h2"));
						newHeader.children[0].textContent = items.title;
						var newFirstButton = document.createElement("button");
						newFirstButton.classList.add("boton1");						
						newFirstButton.textContent = "Leer";
						var newArticle =document.createElement("article");
						var newArtImg = document.createElement("img");						
						newArtImg.src = items.image;								
						newArticle.appendChild(newArtImg);
						var newArtP = document.createElement("p");
						newArtP.textContent = items.article;
						newArticle.appendChild(newArtP);
						var newSecondButton = document.createElement("button");
						newSecondButton.classList.add("boton2");
						newSecondButton.textContent = "Leer";
						newSection.appendChild(newHeader);
						newSection.appendChild(newFirstButton);
						newSection.appendChild(newArticle);
						newSection.appendChild(newSecondButton);
						container.appendChild(newSection);

					}
					self.DOMapi.addItems(self.sections, addItems);
				}
			},1)
		};


		function domApiFunc() {
			
			function getContainer(id) {
				return document.getElementById(id);
			}

			function addItems(items, callBack) {
				for (var i = 0; i < items.length; i++) {
					callBack(items[i],i);
				};		
			}
			
			var publicAPI ={
					getContainer: getContainer,
					addItems:addItems
			} 

			return publicAPI;
		};

		function dataApiFunc() {
			var URLs = {
				get: "data/sections.json",
				post: "nothing yet"
			};
		
			function getData(callBack) {
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						callBack(JSON.parse(xmlhttp.responseText));
					};
				};
			xmlhttp.open("GET", URLs.get, true);
			xmlhttp.send();
			}
	
			function sendData() {
				//code to send data 
				//to server/WS
			}
	
			var publicAPI = {
				getData: getData,
				sendData: sendData
			}
	
			return publicAPI;
		};
	});
})();