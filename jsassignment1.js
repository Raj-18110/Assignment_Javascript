 
//<----------------------------------------------Problem-1------------------------------------------------->
function fifthday()

{


var days=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var dt =  new Date();
 //document.write(days[dt.getDay()])
var dt1=(dt.getDay()+5)%7;

document.write(days[dt1]);
 
 }
 
 
 
 //<---------------------------------------Problem-2--------------------------------------------------------->
 
 function  altSpaceToUnderscore()
 {
 
      var str,i,count=0;
            
            str = prompt("Enter string");
            
            
        var arr = new Array(str.length)
        
        for(i=0;i<str.length;i++)
        {
            
            arr[i]=str[i];
            
            if(arr[i]==' ' && i!=0 && i!=str.length-1)
            {
                count++;
        if(count%2==0)
        {
            
            
            arr[i]='_';
        }
                
                
                
            }
            
               }
               
               
        str = arr.join('')
        
        document.write(str);
    }    
 
//<----------------------------------------------------Problem-3------------------------------------------>


  function interestingsort()    
  {    
      var str = prompt("enter string ");
        
        var n =(str.length);
        
    var i
    var arr = new Array()
    var arr1 =new Array() 
    var arr2 =new Array()
    
    for(i=0;i<n;i++)
    {
       // if(str[i]>='a' && str[i]<='m')
        {
        arr[i]=str[i];
        }
      //
      /*  else
        {
            
            arr1[i]=str[i];
        }
        */
    }
    
    arr1=arr.filter(filtertest);
    arr2=arr.filter(filtertest1);
    
    
    
    
    arr1.sort()

    var str1 = arr1.join('');
    var str2 = arr2.join('');
    
    str1=str1.concat(str2);
    
    document.write(str1);
    
  //  document.write(arr);
    
  }
  
  function filtertest(str4)
  {
      
      
      if(str4>='a'&& str4<='m')
      {
          
          return str4;
      }
      
      
  }
  
  function filtertest1(str5)
  {
      
     if(str5>'m' && str5<='z')
     {
         
         return str5;
     }
      
}
         
		




//<-------------------------------------------------------problem-4--------------------------------------------------------------------------------->


    function getMeNextFirst()
	{
          var str = prompt("Enter string")
          
          var i,j=0;
          var n =str.length
          var arr =new Array(str.length)
          var arr1 = new Array()
          for(i=0;i<n;i++)
          {
              
              arr[i]=str[i];
              
              if(arr[i]==' ' && i!=n-1)
              {
                  arr1[j]=i;
                  j++;
              }
        }
        
     //   alert(arr);
        var temp;
        
        //alert(arr1.length)
        
        for(i=0;i<arr1.length;i++)
        {
            
              temp=arr[arr1[i]]
               arr[arr1[i]]=arr[arr1[i]+1]
               arr[arr1[i]+1]=temp;
               
         //  document.write(i);
            
                
            }
            
           
        
        
        
        str = arr.join('')
        
        document.write(str)		
		 
		 
		 
	} 
		 
     
     
