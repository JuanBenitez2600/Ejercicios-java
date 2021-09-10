function calcularSalario(){
    let puesto = parseInt(document.getElementById('puesto').value);
    let horas = parseInt(document.getElementById('horas').value);
    let sueldoHora=0;
    switch(puesto){
        case 1:sueldoHora = 5.110;break;
        case 2:sueldoHora = 3.786;break;
    }
    let sueldoBase=sueldoHora*horas;
    document.getElementById("sueldoBase").innerHTML="<h3>"+sueldoBase+"</h3>";
}