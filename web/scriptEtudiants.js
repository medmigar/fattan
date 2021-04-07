/*======================
Etudiants
=======================*/
class Etudiant {
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
}

var spanE = '<p  style="color:red;padding:15px;">';
var spanS = '<p  style="color:#0f0;padding:15px;">';
var etudiants =[];
var cherche = [];
var vn, vp, va, vr, enr;
var j=0, k=0;

var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var mybody= document.getElementById("mybody");


var form1=document.getElementById("myform"); 

function reinitiliser() {
        form1.reset();
        document.getElementById("nom").focus();
}


function enregistrer(){

	enr=true;		
	vn=document.getElementById("nom").value;
	vp=document.getElementById("prenom").value;
	va=document.getElementById("age").value;
	var nomMn = document.getElementById("nomManqn");
	var nomMp = document.getElementById("nomManqp");
	var nomMa = document.getElementById("nomManqa");
	if(vn!="" && vp!="" && va!=""&&!isNaN(va)){
		for (var i = 0; i < etudiants.length; i++) {
			if(etudiants[i].nom==vn && etudiants[i].prenom==vp){				
				cherche.push(vn+" "+vp);
				j++;
			}
		}
		if(j>0){
			mybody.innerHTML ="<p style='width: 90%;text-align:center;font-size:16px;'>L'étudiant: "+cherche[cherche.length-1]+
			" est déjà inscrit</p>";modal.style.display="block";
			setTimeout(()=>{modal.style.display="none";}, 6000);									
			enr=false;
			j=0;
		}		
			
		if(enr){
			k++;
			etudiant = new Etudiant(vn, vp, va);			
			etudiants.push({numero:k, nom:etudiant.nom, prenom:etudiant.prenom, age:etudiant.age});
			for (var i = 0; i < etudiants.length; i++){
  				etudiants[i].numero=i+1;
  				mybody.innerHTML ="<p style='width: 90%;text-align:center;font-size:16px;'>Enregistrement avec succès</p>";
  				modal.style.display="block";
  				setTimeout(()=>{modal.style.display="none";}, 6000);
  				
  			}reinitiliser();
  			nomMa.innerHTML = '';
  			nomMp.innerHTML = '';
  			nomMn.innerHTML = '';

		}
		
	}else{
		mybody.innerHTML ="<p style='width: 90%;font-size:16px;'>L'un au moins des champs n'est pas valide."+
		" Veuillez remplir tous les champs SVP, avec des valeurs valides</p>";
  				modal.style.display="block";
  				setTimeout(()=>{modal.style.display="none";}, 6000);
		

		if(vn==""){
			nomMn.style.backgroundColor='#fff';
			nomMn.innerHTML = '&#9664; Veuillez entrer un nom valide dans ce champs';
            nomMn.style.color = 'red';
        }else{
			nomMn.innerHTML = '';
        }

        if (vp=='') {
        	nomMp.style.backgroundColor='#fff';
        	nomMp.innerHTML = '&#9664; Veuillez entrer un prénom valide dans ce champs';
            nomMp.style.color = 'red';
        }else{
        	nomMp.innerHTML = '';
        }

        if (va==""||isNaN(va)) {
        	nomMa.style.backgroundColor='#fff';
        	nomMa.innerHTML = '&#9664; Veuillez entrer un age valide dans ce champs';
            nomMa.style.color = 'red';
        } else {
        	nomMa.innerHTML = '';
        }		
	}			
}

function afficher(){
	var txt="";
	txt= "<table id='tab'><caption><b>La liste des étudiants inscrits</b></caption>"+
		 "<tr><th>Numéro</th><th>Nom</th><th>Prénom</th><th>Age</th></tr>";
	for (var i = 0; i < etudiants.length; i++) {		
		txt += "<tr><td>"+etudiants[i].numero+"</td>"+
		"<td>"+etudiants[i].nom+"</td>"+
		"<td> "+etudiants[i].prenom+ "</td>"+
		"<td>"+etudiants[i].age+"</td></tr>";			
	}		
	txt += "</table>";
	document.getElementById("demo").innerHTML = txt;
	chargerEvent();
}

function selModifier(){
	var obj1 = document.getElementById("liste");
	var obj = document.getElementById("liste").selectedIndex;	
	if (obj==-1) {
		mybody.innerHTML ="<p style='width: 90%;text-align:center;font-size:16px;'>Sélectinnez l'étudiant à modifier !</p>";
  				modal.style.display="block";
  				setTimeout(()=>{modal.style.display="none";}, 6000);
		reinitiliser();
	}else{
  		var etudiant = obj1.options[obj1.selectedIndex].text;
  		var str=etudiant.charAt(0)-1;
		document.getElementById("nom").value=etudiants[str].nom;
		document.getElementById("prenom").value=etudiants[str].prenom;
		document.getElementById("age").value=etudiants[str].age;		
  	}
}

function chargerEvent(){
  document.getElementById('tab').addEventListener('click',re );
}

function re() {
 	var txt="";
 	var f="";
    var lignes=document.getElementById('tab').rows;    
    for (var i = 1; i < lignes.length; i++) {
    	var colonnes=lignes[i].cells;
    	for(var j=0; j<colonnes.length; j++){
    		var cell = lignes[i].cells[j].innerHTML;
    		f+=cell+"  ";    		
    	}
    	txt+= '<option value='+f+'>'+f+'</option>';
    	f="";
    } 
   document.getElementById("liste").innerHTML = txt;         
} 

function getOption() {
  var obj = document.getElementById("liste");
  document.getElementById("op").innerHTML = 
  obj.options[obj.selectedIndex].text;
}

