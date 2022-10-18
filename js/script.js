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
                '<a href="activites/activitesMaths.html" class="timeline__step"><span class="c1"><i class="fas fa-square-root-alt"></i> Maths</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/index.html" class="timeline__step"><span class="c1">&Wopf; Web</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/css.html" class="timeline__step"><span class="c1">CSS</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/regex.html" class="timeline__step"><span class="c1">Regex</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/activites/nombres.html" class="timeline__step"><span class="c1">Les nombres</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/activites/compteur.html" class="timeline__step"><span class="c1">Compteur</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/js.html" class="timeline__step"><span class="c1">Javascript</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/generateur.html" class="timeline__step"><span class="c1">Générateur</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/competMed.html" class="timeline__step"><span class="c1">CéerSite</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/etudians.html" class="timeline__step"><span class="c1">Etudians</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">12</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">13</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">14</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">15</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">16</span></a>'+
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

var footer="Copyright &copy; 2015 - 2021 Développé et Réalisé par Ragim - Mohamed<br>"+        
        "Tous droits réservés à RAGIM Mohamed. Il est strictement interdit de copier et de distribuer le contenu de ce site sans l'accord express de son propriétaire<br>"+
        '<span style="direction: rtl;">'+
       'جميع الحقوق محفوظة ل : رجيم محمد ويمنع منعا باتا نسخ وتوزيع محتويات هذا الموقع دون موافقة صريحة من مالكه <br><a href="../index.html"style="text-decoration: none;">الرئيسية</a></span>';

/*== Début Cloc ==*/
var mo="";
    var d = new Date();
    var jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    var mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août", "Septembre","Octobre","Novembre","Décembre"];
    mo=d.getDate();
    if(d.getDate()<10){
      mo='0'+d.getDate();
    }
      function myTimer() { 
      var d1 = new Date(); 
      document.getElementById("cloc").innerHTML = jours[d1.getDay()]+' '+mo+' '+mois[d1.getMonth()]+' '+d1.getFullYear();      
        document.getElementById("cloc").innerHTML += '  '+d1.toLocaleTimeString();
      }
      setInterval(myTimer, 1000);
