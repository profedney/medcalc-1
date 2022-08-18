function calcSum() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let num3 = document.getElementsByName("num3")[0].value;
    let num4 = document.getElementsByName("num4")[0].value;
    let sum = (Number(num1) + Number(num2) + Number(num3))/3*0.4 + (Number(num4))*0.6;
    document.getElementsByName("sum")[0].value = sum;
    if(sum>=6){
        document.getElementById("passou").innerHTML = 'PASSOU';
        document.getElementById("passou").style.color = "green";
    }else{
        document.getElementById("passou").innerHTML = 'REPROVOU';
        document.getElementById("passou").style.color = "red";
    }
    
}