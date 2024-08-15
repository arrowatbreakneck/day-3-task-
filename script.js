// day 3 task -1;
var obj1 = {name:"pesrson1",age:5};
var obj2 = {age:5,name:"person2"};
 
strobj1 = JSON.stringify(obj1);
strobj2 = JSON.stringify(obj2);

if(strobj1 == strobj2){
    console.log("the given json objects are equal ");

} else {
    console.log("they are not equal");
}

// day 3 task -2 

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    for(var i=0;i<res.length;i++){
        console.log(res[i].flags.png);
    }
}

// day 3 task -3 

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
    var getRes = JSON.parse(request.response);
    for(var i = 0;i<getRes.length;i++){
        console.log(getRes[i].name.common,getRes[i].region,getRes[i].subregion,getRes[i].population);
    }
}