/*== Fin Cloc ==*/
		
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
//les quatre saisons d'une année: le printemps, l'été, l'automne et l'hiver.
var saisons = ["printemps", "été", "automne", "hiver"];

      /*== Début Les nombres ==*/
      function français(){
        var chiffres =["Zéro","Un","Deux","Trois","Quatre","Cinq","Six","Sept","Huit","Neuf","Dix",
                      "Onze","Douze","Treize","Tuatorze","Quinze","Seize"];
       let nombres0 = ["Vingt","Trente","Quarante","Cinquante","Soixante"];
        let n = document.getElementById("nombre").value;
        n=parseInt(n);
        
        if(n<=16&&n>=0){
          document.getElementById("fr").innerHTML =chiffres[n]+": "+n;
        }

        if(n==17||n==18||n==19){
          document.getElementById("fr").innerHTML =chiffres[10]+"-"+chiffres[n%10]+": "+n;
        }

        if(n==20||n==30||n==40||n==50||n==60){
          document.getElementById("fr").innerHTML =nombres0[(n/10)-2]+": "+n;
        }

        if(n-(n%10)==20&&n%10==1){
          document.getElementById("fr").innerHTML =nombres0[0]+" et un"+": "+n;
        }

        if(n>=22&&n<=29){
          document.getElementById("fr").innerHTML =nombres0[0]+"-"+chiffres[n%10].toLowerCase()+": "+n;
        }
        if(n-(n%10)==30&&n%10==1){
          document.getElementById("fr").innerHTML =nombres0[1]+" et un"+": "+n;
        }
        if(n>=32&&n<=39){
          document.getElementById("fr").innerHTML =nombres0[1]+"-"+chiffres[n%10].toLowerCase()+": "+n;
        }
        if(n-(n%10)==40&&n%10==1){
          document.getElementById("fr").innerHTML =nombres0[2]+" et un"+": "+n;
        }
        if(n>=42&&n<=49){
          document.getElementById("fr").innerHTML =nombres0[2]+"-"+chiffres[n%10].toLowerCase()+": "+n;
        }
        if(n-(n%10)==50&&n%10==1){
          document.getElementById("fr").innerHTML =nombres0[3]+" et un"+": "+n;
        }
        if(n>=52&&n<=59){
          document.getElementById("fr").innerHTML =nombres0[3]+"-"+chiffres[n%10].toLowerCase()+": "+n;
        }
        if(n-(n%10)==60&&n%10==1){
          document.getElementById("fr").innerHTML =nombres0[4]+" et un"+": "+n;
        }
        if(n>=62&&n<=69){
          document.getElementById("fr").innerHTML =nombres0[4]+"-"+chiffres[n%10].toLowerCase()+": "+n;
        }
        if(n>=70&&n<=76&&n!=71){
          document.getElementById("fr").innerHTML =nombres0[(4)]+"-"+chiffres[n%10+10].toLowerCase()+": "+n;
        }
        if(n==71){
          document.getElementById("fr").innerHTML =" soixante et onze"+": "+n;
        }
        if(n>=77&&n<=79){
          document.getElementById("fr").innerHTML =nombres0[(4)]+"-"+chiffres[10].toLowerCase()+"-"+chiffres[n%10].toLowerCase()+": "+n;
        }
        if(n==80){
          document.getElementById("fr").innerHTML ="Quatre-vingts"+": "+n;
        }
        if(n==81){
          document.getElementById("fr").innerHTML ="Quatre-vingt-un"+": "+n;
        }
        if(n>=82&&n<=89){
          document.getElementById("fr").innerHTML =chiffres[4]+"-"+nombres0[(0)].toLowerCase()+"-"+chiffres[n%10].toLowerCase()+": "+n;
        }
        if(n>=90&&n<=96){
          document.getElementById("fr").innerHTML =chiffres[4]+"-"+nombres0[(0)].toLowerCase()+"-"+chiffres[n%10+10].toLowerCase()+": "+n;
        }
        if(n>=97&&n<=99){
          document.getElementById("fr").innerHTML =chiffres[4]+"-"+nombres0[(0)].toLowerCase()+"-"+chiffres[10].toLowerCase()+"-"+chiffres[n%10].toLowerCase()+": "+n;
        }
        if(n==100){
          document.getElementById("fr").innerHTML ="Cent"+": "+n;
        }
    }
    function arabe(){
      let chiffres=["صفر", "واحد", "إثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة","عشرة"];
      let acharates=["عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون" ,"مئة"]
      let n = parseInt(document.getElementById("nombre").value);
      let achar="عشر";
      let ihda="أحد عشر";
      let ithna="اثنا عشر";

      if(n>=0&&n<=10){
        document.getElementById("ar").innerHTML =chiffres[n]+": "+n;
      }

      if(n%10==0&&n!=0&&n!=10){
        document.getElementById("ar").innerHTML =acharates[n/10-2]+": "+n;
      }

      if(n==11){
        document.getElementById("ar").innerHTML =ihda+": "+n;
      }

      if(n==12){
        document.getElementById("ar").innerHTML =ithna+": "+n;
      }

      if(n>=13&&n<=19){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" "+achar+": "+n;
      }

      if(n>=21&&n<=29){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" و  "+acharates[0]+": "+n;
      }

      if(n>=31&&n<=39){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" و  "+acharates[1]+": "+n;
      }

      if(n>=41&&n<=49){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" و  "+acharates[2]+": "+n;
      }

      if(n>=51&&n<=59){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" و  "+acharates[3]+": "+n;
      }

      if(n>=61&&n<=69){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" و  "+acharates[4]+": "+n;
      }

      if(n>=71&&n<=79){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" و  "+acharates[5]+": "+n;
      }

      if(n>=81&&n<=89){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" و  "+acharates[6]+": "+n;
      }

      if(n>=91&&n<=99){
        document.getElementById("ar").innerHTML =chiffres[n%10]+" و  "+acharates[7]+": "+n;
      }
      
    }

    function english(){
      let chiffres=["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
      let acharates=["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "One Hundred"]
      let n = parseInt(document.getElementById("nombre").value);
      let achar="";
      let ihda=" ";
      let ithna=" ";

      if(n>=0&&n<=19){
        document.getElementById("en").innerHTML =chiffres[n]+": "+n;
      }

      if(n%10==0&&n!=0&&n!=10){
        document.getElementById("en").innerHTML =acharates[n/10-2]+": "+n;
      }

      if(n>=21&&n<=29){
        document.getElementById("en").innerHTML =acharates[0]+"-"+chiffres[n%10].toLowerCase()+": "+n;
      }

      if(n>=31&&n<=39){
        document.getElementById("en").innerHTML =acharates[1]+"-"+chiffres[n%10].toLowerCase()+": "+n;
      }

      if(n>=41&&n<=49){
        document.getElementById("en").innerHTML =acharates[2]+"-"+chiffres[n%10].toLowerCase()+": "+n;
      }

      if(n>=51&&n<=59){
        document.getElementById("en").innerHTML =acharates[3]+"-"+chiffres[n%10].toLowerCase()+": "+n;
      }

      if(n>=61&&n<=69){
        document.getElementById("en").innerHTML =acharates[4]+"-"+chiffres[n%10].toLowerCase()+": "+n;
      }

      if(n>=71&&n<=79){
        document.getElementById("en").innerHTML =acharates[5]+"-"+chiffres[n%10].toLowerCase()+": "+n;
      }

      if(n>=81&&n<=89){
        document.getElementById("en").innerHTML =acharates[6]+"-"+chiffres[n%10].toLowerCase()+": "+n;
      }

      if(n>=91&&n<=99){
        document.getElementById("en").innerHTML =acharates[7]+"-"+chiffres[n%10].toLowerCase()+": "+n;
      }

      }
      /*== Fin Les nombres ==*/

