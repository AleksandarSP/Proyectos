        //Declaración y asignación de variables
        var iniciar = $("#iniciar");
        var parar = $("#parar");
        var reiniciar = $("#reiniciar");
        
        var secs = 0;
        var mins = 0;
        var horas = 0;

        var horaActual = "00/00/00";
        
        //Muestra la hora, todo a 0 ya que como tarda 1 seg en comenzar a contar, se me mueven los contenedores despues
        $('#horaActual').html("<p>"+ horaActual +"</p>");

        //Lo mismo que lo anterior pero con el contador
        $("#contador").html("<p>" + (horas + " H  " + mins + " M  " + secs + " S  ")+ "</p>");


        //Un intervalo que nunca para y mediante la cual mostramos la hora
        setInterval(()=>{
            var d = new Date();
            var s = String(d.getSeconds());
            var mins = String(d.getMinutes());
            var hora = String(d.getHours()); 

            horaActual = hora + "/" + mins + "/" + s;
            //Objeto mediante el cual mostramos la hora por pantalla
            $('#horaActual').html("<p>"+ horaActual +"</p>");
        }, 1000);

        //Al hacer click en el botón iniciar, abrimos la función y comienza el timer
        iniciar.click(()=>{
            
                var myInterval = setInterval(()=>{

                    //Condición para pasar los segundos a minutos y los minutos a horas
                    secs++;
                    if (secs == 60) {
                        secs = 0;
                        mins++;
                        if (mins == 60) {
                            mins = 0;
                            horas++;
                        }
                    }
                    //Muestra el contador cada segundo con unos valores diferentes                    
                    $("#contador").html("<p>" + (horas + " H  " + mins + " M  " + secs + " S  ")+ "</p>");
                    
                },1000)
                //Al clickar en parar se limpia el intervalo, pero las variables de las horas-mins-secs siguen igual
                parar.click(()=>{
                    clearInterval(myInterval);
                })
        });
        
        //Haciendo click en reiniciar se ponen las variables del tiempo a 0
        reiniciar.click(()=>{
            secs = 0;
            mins = 0;
            horas = 0;
            //Muestra todo a 0
            $("#contador").html("<p>" + (horas + " H  " + mins + " M  " + secs + " S  ")+ "</p>");
        });