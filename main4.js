
window.onload = iniciar;

function iniciar () {
     var btncalCalcular = document.getElementById("btnCalcular");
     btncalCalcular.addEventListener("click", clickBtnCalcular)
}

function clickBtnCalcular(){
    //obtengo valor y guardo
    var txtSuma = document.getElementById("txtSuma");
    var suma = txtSuma.value;

    
    let sum =0;

    for (let i = 0; i <= num; i++){
    total += i;
    }

    
     

    alert(total)
}
