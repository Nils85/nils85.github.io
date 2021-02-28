// ECMAScript 5
"use strict";

// Automatic background color for table cells
var elements = document.getElementsByTagName("td");

for (var i = 0; i < elements.length; ++i)
{
	switch (elements[i].textContent.toLowerCase())
	{
		case "yes":
			elements[i].className = "green";
			break;

		case "deprecated":
			elements[i].className = "orange";
			break;

		case "no":
			elements[i].className = "red";
			break;
	}
}

// Open all links in a new tab except for the menu
elements = document.getElementsByTagName("a");

for (var i = 3; i < elements.length; ++i)
{ elements[i].target = "_blank"; }