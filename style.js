function Display1() {
    document.getElementById("image").src="pic_bulboff.gif" ;
 }
 function Display2() {
    document.getElementById("dog").src="brianoff.jpg" ;
 }

 function Display3() {
    document.getElementById("image").src="pic_bulbon.gif" ;
 }

 function Display4() {
    document.getElementById("dog").src="brianon.jpg" ;
 }





























/*
<script language="javascript">
    function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png") 
        {
            document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
        }
    }
</script>

function chkicon(num,allsize) {
    var  flagicon = document.getElementById("flagicon"+num).value;

    if(flagicon=="plus"){
         //alert("P== "+flagicon);

         for (var i = 0; i < allsize; i++) {
            if(document.getElementById("flagicon"+i).value !=""){
               document.getElementById("flagicon"+i).value = "plus";
               document.images["pic"+i].src  = "../images/plus.gif";
            }
          }


         document.images["pic"+num].src = "../images/minus.gif";
         document.getElementById("flagicon"+num).value = "minus";

    }else if(flagicon=="minus"){
         //alert("M== "+flagicon);

          document.images["pic"+num].src  = "../images/plus.gif";    
          document.getElementById("flagicon"+num).value = "plus";

    }else{
          for (var i = 0; i < allsize; i++) {
            if(document.getElementById("flagicon"+i).value !=""){
               document.getElementById("flagicon"+i).value = "plus";
               document.images["pic"+i].src  = "../images/plus.gif";
            }
          }
    }
}


*/
/*<body>
    <button type="button" id="myBtn">Click Me</button>
     
    <script>
    // Defining custom functions
    function sayHello(){
        alert("Hello World! sayHello() function executed successfully!");
    }
     
    function sayHi(){
        alert("Hi There! sayHi() function executed successfully!");
    }
     
    // Selecting button element
    var btn = document.getElementById("myBtn");
     
    // Assigning event listeners to the button
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayHi);
    </script>
    */

/*
To change image onclik with javascript you need to have image with id:

<p>
        <img alt="" src="http://www.userinterfaceicons.com/80x80/minimize.png" 
            style="height: 85px; width: 198px" id="imgClickAndChange" onclick="changeImage()"  />
</p>
Then you could call javascript function when image is clicked:

<script language="javascript">
    function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png") 
        {
            document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
        }
    }
</script>
*/







    /*
    <html>
   <head>
      <script>
         function Display1() {
            document.write ("Hello there!");
         }
         function Display2() {
            document.write ("Hello World!");
         }
      </script>
   </head>
   <body>
      <p>Click the following button to call the function</p>
      <form>
         <input type = "button" onclick = "Display1(); Display2()" value = "Result">
      </form>
   </body>
</html>
*/