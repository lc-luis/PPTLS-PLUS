//PPTLS - JUEGO

//Creamos variables globales
var jugadaUsuario;
var jugadaMaquina;
var puntosUsuario = 0;
var puntosMaquina = 0;

//Generar numero aleatorio para la maquina.
//Floor redondea y devuelve un entero.
function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;	
}

//Selecciona una opcion y empieza a jugar.
function jugar(opcionesId)
{
	//Generamos un array con las opciones.
	var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

	//Obtenemos opcion Usuario en texto
	jugadaUsuario = opciones[opcionesId];

	//Obtenemos numero aleatorio
	var opcionMaquina = aleatorio(0,4);

	//Obtenemos opcion Maquina en texto
	jugadaMaquina = opciones[opcionMaquina];

	//Obtenemos la jugada y la mostramos en el div con id jugada
	var jugada = document.getElementById("jugada").innerHTML = "Tu juegas " + jugadaUsuario + " <img src='img/" + jugadaUsuario + ".png' title='" + jugadaUsuario + "'> contra <img src='img/" + jugadaMaquina + ".png' title='" + jugadaMaquina + "'>" + jugadaMaquina + ".";

	resultado();

	document.getElementById("puntos").innerHTML ="<p><strong>Puntos Usuario: </strong> <h1>" + puntosUsuario + "</h1></p> <p><strong>Puntos Máquina: </strong> <h1>" + puntosMaquina + "</h1></p>";

//Resultado Final

}

function resultado()
{
	//Ocultamos el boton start al hacer click 
	//document.getElementById("botonStart").style.display='none';

	//funciones para mostrar el resultado
	function ganaste()
	{
		document.getElementById("resultado").innerHTML = "<img src='img/ganaste.png'>";
		puntosUsuario += 1;
	}
	function perdiste()
	{
		document.getElementById("resultado").innerHTML = "<img src='img/perdiste.png'>";
		puntosMaquina += 1;
	}
	function empataste()
	{
		document.getElementById("resultado").innerHTML = "<img src='img/empate.png'>";
	}

	//Evaluamos si el usuario gana pierde o empata
	if(jugadaUsuario == "Papel")
	{
		if(jugadaMaquina == "Piedra")ganaste();
		if(jugadaMaquina == "Papel")empataste();
		if(jugadaMaquina == "Tijera")perdiste();
		if(jugadaMaquina == "Lagarto")perdiste();
		if(jugadaMaquina == "Spock")ganaste();
	}
	if(jugadaUsuario == "Piedra")
	{
		if(jugadaMaquina == "Piedra")empataste();
		if(jugadaMaquina == "Papel")perdiste();
		if(jugadaMaquina == "Tijera")ganaste();
		if(jugadaMaquina == "Lagarto")ganaste();
		if(jugadaMaquina == "Spock")perdiste();
	}
	if(jugadaUsuario == "Tijera")
	{
		if(jugadaMaquina == "Piedra")perdiste();
		if(jugadaMaquina == "Papel")ganaste();
		if(jugadaMaquina == "Tijera")empataste();
		if(jugadaMaquina == "Lagarto")ganaste();
		if(jugadaMaquina == "Spock")perdiste();
	}
	if(jugadaUsuario == "Lagarto")
	{
		if(jugadaMaquina == "Piedra")perdiste();
		if(jugadaMaquina == "Papel")ganaste();
		if(jugadaMaquina == "Tijera")perdiste();
		if(jugadaMaquina == "Lagarto")empataste();
		if(jugadaMaquina == "Spock")ganaste();
	}
	if(jugadaUsuario == "Spock")
	{
		if(jugadaMaquina == "Piedra")ganaste();
		if(jugadaMaquina == "Papel")perdiste();
		if(jugadaMaquina == "Tijera")ganaste();
		if(jugadaMaquina == "Lagarto")perdiste();
		if(jugadaMaquina == "Spock")empataste();
	}
}
