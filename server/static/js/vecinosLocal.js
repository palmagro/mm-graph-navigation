
//Esta funcion se llama por cada checkbox en check y la consulta devuelve los nodos que cumplan con los datos que se dan en la consulta 
function VecinosLocales(sid){
		
  var consulta7 = 
	{
	  "id" : sid,
	  "tvecino" :nombre,
	  "atributo" : atributoNombre,
 	  "relvecino" : nombreb,
	  "vecino" : nodoveci,
	  "salto" : skip,
	  "limite" : limite,
	  "consulta" : 10
	};


	$.ajax({
       async: true, 
       type: "POST",
       url: enlace2,
       data: JSON.stringify(consulta7),
       dataType: "json",
       contentType: "application/json",
       success: function( data ) {

		   for(i=0; i<data.data.length; i++){
		   origenind = -100;
				  posfin = -100;
		          insertada=false;
				  linkinser=false;
				  
			      b = data.data[i][0].data;
				  id=data.data[i][1];
				  label=data.data[i][0].metadata.labels[0];
				  b["sid"]=id;
				  b["label"]=label;
				  nodoinicio = data.data[i][2].data;
				  idre=data.data[i][3];
				  nodoinicio["sid"]=idre;
				
		          abrirVecinos(sid);
	
				  
			}
		   consulReal++;
		   if(consulReal==numConsultas){
				actualizaGrafo();
			}

       },
       error: function( xhr ) {
		   print('error retrieving schema');
           window.console && console.log( xhr );
		
       },
       complete: function(data) {

       }
	   
	   })
	   }