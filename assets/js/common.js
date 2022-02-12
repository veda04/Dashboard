/*
   File contains all the required init script to make the dashboard working
*/

// SIDE MENU 
function toggleSideMenu(elem)
{
   var screenWidth = $( window ).width();
   var elm_width = $('#sideMenuContainer').width();
   // alert(screenWidth);

   if(elm_width == 0)
   {
      // open the menu
      $(elem).html('<i class="fa-solid fa-times"></i>');
      if(screenWidth < 767)
      {
         $("#sideMenuContainer").css({'width': "250px", "border-right":"3px solid #fff"});
         $("#sideMenu").css('margin-left', "250px");
      }
      else
      {
         $("#sideMenuContainer").css({'width': "250px", "border-right":"3px solid #fff"});
         $("#main").css('margin-left', "250px");
      }
   }
   else
   {
      // close the menu
      $(elem).html('<i class="fa-solid fa-bars"></i>');
      if(screenWidth < 767)
      {
         $("#sideMenuContainer").css({'width': "0", "border-right": "0"});
         $("#sideMenu").css('margin-left', "0");
      }
      else
      {
         $("#sideMenuContainer").css({'width': "0", "border-right":"0"});
         $("#main").css('margin-left', "0");
         $("#main").addClass('no-menu-open');
      }
   }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = $(this).parent('a').next();
    $(dropdownContent).slideToggle("slow","linear", function() {

    });
  });
}

// ####### GRAPHS
// Sale trends
if($('#saletrend_chart').find())
{
   var saletrend = new ApexCharts(document.querySelector("#saletrend_chart"), saletrend_data);
   saletrend.render();

}

// Happy customers
if($('#served_chart').find())
{
   var served = new ApexCharts(document.querySelector("#served_chart"), served_options);
   served.render();
}

// Products review
if($('#product_review').find())
{
   var prodReview = new ApexCharts(document.querySelector("#product_review"), review_options);
   prodReview.render();
}

// Products sold
if($('#product_sold').find())
{
   var prodsales = new ApexCharts(document.querySelector("#product_sold"), sold_options);
   prodsales.render();
}

// Yearly sales
if($('#yearlysales').find())
{
   var yearlysales = new ApexCharts(document.querySelector("#yearlysales"), yearlysales_options);
   yearlysales.render();
}

//To do list
// Create a "close" button and append it to each list item
var ulDIV = document.getElementById("todoUL");
var myNodelist = ulDIV.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#todoUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todoUL").appendChild(li);
  }
  document.getElementById("todoInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}