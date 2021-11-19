
function calcularRenta(salario, tipo){
    console.log(salario,tipo);
    let renta =0;
    //Declaro objeto vacio para capturar el tramo de retencion            
    let tramo={};
    switch(tipo){
        case '7' :            
            //Recorro objeto con retenciones semanales y obtengo el rango
            //correspondiente al salario
            semanal.map(
            function(retencion){
                if(retencion.desde < salario && retencion.hasta >= salario){
                    tramo = retencion;
                }else if(retencion.desde < salario && retencion.hasta == "En adelante"){
                    tramo = retencion;
                }
            }); 
            
            //evaluo si aplica retención
            if(tramo.tramo == "TRAMO I"){
                renta = 0;
            }else{
                const valor1 = salario - tramo.exceso;
                const valor2 = valor1 * parseInt((valor1 * (100- tramo.porcentaje))/100);
                renta = valor2 + tramo.cuota;
            }

            break;
        case '15':
                quincenal.map(
                function(retencion){
                    if(retencion.desde < salario && retencion.hasta >= salario){
                        tramo = retencion;
                    }else if(retencion.desde < salario && retencion.hasta == "En adelante"){
                        tramo = retencion;
                    }
                }); 
                //evaluo si aplica retención
                if(tramo.tramo == "TRAMO I"){
                    renta = 0;
                }else{
                    const valor1 = salario - tramo.exceso;
                    const valor2 = valor1 * parseInt((valor1 * (100- tramo.porcentaje))/100);
                    renta = valor2 + tramo.cuota;
                }
            break;
        case '30':
                mensual.map(
                function(retencion){
                    if(retencion.desde < salario && retencion.hasta >= salario){
                        tramo = retencion;
                    }else if(retencion.desde < salario && retencion.hasta == "En adelante"){
                        tramo = retencion;
                    }
                }); 
                console.log(tramo);
                //evaluo si aplica retención
                if(tramo.tramo == "TRAMO I"){
                    renta = 0;
                }else{
                    const valor1 = salario - tramo.exceso;
                    console.log("valor1 "+valor1);
                    const valor2 = (valor1 *  tramo.porcentaje)/100;
                    console.log("valor2 "+valor2);
                    renta = valor2 + tramo.cuota;
                    console.log("renta "+renta);
                }
            break;
        default:
            renta = 0;
    }
    return renta;
}
function CalcularDescuentos(){
    //valores iniciales
    const salario = document.getElementById("salario").value;
    const tipoSalario = document.getElementById("tipo").value;
    //variables de descuentos
    let isssDescuento = 0;
    let afpDescuento = 0;
    let salarioMenosIsssAfp = 0;
    let totalDescuentos =0;
    let salarioLiquido = 0;

    //Descuento ISS
    if(salario<=1000){
        isssDescuento = (salario * 3)/100;
        const IsssResult = document.getElementById("IsssResult");
        IsssResult.innerText = "$"+ Math.round(isssDescuento,2);
    }else{
        isssDescuento = (1000 * 3)/100;
        const IsssResult = document.getElementById("IsssResult");
        IsssResult.innerText = "$"+isssDescuento;
    }
    
    //Descuento AFP
    if(salario<=5904.77){
        afpDescuento = (salario * 7.25)/100;
        const AfpResult = document.getElementById("AfpResult");
        AfpResult.innerText = "$"+afpDescuento;
    }else{
        afpDescuento = (5904.77 * 7.25)/100;
        const AfpResult = document.getElementById("AfpResult");
        AfpResult.innerText = "$"+afpDescuento;
    }
    

    //Renta Imponible
    const RentaImponibleResult = document.getElementById("RentaImponibleResult");
    salarioMenosIsssAfp = salario - isssDescuento - afpDescuento;
    RentaImponibleResult.innerText = "$"+ (salarioMenosIsssAfp);

    //Renta
    const rentaDescuento = calcularRenta(salarioMenosIsssAfp, tipoSalario);
    // const RentaPorcentajeResult = document.getElementById("RentaPorcentajeResult");
    const RentaResult = document.getElementById("RentaResult");
    RentaResult.innerText = "$"+rentaDescuento;

    //Total descuentos
    const TotalDescuentosResult = document.getElementById("TotalDescuentosResult");
    totalDescuentos = isssDescuento + afpDescuento + rentaDescuento;
    TotalDescuentosResult.innerText = "$"+ totalDescuentos;

    //Salario total
    const SalarioResult = document.getElementById("SalarioResult");
    salarioLiquido = salarioMenosIsssAfp - rentaDescuento;
    SalarioResult.innerText = "$"+ salarioLiquido;
}