
///kilometer To Meter converter//
function kilometerToMeter(distance){
    var result= distance*1000;///1 kilometer=1000 meter;
    return result;
}
var output= kilometerToMeter(56.7);
console.log(output);


///calculate budget//

function budgetCalculator(watch,phone,laptop){
     var prize1= watch*50;///each watch prized 50 bucks//
     var prize2= phone*100;// each phone prized 100 bucks//
     var prize3= laptop*500;//each laptop prized 500 bucks//
     var totalPrize= prize1+prize2+prize3;
     return totalPrize;
}
var output=budgetCalculator(3,9,4);
console.log("total cost:",output);

//calculate hotell cost//
function hotelCost(days){
    var total;
    if(days<=10){
    var total= days*100;//each day costs 100 bucks//
  
    }
    else if(days<=20){
         var firstPortion=10*100;
        var remaining= days-10;
        var secondPortion= remaining*80;///each day costs 80 bucks//
        var total= firstPortion+secondPortion;
       
    }
    else if(days>20){
        var firstPortion=10*100;
        var  secondPortion= 10*80;
        var remaining2= days-20;
        var thirdPortion= remaining2*50;///each day costs 60 bucks//
        var total=firstPortion+secondPortion+thirdPortion;
        
    }
    return total;
}
var output=hotelCost(67);
console.log(output);
var output=hotelCost(7);
console.log(output);
var output=hotelCost(14);
console.log(output);


/////largest word of an array///
function megaFriend(arr){
    var max=arr[0].length;
    var output=arr[0];
    for(i=0;i<arr.length;i++){
        maxi=arr[i].length;
        if(max<maxi){
            output=arr[i];
            max=maxi;
        }
    }
    return output;
}
var arr=['asif','rakib','nasim','afzal khan'];
var res=megaFriend(arr);
console.log(res);