

//<--------------------------------------------------problem1----------------------------------------------->



function add1(x)
      {
          return x+1;
      }
      
      function mul1(x)
      {
          
          return x*2
      }
      
      function composite(a,b)
      {
          return function(value)
          {
          
          return a(b(value))
          }
      }
      
      
      var c = composite(mul1,add1)(2);
      
      document.write(c);
	  
	  
	  
//<--------------------------------------------problem-2------------------------------------------------->


var i
function add1(x)
{
return x+1;
}

function mul1(x)
{
return x*2;
}

function nthpowerfunction(a,b)
{

return function(value)
{
for(i=0;i<b-1;i++)
{
//alert("entered")
value=a(value);

}
return a(value);
}
}

var p = nthpowerfunction(mul1,10)(1);

alert(p)



//<------------------------------------problem-3--------------------------------------------------------->	  





function average(value1) {

var sum=0;
 for (i=0; i<value1.length; i++)
  {
  
  sum=sum+value1[i];
  
    //alert(value1[i])
  }
  
  alert(sum/value1.length)
  
}


//<-------------------------------------problem-4----------------------------------------------------->


function average(value1,x) {

var sum=0,count=0;
//alert(count)
 for (i=0; i<value1.length; i++)
  {
  
  if(value1[i]>=x)
  {
   
   count++

  sum=sum+value1[i];
  }
    
  }
  
  alert(sum/count)
  
}


//<----------------------------------problem-5-------------------------------------------------------->



function average(value1,x) {

var sum=0,count=0;
//alert(count)
 for (i=0; i<value1.length; i++)
  {
  
  if(value1[i]>=x)
  {
   
   count++
   }
    
}
  
  alert(count)
  
}






//<------------------------------------problem-6------------------------------------------------------->

function average(value1,x) {

var sum=0,count=0;
//alert(count)
for(j=0;j<x.length;j++)
{
count=0;
 for (i=0; i<value1.length; i++)
  {
  
  if(value1[i]>=x[j])
  {
   
   count++
   }
    
}
alert(count)
 } 
 // alert(count)
  
}







//<---------------------------------problem-7---------------------------------------------->


var x=0;


function myfunc()
{


x++;

return x;
}
var i;

for(i=0;i<10;i++)
var p = myfunc();

document.write(p);




//<------------------------------------problem-8---------------------------------->



function add1(x)
      {
          return x+1;
      }
      
      function mul1(x)
      {
          
          return x*2
      }
      
      function composite(a)
      {
          return function(value)
          {
         var i 
         alert(a.length)
         for(i=a.length-1;i>=0;i--)
         {
         if(a[i]==add1 || a[i]==mul1)
         {
        value = a[i](value)
         }
         }
         return value
          }
      }
      
	  
	  
	  



