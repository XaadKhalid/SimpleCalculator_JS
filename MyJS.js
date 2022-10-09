let num1=document.getElementById("num1").innerHTML;
let num2=document.getElementById("num2").innerHTML;
let num3=document.getElementById("num3").innerHTML;
let num4=document.getElementById("num4").innerHTML;
let num5=document.getElementById("num5").innerHTML;
let num6=document.getElementById("num6").innerHTML;
let num7=document.getElementById("num7").innerHTML;
let num8=document.getElementById("num8").innerHTML;
let num9=document.getElementById("num9").innerHTML;
let num0=document.getElementById("num0").innerHTML;
let numdot=document.getElementById("numdot").innerHTML;
let numC=document.getElementById("numC").innerHTML;

let n1=document.getElementById("num1");
let n2=document.getElementById("num2");
let n3=document.getElementById("num3"); 
let n4=document.getElementById("num4");
let n5=document.getElementById("num5");
let n6=document.getElementById("num6");
let n7=document.getElementById("num7");
let n8=document.getElementById("num8");
let n9=document.getElementById("num9");
let n0=document.getElementById("num0");
let ndot=document.getElementById("numdot");
let nC=document.getElementById("numC");

let add=document.getElementById("add");
let min=document.getElementById("min");
let mul=document.getElementById("mul");
let div=document.getElementById("div");
let equal=document.getElementById("equalto");

let tem=[];
let num_arry=[];

n0=n0.addEventListener('click',function() {
    writetxt(num0);
    tem.push(num0);
});
n1=n1.addEventListener('click',function() {
    writetxt(num1);
    tem.push(num1);
});
n2=n2.addEventListener('click',function() {
    writetxt(num2);
    tem.push(num2);
});
n3=n3.addEventListener('click',function() {
    writetxt(num3); 
    tem.push(num3);
});
n4=n4.addEventListener('click',function() {
    writetxt(num4);
    tem.push(num4);
});
n5=n5.addEventListener('click',function() {
    writetxt(num5);
    tem.push(num5);
});
n6=n6.addEventListener('click',function() {
    writetxt(num6);
    tem.push(num6);
});
n7=n7.addEventListener('click',function() {
    writetxt(num7);
    tem.push(num7);
});
n8=n8.addEventListener('click',function() {
    writetxt(num8);
    tem.push(num8);
});
n9=n9.addEventListener('click',function() {
    writetxt(num9);
    tem.push(num9);
});
nC=nC.addEventListener('click',function() {
    writetxt(numC);
    tem=[];
    num_arry=[];
});
ndot=ndot.addEventListener('click',function() {
    writetxt(numdot);
    tem.push(numdot);
});

add=add.addEventListener('click',function() {
    writetxt("+");
    num_arry.push(tem.join(""));
    num_arry.push("+");
    tem=[];
});
min=min.addEventListener('click',function() {
    writetxt("-");
    num_arry.push(tem.join(""));
    num_arry.push("-");
    tem=[];
});
mul=mul.addEventListener('click',function() {
    writetxt("*");
    num_arry.push(tem.join(""));
    num_arry.push("*");
    tem=[];
});
div=div.addEventListener('click',function() {
    writetxt("/");
    num_arry.push(tem.join(""));
    num_arry.push("/");
    tem=[];
});
equal=equal.addEventListener('click',function() {
    num_arry.push(tem.join(""));
    tem=[];
    let ans=eval(num_arry.join(""));
    // for(let i=0; i<num_arry.length; i++){ 
    //     if(num_arry[i]==0)
    //     {
    //         ans += parseInt(num_arry[i]);
    //     } else if(num_arry[i]=="+"){
    //         ans = parseInt(num_arry[i-1]) + parseInt(num_arry[i+1]);
    //         i++;
    //     } else if(num_arry[i]=="-"){
    //         ans = parseInt(num_arry[i-1]) - parseInt(num_arry[i+1]);
    //         i++;
    //     } else if(num_arry[i]=="*"){
    //         ans = parseInt(num_arry[i-1]) * parseInt(num_arry[i+1]);
    //         i++;
    //     } else if(num_arry[i]=="/"){
    //         ans = parseInt(num_arry[i-1]) / parseInt(num_arry[i+1]);
    //         i++;
    //     }
    // }
    document.getElementById("result").innerText=ans;
});

function writetxt(value){
    let tem=document.getElementById("result").innerText;
    if(value==numC)
    {
        document.getElementById("result").innerText="";    
    }else
    document.getElementById("result").innerText=tem+value;
}