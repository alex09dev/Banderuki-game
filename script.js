
let puntos = 0


const listaBanderas = [
	{
		nom: "Catalunya",
		link: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg", //cada cacharro es un objeto, estas tienen propiedades: nom, link, opc...
		opciones: ["País Basc", "Catalunya", "Andorra"],
	},
	{
		nom: "França",
		link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png",
		opciones: ["França", "Alemanya", "Espanya"],
	},
	{
		nom: "Itàlia",
		link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
		opciones: ["França", "Itàlia", "Suïssa"],
	},
	{
		nom: "Andorra",
		link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/800px-Flag_of_Andorra.svg.png",
		opciones: ["Andorra", "Catalunya", "Suïssa"],
	},
]

function selectRandomFlag() {
	const numeroRandom = Math.floor(Math.random() * 4) //<--Math.floor = redondea el numero generado por Math.random (el num generado se multp*4)
	const bandera = listaBanderas[numeroRandom] //selecciona un objt aleatorio de lista de bandera
	document.querySelector("img").src = bandera.link
	document.querySelector("#opciones-1").innerText = bandera.opciones[0]
	document.querySelector("#opciones-2").innerText = bandera.opciones[1]
	document.querySelector("#opciones-3").innerText = bandera.opciones[2]
	document.querySelectorAll("button").forEach(function (element) {
		element.onclick = function () {
			if (bandera.nom === element.innerText) {
				document.querySelector("img").src = bandera.link
				resetColor()
				document.querySelectorAll("button").forEach((el) => el.removeListener)
				selectRandomFlag()
				puntos ++
				escriurePunts()
			} else {
				element.style.backgroundColor = "rgb(239 68 68)"
				element.style.color = "white"
				puntos --
				escriurePunts()
			}
		}
	})
}

selectRandomFlag()

function resetColor() {
	document.querySelector("#opciones-1").style.backgroundColor = "white"
	document.querySelector("#opciones-2").style.backgroundColor = "white"
	document.querySelector("#opciones-3").style.backgroundColor = "white"

	document.querySelector("#opciones-1").style.color = "#3c4043"
	document.querySelector("#opciones-2").style.color = "#3c4043"
	document.querySelector("#opciones-3").style.color = "#3c4043"
}

function escriurePunts(){
	document.querySelector(".points").innerText = puntos
}