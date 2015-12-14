

var enlace="/peticion"
var enlace2="/peticion_n"

//Máximo de nodos para mostrar 
var totalimite=25;

//Nombres de los Nodos de acuerdo al tipo 
var etiqueta={};

etiqueta["Ambito"] = "Descripcion";
etiqueta["Anexos"] = "Original";
etiqueta["Canton"] = "Descripcion";
etiqueta["Coleccion"] = "Descripcion";
etiqueta["Comunidad"] = "Descripcion";
etiqueta["Contenedor"] = "Descripcion";
etiqueta["DetalleSubambito"] = "Descripcion";
etiqueta["Elementos_Relacionados"] = "Denominacion";
etiqueta["Herramienta"] = "Procedencia";
etiqueta["Inmaterial"] = "Denominacion";
etiqueta["Lengua"] = "Descripcion";
etiqueta["Parroquia"] = "Descripcion";
etiqueta["Provincia"] = "Descripcion";
etiqueta["Subambito"] = "Descripcion";
etiqueta["Subcontenedor"] = "Descripcion";
etiqueta["Tipo_Coleccion"] = "Descripcion";
etiqueta["Tipo_Subcontenedor"] = "Descripcion";


/*
etiqueta["Detalle"] = "inmaterial_id";

etiqueta["ElementosSig"] = "nombre";


etiqueta["Periodicidad"] = "det_periodicidad_desc";
etiqueta["Preparativo"] = "nombre";
etiqueta["Producto"] = "nombre";
etiqueta["Sensibilidad"] = "sensibilidad_desc";
etiqueta["Tecnica"] = "nombre";
etiqueta["UsoSimbolico"] = "det_uso_simbolico_desc";

*/
// function label(d){

// label = d[etiqueta[d.label]];

// return label;
// }

//Campos que se muestran en el tooltip de los nodos
var camp_tooltip ={
/*
etiqueta["Ambito"] = "Descripcion";
etiqueta["Anexos"] = "Original";
etiqueta["Canton"] = "Descripcion";
etiqueta["Coleccion"] = "Descripcion";
etiqueta["Comunidad"] = "Descripcion";
etiqueta["Contenedor"] = "Descripcion";
etiqueta["DetalleSubambito"] = "Descripcion";
etiqueta["Elementos_Relacionados"] = "Denominacion";
etiqueta["Herramienta"] = "Procedencia";
etiqueta["Inmaterial"] = "Denominacion";
etiqueta["Lengua"] = "Descripcion";
etiqueta["Parroquia"] = "Descripcion";
etiqueta["Provincia"] = "Descripcion";
etiqueta["Subambito"] = "Descripcion";
etiqueta["Subcontenedor"] = "Descripcion";
etiqueta["Tipo_Coleccion"] = "Descripcion";
etiqueta["Tipo_Subcontenedor"] = "Descripcion";
*/

//"Alcance":["det_alcance_desc"],
"Ambito":["Descripcion"],
"Anexos":["Original"],
"Canton":["Descripcion"],
"Coleccion":["Descripcion"],
"Comunidad":["Descripcion"],
"Contenedor":["Descripcion"],
"DetalleSubambito":["Descripcion"],
"Elementos_Relacionados":["Denominacion"],
"Herramienta":["Procedencia"],
"Inmaterial":["Denominacion"],
"Lengua":["Descripcion"],
"Parroquia":["Descripcion"],
"Provincia":["Descripcion"],
"Subambito":["Descripcion"],
"Subcontenedor":["Descripcion"],
"Tipo_Coleccion":["Descripcion"],
"Tipo_Subcontenedor":["Descripcion"],

/*"Detalle":["inmaterial_id"],
"Elemento":["nombre"],
"ElementosSig":["nombre"],
"Periodicidad":["det_periodicidad_desc"],
"Preparativo":["nombre"],
"Producto":["nombre"],
"Sensibilidad":["sensibilidad_desc"],
"Tecnica":["nombre"],
"UsoSimbolico":["det_uso_simbolico_desc"],
*/
}

//Campos que se muestran al abrir toda la informacion 
var camp_modal ={

//"Alcance":["det_alcance_desc","det_alcance"],
"Ambito":["Descripcion","Codigo"],
"Anexos":["Original","Codigo"],
"Canton":["Descripcion","Codigo"],
"Coleccion":["Descripcion","Codigo"],
"Comunidad":["Descripcion","Codigo"],
"Contenedor":["Descripcion","Ciudad"],
"DetalleSubambito":["Descripcion","Codigo"],
"Elementos_Relacionados":["Codigo"],
"Herramienta":["Nombre","Procedencia"],
"Inmaterial":["Denominacion","Codigo","Localidad","DescripcionComunidad","DescripcionLengua1"],
"Lengua":["Descripcion","Codigo"],
"Parroquia":["Descripcion","Codigo","SecuencialIBI","DescripcionINPC"],
"Provincia":["Descripcion","Codigo"],
"Subambito":["Descripcion","Codigo"],
"Subcontenedor":["Descripcion","Codigo"],
"Tipo_Coleccion":["Descripcion","Codigo"],
"Tipo_Subcontenedor":["Descripcion","Codigo"],

/*"Detalle":["inmaterial_id","uso_alcance_desc"],
"Elemento":["nombre","inmaterial_id"],
"ElementosSig":["nombre","inmaterial_id"],
"Periodicidad":["det_periodicidad_desc","det_periodicidad"],
"Preparativo":["nombre","inmaterial_id"],
"Producto":["nombre","inmaterial_id"],
"Sensibilidad":["sensibilidad_desc","sensibilidad_id"],
"Tecnica":["nombre","inmaterial_id"],
"UsoSimbolico":["det_uso_simbolico_desc","det_uso_simbolico"],*/


}