var app = angular.module('calculator', []);




app.controller('calc',['$scope','$http',function($scope,$http){

/*THIS WAS USING JSON FILE
 $scope.calculate=function () {


            $http.get('/contactlist').success(function (res) {
                console.log("i recievd d data");
                $scope.upper=function () {
                    $scope.s.name=$scope.s.name.toUpperCase();

                }
                //console.log($scope.s.name);
                //console.log(res[1].Symbol);
          var flag=0;
           for(var i=0;i<res.length;i++)
                {


                if(res[i].Symbol==$scope.s.name){


                    //JSON.parse(res[i]);
                    $scope.s.open=parseFloat(res[i].Open.replace(",", ""));
                    $scope.s.high =parseFloat(res[i].High.replace(",", ""));
                    $scope.s.low = parseFloat(res[i].Low.replace(",", ""));
                    $scope.s.close = parseFloat(res[i]["Last Traded Price"].replace(",", ""));
                   $scope.s.hl=$scope.s.high-$scope.s.low;
                  //   console.log(parseFloat(res[i].High.replace(",", "")));
                   // console.log(typeof($scope.s.high));
                    flag=1;
                    break;
             }
                }
                if(flag!=1)
                    $scope.s={};
            });
        };
*/

$scope.calcu=function(){
        console.log($scope.s.name);
  $scope.upper=function () {
                    $scope.s.name=$scope.s.name.toUpperCase();

                }
        

   $http.post('SC.php',$scope.s).success(function(res){
   	console.log("i wrked till here");
 console.log(res);

$scope.s.open=parseFloat(res.open.replace(",", ""));
$scope.s.high=parseFloat(res.high.replace(",", ""));
$scope.s.low=parseFloat(res.low.replace(",", ""));
$scope.s.close=parseFloat(res.close.replace(",", ""));
$scope.s.hl=$scope.s.high-$scope.s.low;



html2canvas($(".container"), {
        onrendered: function (canvas) {
       var IMG=canvas.toDataURL();
           // document.body.appendChild(canvas);
        var a  = document.createElement('a');
    a.href = IMG;
    a.download = $scope.s.name+'.png';

    a.click();


        },
        width:1300,
        height:400
    });



}).error(function(){
			//header("HTTP/1.0 404 Not Found");
	         //exit;
});  
};
}]);