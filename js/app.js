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


function lessContent(){
	var showLessLink = document.getElementById("less");
	less.style.display = "none";
}

var buttonElem = document.getElementById("noMore");
buttonElem.addEventListener("click", less);

/*
<a id="noMore" onclick="lessContent()">Show Less</a>

<p id="less">VHS wayfarers brooklyn church-key edison bulb, cred helvetica heirloom chillwave lomo ennui. Lomo heirloom fap jianbing, selfies gastropub you probably haven't heard of them. Austin godard ugh, portland stumptown kale chips taxidermy four dollar toast gastropub gochujang bicycle rights fanny pack microdosing. Kinfolk tousled 8-bit, keytar portland 3 wolf moon typewriter.</p>



//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

function zoom(){
  var pElem = document.getElementById("biggie");
  biggie.style.fontSize = "150%";
}


//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph with the id of `menu` after clicking on the showMenu paragraph.*/


var menuItems = ["Big Mac", "Chicken McNuggets", "Egg-White Delight McMuffin"];

function valueMenu(){
	for (var i = 0; i < menuItems.length; i++){
		document.getElementById("menu").innerHTML = menuItems[i];
	}
}

var pElem = document.getElementById("showMenu");
pElem.addEventListener("click", valueMenu());

/*
<p id="showMenu" onclick="valueMenu()">Access Today's Special Dollar Menu.
          </p>
          <p id="menu"></p> */

/*
function randomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length); /* this is the random quote generator */
 /* document.getElementById("displayQuote").innerHTML = quotes[randomNumber]; /* "displayQuote" is where to add the random quote when the Change da Quotes Son button is pushed. Used the .innerHTML method to pass a randomly retrieved quote from the quotes array[which was pre-defined] as the value that will be added into our HTML "displayQuotes" element. */
/*
}

var buttonElem = document.getElementById("random"); /* "random" is the button id. */
/*buttonElem.addEventListener("click", randomQuote); /* randomQuote is the function to execute. */
/*
*/

//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 20px after clicking on the text.*/



/*
function redFace(){
	document.getElementById("drink").style.fontSize = 20px;
	document.getElementById("drink").style.color = "red";
}

pElem.addEventListener("click", redFace);

/*
function myFunction() {
    document.getElementById("demo").style.color = "red";
}

function zoom(){
  var pElem = document.getElementById("biggie");
  biggie.style.fontSize = "150%";
}

<p id="drink" onclick="redFace()">Gin is a spirit which derives its predominant flavour from juniper berries (Juniperus communis). From its earliest origins in the Middle Ages, gin has evolved from a herbal medicine to an object of commerce in the spirits industry.</p>

//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/


function showPrice(){
	var node = document.createElement("PRI");
	var textNode = document.createTextNode("Price: $5.55");
	node.appendChild(textNode); /* It is suggested to create a node/textNode after you do a create element. */
	document.getElementById("oreo").appendChild(node); /* this line appends the actual: "Price: $5.55" after the paragraph text of the paragraph "oreo" is displayed */
}

var buttonElem=document.getElementById("price"); /* "price" is the id for the empty paragraph where you store & displsy the actual price of $5.55. */
price.addEventListener("mouseover", showPrice()); /* When you move your mouse over the text in the Oreo paragraph, it'll show/display the price of $5.55. */
 


//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";

function dispQuote(){
	var pElem = document.getElementById("displayQuote"); /* "displayQuote" is the empty paragraph id. */
	pElem.innerHTML = myQuote; /* myQuote is the variable to add to the "displayQuote" paragraph when the Make Me Say Sumptin' button is pushed. */
}

var buttonElem = document.getElementById("Benjamin"); /* "Benjamin" is the button id. */
buttonElem.addEventListener("click", dispQuote); /* dispQuote is the function to execute. */


//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

function randomQuote(){
	var randomNumber = Math.floor(Math.random() * quotes.length); /* this is the random quote generator */
	document.getElementById("displayQuote").innerHTML = quotes[randomNumber]; /* "displayQuote" is where to add the random quote when the Change da Quotes Son button is pushed. Used the .innerHTML method to pass a randomly retrieved quote from the quotes array[which was pre-defined] as the value that will be added into our HTML "displayQuotes" element. */

}

var buttonElem = document.getElementById("random"); /* "random" is the button id. */
buttonElem.addEventListener("click", randomQuote); /* randomQuote is the function to execute. */



//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clicking on the button.
*/

/*
<div id="clock"></div>

 // get the clock div 
    var myClock = document.getElementById('clock');

function showHideMsg() { 
    

    // get the current value of the clock's display property 
    var displaySetting = myClock.style.display;

    // also get the clock button, so we can change what it says 
    var clockButton = document.getElementById('clockButton');
				
    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') { 
      // clock is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = 'Show clock';
    }
    else { 
      // clock is hidden. show it 
      myClock.style.display = 'block';
      // change button text
      clockButton.innerHTML = 'Hide clock';
    }
  }  

var buttonElem = document.getElementById("showHide"); /* "showHide" is the button id. */
buttonElem.addEventListener("click", showHideMsg);

/* <button onclick="toggleClock()" id="clockButton">Show clock</button>



//*
<div class="block3 col-sm-4"><img src="http://bigcitybloggers.com/wp-content/uploads/2014/10/logo_man.png" alt="">
    <h3>Unlock the Secret to Financial Freedom</h3>
    <p id="freedom">Create an event listener that will show and hide the message when clicking on the button</p>
       <button id="showHide">Get Secret Now</button>
       <p id="showmoney">
        <img id="catmoney" src="http://previews.123rf.com/images/aptypkok/aptypkok1201/aptypkok120100093/11943484-Red-cat-sitting-on-the-dollar-on-the-white-background-Stock-Photo.jpg" alt="">
      </p>
   </div>
   */