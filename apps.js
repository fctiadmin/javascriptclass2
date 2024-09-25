// var x=10;
// x=20;
// const x=20;
// x =500;
// let x=60;
// x=80;
// var x=20;
// var y=2;
// var result=x/y;
// var x=['Rana','Kamal']
// console.log(x[1]);

// var x,y;
// function plusMinus(x,y,z){
//     var result=x+y+z;
//     return result;
// }

// console.log(plusMinus(10,50,70))
// function change(){
//     var button=document.getElementById('change');
//     button.style.color="red";
//     button.style.border="1px solid red";
//     window.alert('I am red man')
// }



// logic section start
// var mark=80;
// if(mark<33){
//     console.log('fail');
// }else{
//    console.log('Pass');
// }

// logic with result sheet
var bangla=parseInt(prompt("Bangla:"));
var english=Number(prompt("English:"));
var math=Number(prompt("Math:"));
var obtainMark=bangla+english+math;

if(bangla<33 || english<33 || math<33){
    console.log('F');
}
// 80*3=240(A+)
else if(obtainMark>=240){
    console.log('A+');
}
else if(obtainMark>=210){
    console.log('A');
}
else if(obtainMark>=180){
    console.log('A-');
}
else if(obtainMark>=150){
    console.log('B');
}
else if(obtainMark>=120){
    console.log('C');
}
else if(obtainMark>=99){
    console.log('D');
}