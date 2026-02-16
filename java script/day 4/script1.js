var a="Assignment: generate evenNumbers and oddNumbers arrays by using the loops";
console.log(a);
var even=[];
var odd=[];
var n=[];
for(let i=0;i<=50;i++){
    if(i%2===0){
        even.push(i);
    }else{
        odd.push(i);
    }
}
console.log("Even Numbers ",even);
console.log("Odd Numbers ",odd);