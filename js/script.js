 function basculer() {
      var x = document.getElementById('nav1');
      if (x.style.display === 'none') {
        document.getElementById('btnMenu').innerHTML="<i class='fa fa-close'></i> Close";
      } else {
          document.getElementById('btnMenu').innerHTML="<i class='fa fa-bars'></i> Menu";
        }
    }
    
var menu='<div class="timeline__steps">              <!-- '+
          'Premier icôme '+
          '*************                             -->'+
            '<span class="iconContainer">'+
            '<a href="/fattan/" class="roundIcon timeline__roundIcon"><i class="fa fa-home fa-fw"></i></a>'+
            '</span>                                 <!-- '+
          'Fin du premier icôme '+
          '*************                             -->'+
                '<span class="bloc"></span>    '+
                '<a href="/fattan/maths/index.html" class="timeline__step"><span class="c1"><i class="fas fa-square-root-alt"></i> Maths</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/index.html" class="timeline__step"><span class="c1">Web</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">4</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">5</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">6</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">7</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">8</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">9</span></a>'+
                '<span class="bloc"></span>'+
                                                                '<!--'+
                'Dermier icôme '+
                '*************                                   -->'+
                '<span class="iconContainer">'+
                '<a href="#" class="roundIcon timeline__roundIcon">'+
                "<i class='fas fa-fist-raised' style='font-size:20px;color:#fff'></i></a>"+
                "</span>"+
            "</div> ";

var header="&#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958;"+
    "&#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958;"+
    "<h1>أهلا وسهلا بك زائرنا الكريم  Bienvenue notre honorable visiteur Welcome our dear visitor</h1>"+
    "&#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958;"+
    "&#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958;";

var footer="Copyright &copy; 2015 - 2020 Développé et Réalisé par Ragim - Mohamed<br>"+        
        "Tous droits réservés à RAGIM Mohamed. Il est strictement interdit de copier et de distribuer le contenu de ce site sans l'accord express de son propriétaire<br>"+
        '<span style="direction: rtl;">'+
       'جميع الحقوق محفوظة ل : رجيم محمد ويمنع منعا باتا نسخ وتوزيع محتويات هذا الموقع دون موافقة صريحة من مالكه <br><a href="/fattan/"style="text-decoration: none;">الرئيسية</a></span>';

		function inclureMenu(t){
			document.getElementById('nav1').innerHTML=t;
		}

		function inclureHeader(t){
			document.getElementById('header').innerHTML=t;
		}

		function inclureFooter(t){
			document.getElementById('footer').innerHTML=t;
		}
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


  	