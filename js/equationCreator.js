/**
* This equation creator deals primarily with the dragging, dropping, and removing of divs
* The thought is that it will be hooked up with a backend system that generates an image
*/

$(function(){

	var targetDiv = $("#ec-target"); //there will only be one of these, so we div it.
	var dataAttrib = "data-ec-data";
	var elementClass = "ec-target-element";

	var eq = { //this is the equation creator object we'll attach to the global context
		addElement: function(newElement, data){
			targetDiv.append(this.createGridElement(newElement,data));
		},
		createGridElement: function(newElement,data){ //this function will take a standard DOM element and attaches a data field we can use to store stuff
			return $(newElement).attr(dataAttrib,data).addClass(elementClass);
		},
		returnData: function(){
			var ret = [];
			targetDiv.find("> ." + elementClass).each(function(i,o){
				ret.push($(o).attr(dataAttrib));
			});
			return ret;
		}
	};


	window.equationCreator = eq;
});
