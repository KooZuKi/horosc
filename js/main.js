var zodiac = [
	{
		sign: "aquarius",
		fortune: "",
		image: "img/aquarius.jpg",
		a: "http://aquarius.bateleur.eu/"
	},
	{
		sign: "aries",
		fortune: "",
		image: "img/aries.jpg",
		a: "http://aries.bateleur.eu/"
	},
	{
		sign: "cancer",
		fortune: "",
		image: "img/cancer.jpg",
		a: "http://cancer.bateleur.eu/"
	},
	{
		sign: "capricorn",
		fortune: "",
		image: "img/capricorn.jpg",
		a: "http://capricorn.bateleur.eu/"
	},
	{
		sign: "gemini",
		fortune: "",
		image: "img/gemini.jpg",
		a: "http://gemini.bateleur.eu/"
	},
	{
		sign: "leo",
		fortune: "",
		image: "img/leo.jpg",
		a: "http://leo.bateleur.eu/"
	},
	{
		sign: "libra",
		fortune: "",
		image: "img/libra.jpg",
		a: "http://libra.bateleur.eu/"
	},
	{
		sign: "pisces",
		fortune: "",
		image: "img/pisces.jpg",
		a: "http://pisces.bateleur.eu/"
	},
	{
		sign: "sagittarius",
		fortune: "",
		image: "img/sagittarius.jpg",
		a: "http://sagittarius.bateleur.eu/"
	},
	{
		sign: "scorpio",
		fortune: "",
		image: "img/scorpio.jpg",
		a: "http://scorpio.bateleur.eu/"
	},
	{
		sign: "taurus",
		fortune: "",
		image: "img/taurus.jpg",
		a: "http://taurus.bateleur.eu/"
	},
	{
		sign: "virgo",
		fortune: "",
		image: "img/virgo.jpg",
		a: "http://virgo.bateleur.eu/"
	},
]
function horoscope() {
	var sign  = document.getElementById("sign").value.toLowerCase()
	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("refer").href = zodiac[i].a
			document.getElementById("yourHoroscope").innerHTML = "you're best attributes are: " + zodiac[i].fortune
			return
		} else {
				document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try again!"
				document.getElementById("yourHoroscope").innerHTML = ""
				document.getElementById("refer").href=""
				document.getElementById("icon").src=""

		}

	}
}


