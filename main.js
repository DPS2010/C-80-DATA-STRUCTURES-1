var students_Array = []
 
function submit () {
   
   for (var x=1; x<=5; x++) {
      var student = document.getElementById("input"+x).value
      console.log(student)
      students_Array.push(student) 
   }
   var loop = []

   for ( y = 0; y < students_Array.length; y++) {
      loop.push("<h4>" + students_Array[y] + "</h4>")
      
   }
    document.getElementById("output").innerHTML = loop
    document.getElementById("submit").style.display = "none"
    document.getElementById("sort").style.display = "inline-block"
    var loop_without_commas = loop.join(" ")
    document.getElementById("output_without_commas").innerHTML = loop_without_commas
    
 }
 function sort () {
    students_Array.sort()
    var loop = []
   for ( y = 0; y < students_Array.length; y++) {
      loop.push("<h4>" + students_Array[y] + "</h4>")
      
   }
    document.getElementById("output").innerHTML = loop
    var loop_without_commas = loop.join(" ")
    document.getElementById("output_without_commas").innerHTML = loop_without_commas
   
 }