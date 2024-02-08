window.onload=function()
 {
	const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
	const currentTheme = localStorage.getItem("theme");
	var stylesheet = document.getElementsByTagName("link").item(0);
		stylesheet.setAttribute("rel", "stylesheet");
		stylesheet.setAttribute("type", "text/css");
	if (currentTheme) 
	{
		if (currentTheme === "dark") 
		{
			toggleSwitch.checked = true;
			stylesheet.setAttribute("href", "assets/css/styledark.css");
		}
		else
		{
		toggleSwitch.checked = false;
		}
	}
	else
	{
		localStorage.setItem("theme", 'light');
		location.reload();
	}
		
	function switchTheme(e) 
	{
		if (e.target.checked) 
		{
			stylesheet.setAttribute("href", "assets/css/styledark.css");
			localStorage.setItem("theme", 'dark');
		}
		else
		{      
			stylesheet.setAttribute("href", "assets/css/stylelight.css");
			localStorage.setItem("theme", 'light');
		}    
	}

	toggleSwitch.addEventListener("change", switchTheme, false);
}

const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

const texts = [
	"Hi ^^",
	'Ich bin',
	'Simon Lindner',
	"Dualer Student",
	"@IU ",
	"und",
	"@Cyberdyne",
];

const morphTime = 2;
var cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

function setMorph(fraction) {
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

function animate() {
	requestAnimationFrame(animate);
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	

	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
			temp5++;
		}
		doMorph();
		
	} else {
		doCooldown();
	}
	if(temp5==8)
	{
		if (localStorage.getItem("firstvisit") == "true")
		{
		document.querySelector("#intro").scrollIntoView({block: "start", behavior: "smooth"});
		localStorage.setItem("firstvisit", false)
		}
	}
	if(temp5 == 0)
	{
		temp6=true;
		cooldownTime = 9999999999999999999999;
		document.querySelector("#text2").style.cursor = "pointer";
		temp5++;
		document.querySelector("#text2").addEventListener('pointerdown', (event) => {
		if (event.pointerType === "mouse") {if(temp6){cooldownTime=0.25;cooldown=0.25;temp6=false;temp5=1;document.querySelector("#top").style.cursor = "default";}}
		if (event.pointerType === "touch") {if(temp6){cooldownTime=0.25;cooldown=0.25;temp6=false;temp5=1;document.querySelector("#top").style.cursor = "default";}}
		if (event.pointerType === "pen") {if(temp6){cooldownTime=0.25;cooldown=0.25;temp6=false;temp5=1;document.querySelector("#top").style.cursor = "default";}}});
	}
	if(temp5==8)
	{
		temp5=0;
	}
}

	var temp5 =1;
	var temp6 = true;
	if(localStorage.getItem("firstvisit") == "false")
	{
	
	}
	else
	{
		localStorage.setItem("firstvisit", 'true');	
	}

animate();
console.log("------------------------------------")
console.log("Hi ^^")
console.log("Falls du diese Seite so interessant findest, dass du sogar in den Quellcode guckst, muss das eine Ehre sein. Ich wünsche dir erstmal viel Spaß auf der Seite. Hoffentlich lernst du was über mich.")
console.log("Falls du nur kurz stöberst und danach wieder weg bist, würde ich Leb Wohl sagen. Es freut mich das du meine Website besucht hast und sollten wir uns niemals hören oder ähnliches wünsche ich dir ein schönes und erfolgreiches Leben.")
console.log("LG")
console.log("Simon")
console.log("P.S.: Ich habe einen versteckten Link, der zu etwas hinführt, was eigentlich komplett unnötigt ist, auf der Seite eingebaut. Vielleicht findest du den Link ja ©lose to this site. War nen Hint. Aber nicht schummeln :)")
console.log("------------------------------------")
var heute = new Date();

var Geburtsdatum = new Date('March 10, 2003 00:00:00');

var AlterDate = heute - Geburtsdatum;

var Alter = Math.floor(AlterDate/31536000000);

document.querySelector("#MeinAlter").innerHTML = Alter;
document.querySelector("#CurrentYear").innerHTML = heute.getFullYear();