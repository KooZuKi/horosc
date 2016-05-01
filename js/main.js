var zodiac = [
	{
		sign: "aquarius"
	},
	{
		sign: "aries",
		fortune: "",
		image: ""
	},
	{
		sign: "cancer",
		fortune: "",
		image: ""
	},
	{
		sign: "capricorn",
		fortune: "",
		image: ""
	},
	{
		sign: "gemini",
		fortune: "",
		image: ""
	},
	{
		sign: "leo",
		fortune: "",
		image: ""
	},
	{
		sign: "libra",
		fortune: "",
		image: ""
	},
	{
		sign: "pisces",
		fortune: "",
		image: ""
	},
	{
		sign: "sagittarius",
		fortune: "",
		image: ""
	},
	{
		sign: "scorpio",
		fortune: "",
		image: ""
	},
	{
		sign: "taurus",
		fortune: "",
		image: ""
	},
	{
		sign: "virgo",
		fortune: "",
		image: ""
	},
]
function horoscope() {
	var sign  = document.getElementById("sign").value.toLowerCase()
	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").innerHTML = "you're best attributes are: " + zodiac[i].fortune
			return
		} else {
				document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try again!"
				document.getElementById("yourHoroscope").innerHTML = ""
				document.getElementById("icon").src=""
		}

	}
}


