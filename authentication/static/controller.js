//document.write("8");
var app=angular.module("snlApp",[]);
app.run(function($rootScope)
	//$rootScope.board={};
	{
	$rootScope.ladders=[{"start":5,
                    "end":26},
                    {
                    	"start":13,
                    	"end":39},
                    	{
                    		"start":18,
                    		"end":39},
                    		{
                              "start":48,
                              "end":72},
                              {
                              	"start":60,
                              	"end":82},
                              	{
                              		"start":65,
                              		"end":95
                              }
                           ];
$rootScope.snakes=[{"start":23,
                    "end":7},
                    {
                    	"start":33,
                    	"end":9},
                    	{
                    		"start":44,
                    		"end":13},
                    		{
                              "start":68,
                              "end":25},
                              {
                              	"start":77,
                              	"end":41},
                              	{
                              		"start":97,
                              		"end":66
                              },
                              {
                              	"start":94,
                              	"end":70
                              }
                           ];
     $rootScope.yourcurrentpos=0;
     $rootScope.compcurrentpos=0;             
	 $rootScope.x=0;
	$rootScope.y=3;
  $rootScope.c=3;
  $rootScope.d=0;	
  });

app.controller("BtnCtrl",function($rootScope,$scope)
{
	$scope.rolldice=function()
	{
		if($rootScope.compcurrentpos!=100&&$rootScope.yourcurrentpos!=100)
		{
		$scope.yourDice=Math.floor(Math.random() * 6) + 1;
		if($rootScope.yourcurrentpos==95&&$scope.yourDice>5);
		else if($rootScope.yourcurrentpos==96&&$scope.yourDice>4);
		else if($rootScope.yourcurrentpos==97&&$scope.yourDice>3);
		else if($rootScope.yourcurrentpos==98&&$scope.yourDice>2);
		else if($rootScope.yourcurrentpos==99&&$scope.yourDice>1);
         else
         {
		$rootScope.yourcurrentpos=$rootScope.yourcurrentpos+$scope.yourDice;
		}
	   }

   if($rootScope.yourcurrentpos!=100&&$rootScope.compcurrentpos!=100)
   {
   	    $scope.computerDice=Math.floor(Math.random() * 6) + 1;		
		if($rootScope.yourcurrentpos==95&&$scope.computerDice>5);
		else if($rootScope.compcurrentpos==96&&$scope.computerDice>4);
		else if($rootScope.compcurrentpos==97&&$scope.computerDice>3);
		else if($rootScope.compcurrentpos==98&&$scope.computerDice>2);
		else if($rootScope.compcurrentpos==99&&$scope.computerDice>1);
         else
         {
		 $rootScope.compcurrentpos=$rootScope.compcurrentpos+$scope.computerDice;
		}		
	}	
  


for(var i=0;i<$rootScope.ladders.length;i++)
		{
          if($rootScope.yourcurrentpos==$rootScope.ladders[i].start)
           {
           	$rootScope.yourcurrentpos=$rootScope.ladders[i].end;
             console.log("break");
             break;
           }
		  if($rootScope.compcurrentpos==$rootScope.snakes[i].start)
           {
           	$rootScope.compcurrentpos=$rootScope.snakes[i].end;
            console.log("break");
           break;
            }
		}

for(var i=0;i<$rootScope.ladders.length;i++)
		{
          if($rootScope.compcurrentpos==$rootScope.ladders[i].start)
           {
           	$rootScope.compcurrentpos=$rootScope.ladders[i].end;
             console.log("break");
            break;
           }
           if($rootScope.yourcurrentpos==$rootScope.snakes[i].start)
           {
           	$rootScope.yourcurrentpos=$rootScope.snakes[i].end;
             console.log("break");
            break;
           }
   }

if(($rootScope.yourcurrentpos%10)!=0)
{
  $rootScope.y=(Math.floor(($rootScope.yourcurrentpos)/10)*10)+3.5;
}
else
{
  $rootScope.y=(((Math.floor(($rootScope.yourcurrentpos)/10))-1)*10)+3.5;
}
//console.log($rootScope.y);

if(($rootScope.yourcurrentpos%10)!=0)
{
 console.log(Math.floor(($rootScope.yourcurrentpos)/10));
  if(((Math.floor(($rootScope.yourcurrentpos)/10))==0) || (((Math.floor(($rootScope.yourcurrentpos)/10)%2)==0)))
   {
   // console.log("even");
     $rootScope.x=((($rootScope.yourcurrentpos)%10)-1)*10;
   }
   else
   {
    //console.log("odd");
    $rootScope.x=90-(((($rootScope.yourcurrentpos)%10)-1)*10);
   }
}
else
{
if(((($rootScope.yourcurrentpos)/10)%2)==0)
{
  $rootScope.x=0;
}
else
{
  $rootScope.x=90;
}
}


if(($rootScope.compcurrentpos%10)!=0)
{
  $rootScope.c=(Math.floor(($rootScope.compcurrentpos)/10)*10)+3.5;
}
else
{
  $rootScope.c=(((Math.floor(($rootScope.compcurrentpos)/10))-1)*10)+3.5;
}
//console.log($rootScope.y);

if(($rootScope.compcurrentpos%10)!=0)
{
 console.log(Math.floor(($rootScope.compcurrentpos)/10));
  if(((Math.floor(($rootScope.compcurrentpos)/10))==0) || (((Math.floor(($rootScope.compcurrentpos)/10)%2)==0)))
   {
   // console.log("even");
     $rootScope.d=((($rootScope.compcurrentpos)%10)-1)*10;
   }
   else
   {
    //console.log("odd");
    $rootScope.d=90-(((($rootScope.compcurrentpos)%10)-1)*10);
   }
}
else
{
if(((($rootScope.compcurrentpos)/10)%2)==0)
{
  $rootScope.d=0;
}
else
{
  $rootScope.d=90;
}
}
  
//var score=1;

/*function makerequest(){
  console.log("ads");   
  $.ajax({
     url:'/save/',
     data: { 'score':score},
     dataType: 'json',
     //success:function(data){
    //alert("djdhr");

      });
  }*/




var score=1;
function makerequest(){
  console.log("ads");   
  $.ajax({
     type:'GET',
     url:'/save/',
     data: { 'score':score},
     dataType: 'json',
     //success:function(data){
    //alert("djdhr");

      });
  }
if($rootScope.yourcurrentpos==100){
makerequest();    
}

}      
});

//}

//console.log($rootScope.x);
/* if((($rootScope.yourcurrentpos)%10)!=0)
{
	$rootScope.y=((($rootScope.yourcurrentpos)/10)*10);
	if((((($rootScope.yourCurrentpos)/10)%2)==0) || ((($rootScope.yourcurrentpos)/10)==0))
	{
    $rootScope.x=(((($rootScope.yourcurrentpos)%10)-1)*10);
	}
    else if((((($rootScope.yourcurrentpos)/10)%2)!=0))
    {
    $rootScope.x=(90-((((($rootScope.yourcurrentpos)%10)-1))*10));
    }
}
else 
{
	$rootScope.y=(((($rootScope.yourcurrentpos)/10)-1)*10);
	if(((($rootScope.yourcurrentpos)/10)%2)==0)
	{
		$rootScope.x=90;
	}
	else
	{
		$rootScope.x=0;
	}
} */   


