
function anexos(sid){
var consulta12 = 
	{
	  "query" : "START n=node("+sid+") MATCH n-[re]-x where x:Anexos RETURN  x",
	  "params" : {	  }
	};

	
	$.ajax({
       async: true, 
       type: "POST",
       url: enlace,
       data: JSON.stringify(consulta12),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {
var infoAnexo=[];
			for(i=0; i<data.data.length; i++){
				anex=data.data[i][0].data;
				infoAnexo.push(anex);
				console.log(anex.ImagenM);
				
			}
			
			for(a=0; a<infoAnexo.length; a++){
				console.log(infoAnexo);
				 if(infoAnexo[a].Tipo=="imagen"){

					 $( "#mi_div6" ).append( "<img src='../static/img"+infoAnexo[a].ImagenM+"' >"  );
					 }
					  if(infoAnexo[a].Tipo=="video"){
					  	$( "#mi_div6" ).append( "<video width='320' height='240' controls> <source src='../static/img"+infoAnexo[a].Original+"' type='video/mp4'> </video>" );
					  	 	//"<video width='320' height='240' controls>"
  							//"<source src='../static/img"+infoAnexo[a].Original+"' type='video/mp4'>"
							//"Your browser does not support the video tag."
							//"</video>" );
					   	console.log($( "#mi_div6" ));

					  }
					  if (infoAnexo[a].Tipo=="audio"){
					  	$( "#mi_div6" ).append( "<audio controls preload='auto'> <source src='../static/img"+infoAnexo[a].Original+"' type='audio/mp3'> </source>");

					  }
					   if (infoAnexo[a].Tipo=="archivo"){
					   //	PDF Reader in JavaScript
					  	$( "#mi_div6" ).append( "<a href='../static/img"+infoAnexo[a].Original+"' download='"+infoAnexo[a].Original+"'> Donwload File </a>"  );
					  	// $("#fileRequest").click(function(){
					  	// 	window.location = "'../static/img"+infoAnexo[a].Original+"'";
					  	// });
					  }
					
				}
				
	// funcion carrusel
	// var lista = new Array();
	// 				  var contador =0;
	// 				  var tiempo =0;
	// 				  var tempor =null;
	// 				  function cambio (sen){
	// 				  	contador+=sen;
	// 				  	if (contador==lista.length)
	// 				  		contador=lista.length-1;
	// 				  	else
	// 				  		if (contador<0)contador=0;
	// 				  		}src='"../static/img"+infoAnexo[a].ImagenM" + =lista[contador]';
					 //  		$("mi_div6")=lista[contador];
					 //  		window.status="Imagen Numero"+ contador
					 //  }
					 //  function reset (){
					 //  	contador=0;
					 //  	fin=false;
					 //  	$( "#mi_div6" ).append( "<img src='../static/img"+infoAnexo[a].ImagenM+"' >"  )=lista[0];
					 //  }

					 //  function automat(seg)
						// {
						// tiempo = parseInt(seg);
						// reset();
						// window.status="Pase automático";
						// if (isNaN(tiempo) || tiempo <= 0)
						//     alert("Error en el tiempo")
						// else
						//     tempor = setTimeout("pasar()", tiempo)
						// }
						// function parar()
						// {
						// clearTimeout(tempor);
						// }
						// function pasar()
						// {
						// cambio(1);
						// if (contador < lista.length-1)
						//     tempor = setTimeout("pasar()", tiempo)


			
		},
		error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
		
		},
		complete: function(data) {

		}
	   
		})
}
