alert("¡Bienvenido al Convertidor de Moneda Extranjera!") 
let opcion = prompt("Ingrese alguna de las siguientes opciones:\n1 - Si quiere hacer la conversion de Pesos ARS a Dólares \n2 - Si quiere hacer la conversion de Pesos ARS a Euros \n3 - Si quiere hacer la conversion de Pesos ARS a Reales \n0 - Si desea salir")
while (opcion != "0"){
        switch (opcion){
            case "1":
                let valor1 = parseInt(prompt("Ingrese el monto de Pesos AR$ que desea convertir a USD: "));
                resultado = valor1/285;
                alert("El cambio de Pesos (AR$) a Dólares (USD) es: U$D " + resultado + " dólares.");
                break;
            case "2":
                let valor2 = parseInt(prompt("Ingrese el monto de Pesos AR$ que desea convertir a Euros: "));
                resultado = valor2/294;
                alert("El cambio de Pesos (AR$)a Euros (EUR) es: " + resultado + " euros.");
                break;
            case "3":
                let valor3 = parseInt(prompt("Ingrese el monto de Pesos AR$ que desea convertir a REALES: "));
                resultado = valor3/138.49;
                alert("El cambio de Pesos (AR$)a Euros (EUR) es: " + resultado + " reales.");
                break;
        }
        opcion = prompt("Ingrese alguna de las siguientes opciones:\n1 - Si quiere hacer la conversion de Pesos ARS a Dólares \n2 - Si quiere hacer la conversion de Pesos ARS a Euros \n3 - Si quiere hacer la conversion de Pesos ARS a Reales \n0 - Si desea salir");
}
alert("¡Adiós, vuelva pronto!");