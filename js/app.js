//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";

function moreContent(){
	var pElem = document.getElementById("more");
	pElem.innerHTML = bacon;
}

var buttonElem = document.getElementById("one");
buttonElem.addEventListener("click", moreContent);

//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the paragraph with the id of `less` after clicking on the `Show Less` link.*/


/*
function lessContent(){
	var showLessLink = document.getElementById("less");
	showLessLink.addEventListener("click", lessContent);
}

var buttonElem = document.getElementById("noMore");
buttonElem.addEventListener("click", less);

/*
<a id="noMore" onclick="lessContent()">Show Less</a>

<p id="less">VHS wayfarers brooklyn church-key edison bulb, cred helvetica heirloom chillwave lomo ennui. Lomo heirloom fap jianbing, selfies gastropub you probably haven't heard of them. Austin godard ugh, portland stumptown kale chips taxidermy four dollar toast gastropub gochujang bicycle rights fanny pack microdosing. Kinfolk tousled 8-bit, keytar portland 3 wolf moon typewriter.</p>


stories = document.getElementsByClassName('story');     
    for (var i = 0; i < stories.length; i++) {              // for each story
        stories[i].addEventListener("click", function () {  // add an onClick listener
            news = this.getElementsByClassName('news');     
            for (var j = 0; j < news.length; j++) {         // for each news in story
                news[j].classList.toggle('hide');           // toggle 'hide' on clicked
            }
        });
    }

//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

function zoom(){
  var pElem = document.getElementById("biggie");
  biggie.style.fontSize = "150%";
}


//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/

/*
var menuItems = ["Big Mac", "Chicken McNuggets", "Egg-White Delight McMuffin"];

function valueMenu(){
	for (var i = 0; i < menuItems.length; i++){
		

		console.log(menuItems[i]);
	}
}

/*
<p id="showMenu" onclick="valueMenu()">Access Today's Special Dollar Menu.
          </p>
          <p id="menu"></p>

//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 20px after clicking on the text.*/

/*
function redFace(){
	var pElem = document.getElementById("drink");
	drink.style.fontSize = 20px;
	drink.style.text = "red";
}

pElem.addEventListener("click", redFace);

/*
function zoom(){
  var pElem = document.getElementById("biggie");
  biggie.style.fontSize = "150%";
}

<p id="drink" onclick="redFace()">Gin is a spirit which derives its predominant flavour from juniper berries (Juniperus communis). From its earliest origins in the Middle Ages, gin has evolved from a herbal medicine to an object of commerce in the spirits industry.</p>

//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/


function showPrice(){
	var node = document.createElement("PRI");
	var textnode = document.createTextNode("Price: $5.55");
	node.appendChild(textnode);
	document.getElementById("oreo").appendChild(node);
}

var buttonElem=document.getElementById("price");
price.addEventListener("mouseover", showPrice);

/*

function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

/*
<p id="oreo" onmouseover="showPrice()">Oreo is a sandwich cookie consisting of two chocolateae wafers with a sweet creme filling in between, and (as of 1974) are marketed as "Chocolate Sandwich Cookies" on the package in which they are held.</p>
    <p id="price"></p>   


//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";

function dispQuote(){
	var pElem = document.getElementById("displayQuote"); /* "displayQuote" is the empty paragraph id. */
	pElem.innerHTML = myQuote; /* myQuote is the variable to add to the "displayQuote" paragraph when the Make Me Say Sumptin' button is pushed. */
}
var buttonElem = document.getElementById("Benjamin"); /* "Benjamin" is the button id. */
buttonElem.addEventListener("click", dispQuote); /* dispQuote is the function to execute */


//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];




//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clicking on the button.
*/