/* supprimer un Etudiant sélectinné */
function supprimer(){
	var obj = document.getElementById("liste");
	if (obj.length!=0&&obj.selectedIndex!=-1) {
		var x = obj.selectedIndex;
  		var st=obj[x].text;
		var etudiant = obj.options[obj.selectedIndex].text;
		var str=st.charAt(0)-1;
		etudiants.splice(str, 1);
		for (var i = 0; i < etudiants.length; i++) {
  			etudiants[i].numero=i+1;
  		}
  		mybody.innerHTML="<p style='width: 90%;text-align:center;font-size:16px;'>Suppression avec succès</p>";
  		modal.style.display="block";
  		setTimeout(()=>{modal.style.display="none";}, 6000);
  		reinitiliser();
  	}else{
  		mybody.innerHTML="<p style='width: 90%;text-align:center;font-size:16px;'>Sélectinnez l'étudiant à supprimer !</p>";
  		modal.style.display="block";
  		setTimeout(()=>{modal.style.display="none";}, 6000);
  		reinitiliser();
  	}
} 

span.onclick = function() {
        modal.style.display = "none";    
    }

function chercher(){
	vr=document.getElementById("numero").value;
	var chercher1=[];
	for (var i = 0; i < etudiants.length; i++) {
		if(etudiants[i].nom==vr){				
			chercher1.push(etudiants[i]);
			j++;
		}
	}
	if(j>0){
		var txt="";
		txt="<table id='tab'><caption><b>La liste des étudiants</b></caption>"+
				"<tr><th>Numéro</th><th>Nom</th><th>Prénom</th><th>Age</th></tr>";
		for (var i = 0; i < j; i++) {		
  			txt += "<tr><td>"+etudiants[i].numero+"</td>"+
  				"<td>"+chercher1[i].nom+"</td>"+
  				"<td> "+chercher1[i].prenom+ "</td>"+
  				"<td>"+chercher1[i].age+"</td></tr>";			
		}		
		txt += "</table>";
		document.getElementById("demo").innerHTML = txt;
			j=0;
	}else{
		if(vr==""){
			// show(spanE+ 'Entrez le nom à chercher !</p>');
			mybody.innerHTML ="<p style='width: 90%;font-size:16px;'>Entrez le nom à chercher !</p>";
  				modal.style.display="block";
  				setTimeout(()=>{modal.style.display="none";}, 6000);
			reinitiliser();
		}else{
			// show(spanE+ vr+" n'existe pas</p>");
			mybody.innerHTML ="<p style='width: 90%;font-size:16px;'>"+ vr+" n'existe pas</p>";
  				modal.style.display="block";
  				setTimeout(()=>{modal.style.display="none";}, 6000);
			reinitiliser();
		}		
	}
}

function modifier(){
	var obj = document.getElementById("liste");
	vn=document.getElementById("nom").value;
	vp=document.getElementById("prenom").value;
	va=document.getElementById("age").value;
	if(vn!="" && vp!="" && va!=""&&obj.selectedIndex!=-1){

		
		var etudiant = obj.options[obj.selectedIndex].text;
  		var str=etudiant.charAt(0)-1;
		etudiants[str].nom=document.getElementById("nom").value;
		etudiants[str].prenom=document.getElementById("prenom").value;
		etudiants[str].age=document.getElementById("age").value;
		for (var i = 0; i < etudiants.length; i++) {
  			etudiants[i].numero=i+1;
  			// show(spanS+"Modification avec succès</p>");
  			mybody.innerHTML ="<p style='width: 90%;font-size:16px;'>Modification avec succès</p>";
  				modal.style.display="block";
  				setTimeout(()=>{modal.style.display="none";}, 6000);
  			reinitiliser();
  		}
  			
	}else{
		// show(spanE+"Sélectinnez l'étudiant à modifier!</p>");
		mybody.innerHTML ="<p style='width: 90%;font-size:16px;'>Sélectinnez l'étudiant à modifier!</p>";
  				modal.style.display="block";
  				setTimeout(()=>{modal.style.display="none";}, 6000);
		reinitiliser();
	}
}

function delayed() {
	window.setTimeout(fermer, 4000);
}

//Fin Etudiant ==============

// Calculatrice =============

//fonction qui évalue le chiffre et renvoie la sortie
function calculer(){
	let a = document.getElementById("output").value;
	let b = a+" = "+eval(a);
	document.getElementById("output").value = b;
}

//fonction qui affiche la valeur
function afficherCal(val){ 
	document.getElementById("output").value+=val;
}

//fonction qui efface l'écran
function effacer(){ 
	document.getElementById("output").value = "";
}

function op(s,ch1,ch2){
	var a,b;
	a=parseInt(prompt(ch1));
	b=parseInt(prompt(ch2));	
	var t = function(k){
	switch (k) {
  		case "+":
    	return a+b;
    	break;
    	case "*":
    	return a*b;
    	break;
    	case "-":
    	return a-b;
    	break;
    	case "/":
    	return a/b;
    	break;
    	case "%":
    	return a%b;
    	break;
    	default:
    	alert("by by");
	}};
	alert(a+" "+s+" "+b+" = "+t(s));
}

// Fin Calculatrice

function er(){
	var arrayLignes = document.getElementById("matable").rows;
	var longueur = arrayLignes.length;
	var i=0; 

	while(i<longueur){
		if(i % 2 == 0){
			arrayLignes[i].style.backgroundColor = "#bdcbf5";
		}else{
			arrayLignes[i].style.backgroundColor = "#829eeb";
		}
		i++;
	}
}