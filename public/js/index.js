
window.addEventListener('load',function(){
    var numAl;
    var cantidadNumeros=75;
    var usados = [], usados2
    var numInicial=1, numFinal=75, contador=1;

    //Generar Aleatorios y validar que no se repitan
    btnBalotas.addEventListener('click',function(){
 
        numAl=Math.round(Math.random()*(numInicial-numFinal)+numFinal)
        var existe = false;

        for(var i=0;i<usados.length;i++){
            if(usados [i] == numAl){
                existe = true;
            }
        }
        if(!existe){
            usados[usados.length] = numAl;
            generarBalotas.value=numAl;
            console.log(usados)
        } 



        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> ${numero} </td>`
            console.log(numero)
            console.log(usados2)
        } 




    });


    //Mensaje al hacer click en los botones
    btnNumero1.addEventListener('click',function(){alert("Número B1"),btnNumero1.style.backgroundColor= "red";})
    btnNumero2.addEventListener('click',function(){alert("Número B2"),btnNumero2.style.backgroundColor= "red";})
    btnNumero3.addEventListener('click',function(){alert("Número B3"),btnNumero3.style.backgroundColor= "red";})
    btnNumero4.addEventListener('click',function(){alert("Número B4"),btnNumero4.style.backgroundColor= "red";})
    btnNumero5.addEventListener('click',function(){alert("Número B5"),btnNumero5.style.backgroundColor= "red";})
    btnNumero6.addEventListener('click',function(){alert("Número B6"),btnNumero6.style.backgroundColor= "red";})
    btnNumero7.addEventListener('click',function(){alert("Número B7"),btnNumero7.style.backgroundColor= "red";})
    btnNumero8.addEventListener('click',function(){alert("Número B8"),btnNumero8.style.backgroundColor= "red";})
    btnNumero9.addEventListener('click',function(){alert("Número B9"),btnNumero9.style.backgroundColor= "red";})
    btnNumero10.addEventListener('click',function(){alert("Número B10"),btnNumero10.style.backgroundColor= "red";})
    btnNumero11.addEventListener('click',function(){alert("Número B11"),btnNumero11.style.backgroundColor= "red";})
    btnNumero12.addEventListener('click',function(){alert("Número B12"),btnNumero12.style.backgroundColor= "red";})
    btnNumero13.addEventListener('click',function(){alert("Número B13"),btnNumero13.style.backgroundColor= "red";})
    btnNumero14.addEventListener('click',function(){alert("Número B14"),btnNumero14.style.backgroundColor= "red";})
    btnNumero15.addEventListener('click',function(){alert("Número B15"),btnNumero15.style.backgroundColor= "red";})
    btnNumero16.addEventListener('click',function(){alert("Número I16"),btnNumero16.style.backgroundColor= "red";})
    btnNumero17.addEventListener('click',function(){alert("Número I17"),btnNumero17.style.backgroundColor= "red";})
    btnNumero18.addEventListener('click',function(){alert("Número I18"),btnNumero18.style.backgroundColor= "red";})
    btnNumero19.addEventListener('click',function(){alert("Número I19"),btnNumero19.style.backgroundColor= "red";})
    btnNumero20.addEventListener('click',function(){alert("Número I20"),btnNumero20.style.backgroundColor= "red";})
    btnNumero21.addEventListener('click',function(){alert("Número I21"),btnNumero21.style.backgroundColor= "red";})
    btnNumero22.addEventListener('click',function(){alert("Número I22"),btnNumero22.style.backgroundColor= "red";})
    btnNumero23.addEventListener('click',function(){alert("Número I23"),btnNumero23.style.backgroundColor= "red";})
    btnNumero24.addEventListener('click',function(){alert("Número I24"),btnNumero24.style.backgroundColor= "red";})
    btnNumero25.addEventListener('click',function(){alert("Número I25"),btnNumero25.style.backgroundColor= "red";})
    btnNumero26.addEventListener('click',function(){alert("Número I26"),btnNumero26.style.backgroundColor= "red";})
    btnNumero27.addEventListener('click',function(){alert("Número I27"),btnNumero27.style.backgroundColor= "red";})
    btnNumero28.addEventListener('click',function(){alert("Numero I28"),btnNumero28.style.backgroundColor= "red";})
    btnNumero29.addEventListener('click',function(){alert("Número I29"),btnNumero29.style.backgroundColor= "red";})
    btnNumero30.addEventListener('click',function(){alert("Número N30"),btnNumero30.style.backgroundColor= "red";})
    btnNumero31.addEventListener('click',function(){alert("Número N31"),btnNumero31.style.backgroundColor= "red";})
    btnNumero32.addEventListener('click',function(){alert("Número N32"),btnNumero32.style.backgroundColor= "red";})
    btnNumero33.addEventListener('click',function(){alert("Número N33"),btnNumero33.style.backgroundColor= "red";})
    btnNumero34.addEventListener('click',function(){alert("Número N34"),btnNumero34.style.backgroundColor= "red";})
    btnNumero35.addEventListener('click',function(){alert("Número N35"),btnNumero35.style.backgroundColor= "red";})
    btnNumero36.addEventListener('click',function(){alert("Número N36"),btnNumero36.style.backgroundColor= "red";})
    btnNumero37.addEventListener('click',function(){alert("Número N37"),btnNumero37.style.backgroundColor= "red";})
    btnNumero38.addEventListener('click',function(){alert("Número N38"),btnNumero38.style.backgroundColor= "red";})
    btnNumero39.addEventListener('click',function(){alert("Número N39"),btnNumero39.style.backgroundColor= "red";})
    btnNumero40.addEventListener('click',function(){alert("Número N40"),btnNumero40.style.backgroundColor= "red";})
    btnNumero41.addEventListener('click',function(){alert("Número N41"),btnNumero41.style.backgroundColor= "red";})
    btnNumero42.addEventListener('click',function(){alert("Número N42"),btnNumero42.style.backgroundColor= "red";})
    btnNumero43.addEventListener('click',function(){alert("Número N43"),btnNumero43.style.backgroundColor= "red";})
    btnNumero44.addEventListener('click',function(){alert("Número N44"),btnNumero44.style.backgroundColor= "red";})
    btnNumero45.addEventListener('click',function(){alert("Número N45"),btnNumero45.style.backgroundColor= "red";})
    btnNumero46.addEventListener('click',function(){alert("Número G46"),btnNumero46.style.backgroundColor= "red";})
    btnNumero47.addEventListener('click',function(){alert("Número G47"),btnNumero47.style.backgroundColor= "red";})
    btnNumero48.addEventListener('click',function(){alert("Número G48"),btnNumero48.style.backgroundColor= "red";})
    btnNumero49.addEventListener('click',function(){alert("Número G49"),btnNumero49.style.backgroundColor= "red";})
    btnNumero50.addEventListener('click',function(){alert("Número G50"),btnNumero50.style.backgroundColor= "red";})
    btnNumero51.addEventListener('click',function(){alert("Número G51"),btnNumero51.style.backgroundColor= "red";})
    btnNumero52.addEventListener('click',function(){alert("Número G52"),btnNumero52.style.backgroundColor= "red";})
    btnNumero53.addEventListener('click',function(){alert("Número G53"),btnNumero53.style.backgroundColor= "red";})
    btnNumero54.addEventListener('click',function(){alert("Número G54"),btnNumero54.style.backgroundColor= "red";})
    btnNumero55.addEventListener('click',function(){alert("Número G55"),btnNumero55.style.backgroundColor= "red";})
    btnNumero56.addEventListener('click',function(){alert("Número G56"),btnNumero56.style.backgroundColor= "red";})
    btnNumero57.addEventListener('click',function(){alert("Número G57"),btnNumero57.style.backgroundColor= "red";})
    btnNumero58.addEventListener('click',function(){alert("Número G58"),btnNumero58.style.backgroundColor= "red";})
    btnNumero59.addEventListener('click',function(){alert("Número G59"),btnNumero59.style.backgroundColor= "red";})
    btnNumero60.addEventListener('click',function(){alert("Número G60"),btnNumero60.style.backgroundColor= "red";})
    btnNumero61.addEventListener('click',function(){alert("Número O61"),btnNumero61.style.backgroundColor= "red";})
    btnNumero62.addEventListener('click',function(){alert("Número O62"),btnNumero62.style.backgroundColor= "red";})
    btnNumero63.addEventListener('click',function(){alert("Número O63"),btnNumero63.style.backgroundColor= "red";})
    btnNumero64.addEventListener('click',function(){alert("Número O64"),btnNumero64.style.backgroundColor= "red";})
    btnNumero65.addEventListener('click',function(){alert("Número O65"),btnNumero65.style.backgroundColor= "red";})
    btnNumero66.addEventListener('click',function(){alert("Número O66"),btnNumero66.style.backgroundColor= "red";})
    btnNumero67.addEventListener('click',function(){alert("Número O67"),btnNumero67.style.backgroundColor= "red";})
    btnNumero68.addEventListener('click',function(){alert("Número O68"),btnNumero68.style.backgroundColor= "red";})
    btnNumero69.addEventListener('click',function(){alert("Número O69"),btnNumero69.style.backgroundColor= "red";})
    btnNumero70.addEventListener('click',function(){alert("Número O70"),btnNumero70.style.backgroundColor= "red";})
    btnNumero71.addEventListener('click',function(){alert("Número O71"),btnNumero71.style.backgroundColor= "red";})
    btnNumero72.addEventListener('click',function(){alert("Número O72"),btnNumero72.style.backgroundColor= "red";})
    btnNumero73.addEventListener('click',function(){alert("Número O73"),btnNumero73.style.backgroundColor= "red";})
    btnNumero74.addEventListener('click',function(){alert("Número O74"),btnNumero74.style.backgroundColor= "red";})
    btnNumero75.addEventListener('click',function(){alert("Número O75"),btnNumero75.style.backgroundColor= "red";})

    btnTabla1.addEventListener('click',function(){
        //Rangos B
        numInicialB=1;
        numFinalB=15;

        //Rangos I
        numInicialI=16;
        numFinalI=30;

        //Rangos N
        numInicialN=31;
        numFinalN=45;

        //Rangos G
        numInicialG=46;
        numFinalG=60;

        //Rangos O
        numInicialO=61;
        numFinalO=75;

        arrB=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        arrI=[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arrN=[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
        arrG=[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
        arrO=[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

        let htmlGenerado="<table border=1 id='tabla1' class='tabla1'>"
        htmlGenerado+="<thead>"
        htmlGenerado+="<tr><th colspan='5'>GRAN BINGO</th></tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<th>B</th>"
        htmlGenerado+="<th>I</th>"
        htmlGenerado+="<th>N</th>"
        htmlGenerado+="<th>G</th>"
        htmlGenerado+="<th>O</th>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</thead>"

        htmlGenerado+="<tr>"
        
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB1F1'> ${numero} </button></td>`
            
            console.log(numero)
            console.log(usados2)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI1F1'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN1F1'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG1F1'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO1F1'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //fila 2
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB1F2'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI1F2'> ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN1F2'>${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG1F2'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO1F2'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"


        //FILA 3
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB1F3'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI1F3'> ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        htmlGenerado+=`<td>   X </td>`
        

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG1F3'>${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO1F3'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 4

        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB1F4'>${numero} </button></td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI1F4'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN1F4'>${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG1F4'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO1F4'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 5
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td>  <button id='btnO1F5'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td>  <button id='btnI1F5'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td>  <button id='btnN1F5'>${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG1F5'> ${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO1F5'>${numeroO} </button></td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<td colspan=5>¡GANÉ! </td>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</table>"
        tabla1.innerHTML=htmlGenerado;        
    })

    //Tabla2

    btnTabla2.addEventListener('click',function(){
        //Rangos B
        numInicialB=1;
        numFinalB=15;

        //Rangos I
        numInicialI=16;
        numFinalI=30;

        //Rangos N
        numInicialN=31;
        numFinalN=45;

        //Rangos G
        numInicialG=46;
        numFinalG=60;

        //Rangos O
        numInicialO=61;
        numFinalO=75;

        arrB=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        arrI=[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arrN=[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
        arrG=[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
        arrO=[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

        let htmlGenerado="<table border=1 id='tabla2' class='tabla2'>"
        htmlGenerado+="<thead>"
        htmlGenerado+="<tr><th colspan='5'>GRAN BINGO</th></tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<th>B</th>"
        htmlGenerado+="<th>I</th>"
        htmlGenerado+="<th>N</th>"
        htmlGenerado+="<th>G</th>"
        htmlGenerado+="<th>O</th>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</thead>"

        htmlGenerado+="<tr>"
        
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB2F1'> ${numero}</button> </td>`
            console.log(numero)
            console.log(usados2)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI2F1'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN2F1'>${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG2F1'>${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO2F1'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //fila 2
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td>  <button id='btnB2F2'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td>  <button id='btnI2F2'>${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN2F2'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td>  <button id='btnG2F2'>${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO2F2'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"


        //FILA 3
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB2F3'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI2F3'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        
        htmlGenerado+=`<td> X </td>`
        console.log(numeroN)
        
        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG2F3'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO2F3'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 4

        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB2F4'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI2F4'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN2F4'>${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG2F4'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO2F4'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 5
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB2F5'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI2F5'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN2F5'>${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG2F5'> ${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO2F5'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"
        tabla2.innerHTML=htmlGenerado;
    })

    //Tabla3
    btnTabla3.addEventListener('click',function(){
        //Rangos B
        numInicialB=1;
        numFinalB=15;

        //Rangos I
        numInicialI=16;
        numFinalI=30;

        //Rangos N
        numInicialN=31;
        numFinalN=45;

        //Rangos G
        numInicialG=46;
        numFinalG=60;

        //Rangos O
        numInicialO=61;
        numFinalO=75;

        arrB=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        arrI=[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arrN=[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
        arrG=[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
        arrO=[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

        let htmlGenerado="<table border=1 id='tabla3' class='tabla3'>"
        htmlGenerado+="<thead>"
        htmlGenerado+="<tr><th colspan='5'>GRAN BINGO</th></tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<th>B</th>"
        htmlGenerado+="<th>I</th>"
        htmlGenerado+="<th>N</th>"
        htmlGenerado+="<th>G</th>"
        htmlGenerado+="<th>O</th>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</thead>"

        htmlGenerado+="<tr>"
        
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB3F1'> ${numero}</button> </td>`
            console.log(numero)
            console.log(usados2)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI3F1'>${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN3F1'>${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG3F1'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO3F1'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //fila 2
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB3F2'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI3F2'>${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN3F2'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG3F2'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO3F2'> ${numeroO} </button></td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"


        //FILA 3
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB3F3'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI3F3'>${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        
        htmlGenerado+=`<td>X</td>`
        

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG3F3'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO3F3'>${numeroO} </button></td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 4

        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB3F4'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI3F4'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN3F4'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG3F4'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO3F4'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 5
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB3F5'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI3F5'>${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN3F5'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG3F5'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO3F5'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"
        tabla3.innerHTML=htmlGenerado;
    })

    btnTabla4.addEventListener('click',function(){
        //Rangos B
        numInicialB=1;
        numFinalB=15;

        //Rangos I
        numInicialI=16;
        numFinalI=30;

        //Rangos N
        numInicialN=31;
        numFinalN=45;

        //Rangos G
        numInicialG=46;
        numFinalG=60;

        //Rangos O
        numInicialO=61;
        numFinalO=75;

        let htmlGenerado="<table border=1 id='tabla4' class='tabla4'>"
        htmlGenerado+="<thead>"
        htmlGenerado+="<tr><th colspan='5'>GRAN BINGO</th></tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<th>B</th>"
        htmlGenerado+="<th>I</th>"
        htmlGenerado+="<th>N</th>"
        htmlGenerado+="<th>G</th>"
        htmlGenerado+="<th>O</th>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</thead>"

        htmlGenerado+="<tr>"
        
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB4F1'>${numero}</button> </td>`
            console.log(numero)
            console.log(usados2)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI4F1'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN4F1'>${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG4F1'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO4F1'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //fila 2
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB4F2'> ${numero} </button></td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI4F2'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN4F2'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG4F2'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO4F2'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"


        //FILA 3
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB4F3'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI4F3'> ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        
        htmlGenerado+=`<td> X </td>`
        
        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG4F3'> ${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO4F3'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 4

        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB4F4'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI4F4'>  ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN4F4'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG4F4'>  ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO4F4'> ${numeroO} </button></td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 5
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB4F5'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI4F5'>  ${numeroI}</button>  </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN4F5'>  ${numeroN}</button>  </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG4F5'>  ${numeroG}</button>  </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO4F5'> ${numeroO}</button>  </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"
        tabla4.innerHTML=htmlGenerado;
    })


    btnTabla5.addEventListener('click',function(){
        //Rangos B
        numInicialB=1;
        numFinalB=15;

        //Rangos I
        numInicialI=16;
        numFinalI=30;

        //Rangos N
        numInicialN=31;
        numFinalN=45;

        //Rangos G
        numInicialG=46;
        numFinalG=60;

        //Rangos O
        numInicialO=61;
        numFinalO=75;

        arrB=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        arrI=[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arrN=[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
        arrG=[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
        arrO=[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

        let htmlGenerado="<table border=1 id='tabla4' class='tabla4'>"
        htmlGenerado+="<thead>"
        htmlGenerado+="<tr><th colspan='5'>GRAN BINGO</th></tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<th>B</th>"
        htmlGenerado+="<th>I</th>"
        htmlGenerado+="<th>N</th>"
        htmlGenerado+="<th>G</th>"
        htmlGenerado+="<th>O</th>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</thead>"

        htmlGenerado+="<tr>"
        
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB5F1'> ${numero}</button> </td>`
            console.log(numero)
            console.log(usados2)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI5F1'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN5F1'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG5F1'>${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO5F1'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //fila 2
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB5F2'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI5F2'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN5F2'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG5F2'>${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO5F2'>  ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"


        //FILA 3
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnOBF3'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI5F3'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        
        htmlGenerado+=`<td> X </td>`
        

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG5F3'>  ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO5F3'>  ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 4

        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB5F4'> ${numero} </button></td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI5F4'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN5F4'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG5F4'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO5F4'>  ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 5
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB5F5'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI5F5'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN5F5'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG5F5'>  ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO5F5'>  ${numeroO} </button></td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"
        tabla5.innerHTML=htmlGenerado;
    })

    //Tabla 6
    btnTabla6.addEventListener('click',function(){
        //Rangos B
        numInicialB=1;
        numFinalB=15;

        //Rangos I
        numInicialI=16;
        numFinalI=30;

        //Rangos N
        numInicialN=31;
        numFinalN=45;

        //Rangos G
        numInicialG=46;
        numFinalG=60;

        //Rangos O
        numInicialO=61;
        numFinalO=75;

        let htmlGenerado="<table border=1 id='tabla4' class='tabla4'>"
        htmlGenerado+="<thead>"
        htmlGenerado+="<tr><th colspan='5'>GRAN BINGO</th></tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<th>B</th>"
        htmlGenerado+="<th>I</th>"
        htmlGenerado+="<th>N</th>"
        htmlGenerado+="<th>G</th>"
        htmlGenerado+="<th>O</th>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</thead>"

        htmlGenerado+="<tr>"
        
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB6F1'>  ${numero}</button> </td>`
            console.log(numero)
            console.log(usados2)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI6F1'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN6F1'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG6F1'>  ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO6F1'>  ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //fila 2
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB6F'>  ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI6F2'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN6F2'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG6F2'>  ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO6F2'>  ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"


        //FILA 3
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB6F4'>  ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI6F4' > ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        
        htmlGenerado+=`<td> X </td>`
        

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG6F4'>  ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO6F3'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 4

        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB6F4'>  ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI6F4' >  ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN6F4'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG6F4' >  ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO6F4' >  ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 5
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB6F5'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI6F5'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN6F5' >  ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG6F5' > ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO6F5' > ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"
        tabla6.innerHTML=htmlGenerado;
    })

    //Tabla 7
    btnTabla7.addEventListener('click',function(){
        //Rangos B
        numInicialB=1;
        numFinalB=15;

        //Rangos I
        numInicialI=16;
        numFinalI=30;

        //Rangos N
        numInicialN=31;
        numFinalN=45;

        //Rangos G
        numInicialG=46;
        numFinalG=60;

        //Rangos O
        numInicialO=61;
        numFinalO=75;

        let htmlGenerado="<table border=1 id='tabla4' class='tabla4'>"
        htmlGenerado+="<thead>"
        htmlGenerado+="<tr><th colspan='5'>GRAN BINGO</th></tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<th>B</th>"
        htmlGenerado+="<th>I</th>"
        htmlGenerado+="<th>N</th>"
        htmlGenerado+="<th>G</th>"
        htmlGenerado+="<th>O</th>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</thead>"

        htmlGenerado+="<tr>"
        
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB7F1'>${numero}</button> </td>`
            console.log(numero)
            console.log(usados2)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI7F1' > ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN7F1'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG7F1'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO7F1' >${numeroO} </button></td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //fila 2
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB7F2' >${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td> <button id='btnI7F2'>${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN7F2'>${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG7F2'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO7F2' >${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"


        //FILA 3
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB7F3' >${numero} </button></td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI7F3' > ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        
        htmlGenerado+=`<td> X </td>`
        

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG7F3' >${numeroG}</buttonZ </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO7F3'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 4

        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB7F4'> ${numero} </button></td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI7F4'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN7F4'>${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG7F4'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO7F4'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 5
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB7F5'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI7F5'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN7F5'>${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG7F5'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO7F5'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"
        tabla7.innerHTML=htmlGenerado;
    })

    //Tabla 8
    btnTabla8.addEventListener('click',function(){
        //Rangos B
        numInicialB=1;
        numFinalB=15;

        //Rangos I
        numInicialI=16;
        numFinalI=30;

        //Rangos N
        numInicialN=31;
        numFinalN=45;

        //Rangos G
        numInicialG=46;
        numFinalG=60;

        //Rangos O
        numInicialO=61;
        numFinalO=75;

        arrB=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        arrI=[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arrN=[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
        arrG=[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
        arrO=[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

        let htmlGenerado="<table border=1 id='tabla4' class='tabla4'>"
        htmlGenerado+="<thead>"
        htmlGenerado+="<tr><th colspan='5'>GRAN BINGO</th></tr>"
        htmlGenerado+="<tr>"
        htmlGenerado+="<th>B</th>"
        htmlGenerado+="<th>I</th>"
        htmlGenerado+="<th>N</th>"
        htmlGenerado+="<th>G</th>"
        htmlGenerado+="<th>O</th>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</tr>"
        htmlGenerado+="</thead>"

        htmlGenerado+="<tr>"
        
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB8F1'> ${numero}</button> </td>`
            console.log(numero)
            console.log(usados2)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI8F1'> ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button id='btnN8F1'> ${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG8F1'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO8F1'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //fila 2
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB8F2'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI8F2'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN8F2'>${numeroN}</button> </td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td><button id='btnG8F2'> ${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td> <button id='btnO8F2'>${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"


        //FILA 3
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB8F3'> ${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI8F3'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        
        htmlGenerado+=`<td> X </td>`
        

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG8F3'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO8F3'> ${numeroO} </button></td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 4

        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td><button id='btnB8F4'> ${numero} </button></td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI8F4'> ${numeroI}</button> </td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td><button ='btnN8F4'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG8F4'>${numeroG}</button> </td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO8F4'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"

        //FILA 5
        //B
        usados2 = []
        numero=Math.round(Math.random()*(numInicialB-numFinalB)+numFinalB)
        var repe = false;
        console.log(numero)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numero){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numero;
            htmlGenerado+=`<td> <button id='btnB8F5'>${numero}</button> </td>`
            console.log(numero)
        } 

        //I
        usados2 = []
        numeroI=Math.round(Math.random()*(numInicialI-numFinalI)+numFinalI)
        var repe = false;
        console.log(numeroI)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroI){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroI;
            htmlGenerado+=`<td><button id='btnI8F5'> ${numeroI} </button></td>`
            console.log(numeroI)
        } 

        //N
        usados2 = []
        numeroN=Math.round(Math.random()*(numInicialN-numFinalN)+numFinalN)
        var repe = false;
        console.log(numeroN)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroN){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroN;
            htmlGenerado+=`<td> <button id='btnN8F5'> ${numeroN} </button></td>`
            console.log(numeroN)
        } 

        //G
        usados2 = []
        numeroG=Math.round(Math.random()*(numInicialG-numFinalG)+numFinalG)
        var repe = false;
        console.log(numeroG)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroG){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroG;
            htmlGenerado+=`<td> <button id='btnG8F5'>${numeroG} </button></td>`
            console.log(numeroG)
        } 

        //O
        usados2 = []
        numeroO=Math.round(Math.random()*(numInicialO-numFinalO)+numFinalO)
        var repe = false;
        console.log(numeroO)
        for(var i=0;i<usados2.length;i++){
            if(usados2[i] == numeroO){
                repe = true;
            }
        }
        if(!repe){
            usados2[usados2.length] = numeroO;
            htmlGenerado+=`<td><button id='btnO8F5'> ${numeroO}</button> </td>`
            console.log(numeroO)
        } 

        htmlGenerado+="</tr>"
        htmlGenerado+="<tr>"
        tabla8.innerHTML=htmlGenerado;

        
    })

    //MENSAJES EN BOTONES DE LAS TABLAS
    
 
})