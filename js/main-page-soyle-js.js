var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];


function Slide(title, subtitle, background, link ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.link = link;
	this.id = "slide" + slideIndex;
	slideIndex++;
	slideArray.push(this);
}

var firstSlide = new Slide(
	"First Slide of Soyle", 
	"Hodson Odoi", 
	"https://0b38966e54e8bebf4a9b-c91cf87d0ed24f4939ca44173a86a2bc.ssl.cf1.rackcdn.com/WDDUG8GB7JA346941/7d10e619cedc6c10876fd4bb6cbf01e4.jpg", 
	"article-page.html"
);

var secindSlide = new Slide(
	"Second Slide of Soyle", 
	"Loftus Cheek", 
	"https://cdn.gearpatrol.com/wp-content/uploads/2018/05/2018-Mercedes-Benz-G-Class-Review-gear-patrol-slide-2-1940x1300.jpg", 
	"article-page.html"
);

var thirdSlide = new Slide(
	"Third Slide of Soyle", 
	"Ethan Ampadu", 
	"https://www.telegraph.co.uk/content/dam/motoring2/2015/12/01/01-mercedes-e-class-main-image-xlarge_trans_NvBQzQNjv4Bq3480UNUU8UfSxDSaY1n7MDWU-KwRaHvlaJXY1texVLQ.jpg", 
	"article-page.html"
);


function buildSlider(){
	var myHTML;
	
	for(var i = 0; i < slideArray.length; i++) {
		
		myHTML += "<div id='" + slideArray[i].id + 
		"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" + 
		"<div class='slideOverlay'>" + 
		"<h3>" + slideArray[i].title + "</h3>" +
		"<h4>" + slideArray[i].subtitle + "</h4>" +
		"<a href='" + slideArray[i].link + "' target='_blank'>Read more...</a>" +
		"</div>" +
		"</div>";	
		
	}
	
	document.getElementById("mySlider").innerHTML = myHTML;
		
	document.getElementById("slide" + currentSlideIndex).style.left = 0;

}

buildSlider();


function prevSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = slideArray.length - 1;
	} else {
		nextSlideIndex = currentSlideIndex - 1;
	}	
	
	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
	
	currentSlideIndex = nextSlideIndex;
}


function nextSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
		nextSlideIndex = currentSlideIndex + 1;
	}	
	
	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
	
	currentSlideIndex = nextSlideIndex;
}







