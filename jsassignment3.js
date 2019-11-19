
<html>
<body>

<p>Creating a JavaScript Object.</p>

<p id="demo"></p>

<script>

var makeStudent = function(r, nm, yr, courses)
{

var x2 = r.substrissssng(4,8)
if(x2>='0000' && x2<='9999' &&  x2.length==4)
{
alert(x2)
}
else
{
alert("Check rollnumber")
return null
}

if(typeof nm =='string')
{
alert("true")
}
else
{
alert("Check name")
return null
}

var   x1 =yr.charAt(2)
if(x1>='1' && x1<='6')
{}
else
{alert("Give Proper Year")
return null}


  var student = {};
  var r = r;
  var nm = nm;
  var yr = yr;
 
  student.r = r;
  student.nm = nm;
  student.yr = yr;
   
  var courses = ['ICS101', 'ICS102', 'ICS103']
  student.courses = courses;
 
 student.getCourseId =function()
 {
    
     alert(this.courses);
    
 };
 
 student.addCourse = function()
 {
    
    addcourse = prompt('Enter the course you want to add','answer');
    courses.push(addcourse)
     alert(this.courses);
    
 };
 
 student.dropCourse = function()
 {
    
   
    dropcourse = prompt('Enter the course you want to drop','answer');
   
    for(var i = courses.length - 1; i >= 0; i--)
    {
        if(courses[i] === dropcourse)
        {
               courses.splice(i, 1);
        }
     }
     alert(this.courses);
    
 };
 
 student.findCourse = function()
 {
     checkcourse = prompt('Enter the course you want to check','answer');
     for(var i = courses.length - 1; i >= 0; i--)
    {
        if(courses[i] == checkcourse)
       
               {
                alert("Course found.");
                return true;
            }
                   
     }
    alert("Course not found.");
    return false;
 };
 
 return student;
 }
 
var s = makeStudent("20141061", "1", "UG7")




</script>

</body>
