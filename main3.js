function calcular(){
    let Tipo_de_dulce = parseInt(document.getElementById('Tipo_de_dulce').value);
    let Cantidad = parseInt(document.getElementById('Cantidad').value);
    let Valor_dulce=0;
    switch(Tipo_de_dulce){
        case 1:Valor_dulce = 450;break;
        case 2:Valor_dulce = 225;break;
    }
    let Valor_total=Valor_dulce*Cantidad;

    switch(Tipo_de_dulce){
        case 1:Valor_dulce = 450;break;
        case 2:Valor_dulce = 450;break;
    }
    let precio_habitual=Valor_dulce*Cantidad;

    switch(Tipo_de_dulce){
        case 1:Valor_dulce = 0;break;
        case 2:Valor_dulce = 50;break;
    }
    let Valor_total_descuento=Valor_dulce;



    document.getElementById("sueldoBase").innerHTML="<h3>$"+Valor_total+"</h3>";
    document.getElementById("1").innerHTML="<h3>$"+precio_habitual+"</h3>";
    document.getElementById("2").innerHTML="<h3>"+Valor_total_descuento+"%</h3>";
}
