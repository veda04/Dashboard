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