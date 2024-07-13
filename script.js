let puntos = 0
const $opciones1 = document.querySelector("#opciones-1")
const $opciones2 = document.querySelector("#opciones-2")
const $opciones3 = document.querySelector("#opciones-3")

const listaBanderas = [
	{
		nom: "Catalunya",
		link: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg", //cada cacharro es un objeto, estas tienen propiedades: nom, link, opc...
		opciones: ["País Basc", "Catalunya", "Andorra"],
	},
	{
		nom: "País Basc",
		link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_the_Basque_Country.svg/1200px-Flag_of_the_Basque_Country.svg.png", //cada cacharro es un objeto, estas tienen propiedades: nom, link, opc...
		opciones: ["França", "Regne Unit", "País Basc"],
	},
	{
		nom: "Regne Unit",
		link: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg", //cada cacharro es un objeto, estas tienen propiedades: nom, link, opc...
		opciones: ["Regne Unit", "Alemanya", "Andorra"],
	},
	{
		nom: "Alemanya",
		link: "https://s1.significados.com/foto/bandera-de-alemania-og.jpg", //cada cacharro es un objeto, estas tienen propiedades: nom, link, opc...
		opciones: ["País Basc", "Alemanya", "Andorra"],
	},
	{
		nom: "Països Baixos",
		link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM89PWpoVWcc5Vx1mmGfuUFMZVCwn5cM57xw&s", //cada cacharro es un objeto, estas tienen propiedades: nom, link, opc...
		opciones: ["Països Baixos", "Andorra", "Catalunya"],
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
		opciones: ["Suïssa", "Catalunya", "Andorra"],
	},
]

function selectRandomFlag(lastFlag = "") {
	const numeroRandom = Math.floor(Math.random() * (listaBanderas.length - 1)) //<--Math.floor = redondea el numero generado por Math.random

	// Usar un filter para no repetir bandera

	const bandera = listaBanderas.filter((flag) => flag.nom !== lastFlag)[numeroRandom] //selecciona un objt aleatorio de lista de bandera


	document.querySelector("img").src = bandera.link
	$opciones1.innerText = bandera.opciones[0]
	$opciones2.innerText = bandera.opciones[1]
	$opciones3.innerText = bandera.opciones[2]


	document.querySelectorAll("button").forEach(function (element) {
		element.onclick = function () {
			if (bandera.nom === element.innerText) {
				document.querySelector("img").src = bandera.link
				resetColor()

				document.querySelectorAll("button").forEach((el) => el.removeListener)

				// Volver a mostrar una bandera aleatoria
				selectRandomFlag(bandera.nom)

				puntos++

				// Mostrar puntos actuales en pantalla
				escriurePunts()
			} else {
				element.style.backgroundColor = "rgb(239 68 68)"
				element.style.color = "white"
				puntos--
				escriurePunts()
			}
		}
	})
}

selectRandomFlag()

function resetColor() {
	$opciones1.style.backgroundColor = "white"
	$opciones2.style.backgroundColor = "white"
	$opciones3.style.backgroundColor = "white"

	$opciones1.style.color = "#3c4043"
	$opciones2.style.color = "#3c4043"
	$opciones3.style.color = "#3c4043"
}

function escriurePunts() {
	document.querySelector(".points").innerText = puntos
}
