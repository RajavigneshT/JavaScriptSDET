         document.getElementById("demo").innerHTML="This is my Dynamic text message"
         document.getElementById("demo2").innerHTML="Hello java Script"
         document.getElementById("mybtn").onclick=displayDate;

         function displayDate()
         {
            document.getElementById("mydate").innerHTML=Date();
         }
