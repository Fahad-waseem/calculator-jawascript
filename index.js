function  getNumber(num){
    var result =document.getElementById("result");

result.value +=num
}
function clearNumber(clr){
    var result = document.getElementById("result");
    result.value= "0"
}
function getResult (){
    var result = document.getElementById("result");
result.value = eval(result.value);
}