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
                '<a href="/fattan/web/index.html" class="timeline__step"><span class="c1">&Wopf; Web</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/css.html" class="timeline__step"><span class="c1">CSS</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/regex.html" class="timeline__step"><span class="c1">Regex</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="/fattan/web/nombres.html" class="timeline__step"><span class="c1">Les nombres</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">7</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">8</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">9</span></a>'+
                '<span class="bloc"></span>'+
                '<a href="#" class="timeline__step"><span class="c1">10</span></a>'+
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

/*== Début Les activités mathématiques*/ 
      let result="<h1><span>&#127799;</span><br>Caractère invalide !<br>Entrer dans ce champ un nombre entier positif</h1><button class='btnMenu' onclick=\" dialog.close();dialog.style.display='none';\"><i class='fa fa-close'></i> </button>";       
      let number=0;
        let motif = /^[0-9]+$/;
      function premier(){        
            number=parseInt(document.forprem.prem.value);
            let p=[]; 
            let texte="";
            let res=""; 
            let tab=[2]; 
            if (!motif.test(number)) {
                dialog.innerHTML =result;
                dialog.style.display='block'; 
                dialog.showModal();
            }else{
                for (let j = 3; j <=number; j++){
                if (j%2!=0) {
                    for (let i=1; i<=j; i++) {
                        if (j%i==0){
                            p.push(i);
                        }
                    }
                    if (p.length==2){
                        tab.push(j);
                    }
                    p.splice(0, p.length);
                }
            }
            for (let k = 0; k < tab.length; k++) {
                texte+=tab[k]+"  &nbsp;  ";
                res=texte.substring(0, texte.length-3);
            }
            res="<h3>La liste des nombres premiers inférieurs à "+
            number+"</h3>"+"<p class='pa'>"+res+"</p>";
            dialog.innerHTML=res+"<button class='btnMenu' onclick=\" dialog.close();dialog.style.display='none';document.forprem.prem.value='';\"><i class='fa fa-close'></i> </button>";
                    dialog.style.display='block'; 
                    dialog.showModal();;
            return tab;            
        }
    }

        function pgcd(){
            let  n1 = parseInt(document.forpgcd.pgcd1.value);
            let  n2 = parseInt(document.forpgcd.pgcd2.value);
            let di="";
            if (!motif.test(n1)||!motif.test(n2)) {
                dialog.innerHTML =result;
                dialog.style.display='block'; 
                dialog.showModal();
            }else{

            if (n2>n1){
                di=n1;
                n1=n2;
                n2=di;
            }

            while(n1>n2&&n1%n2!=0){
                di=n2;
                n2=n1%n2;
                n1=di;
            }

            di=n2;
            n1 = parseInt(document.forpgcd.pgcd1.value);
            n2 = parseInt(document.forpgcd.pgcd2.value);
            let m=(n1*n2)/di;
            dialog.innerHTML = "<h3>pgcd </h3><p class='pa'>pgcd("+n1+" , "+n2+") = "+di+"</p><button class='btnMenu' onclick=\" dialog.close();dialog.style.display='none';document.forpgcd.pgcd2.value='';document.forpgcd.pgcd1.value='';\"><i class='fa fa-close'></i> </button>";
            dialog.style.display='block'; 
                    dialog.showModal();
        }
      }        

        function ppcm(){
            let  n1 = parseInt(document.forppcm.ppcm1.value);
            let  n2 = parseInt(document.forppcm.ppcm2.value);
            let di="";

            if (!motif.test(n1)||!motif.test(n2)) {
                dialog.innerHTML =result;
                dialog.style.display='block'; 
                dialog.showModal();
            }else{
            if (n2>n1){
                di=n1;
                n1=n2;
                n2=di;
            }

            while(n1>n2&&n1%n2!=0){
                di=n2;
                n2=n1%n2;
                n1=di;
            }

            di=n2;
            n1 = parseInt(document.forppcm.ppcm1.value);
            n2 = parseInt(document.forppcm.ppcm2.value);
            let m=(n1*n2)/di;
            dialog.innerHTML = "<h3>ppcm </h3><p class='pa'>ppcm("+n1+" , "+n2+") = "+m+"</p><button class='btnMenu' onclick=\" dialog.close();dialog.style.display='none';document.forppcm.ppcm1.value='';document.forppcm.ppcm2.value='';\"><i class='fa fa-close'></i> </button>";
            dialog.style.display='block'; 
            dialog.showModal();
        }
        }        
        
        function diviseurs() {
            var str = document.fordiv.div.value;
            
            var text ="";
            var  n1 = parseInt(document.fordiv.div.value);
            var msg=document.getElementById('div');
            n1=Math.abs(n1);

              if (!motif.test(str)) {
                    dialog.innerHTML =result;
                    dialog.style.display='block'; 
                    dialog.showModal();
              }else{
                var tabn=[];
                for (var i = 1; i <= n1; i++) {
                    if (n1%i==0) {
                        tabn.push(i);
                    }
                    
                }
                var pre=n1;
                var msg;
                if (tabn.length==2) {msg="<b>Remarque:</b><br>"+pre+" est un nombre premier !"}
                    else{msg="<b>Remarque:</b><br>"+pre+" n'est pas un nombre premier !"}
                for (var j = 0; j < tabn.length; j++) {
                    text+=tabn[j]+", ";
                    var res=text.substring(0, text.length-1);
                }                    
                dialog.innerHTML ="<h3>Les diviseurs du nombre "+n1+" sont:</h3><p class='pa'>D = {"+res+"} <br>"+"le nombre des diviseurs de "+n1+" est: "+tabn.length+"<br>"+msg+"</p>"+
                "<button class='btnMenu' onclick=\" var dialog = document.getElementById('mydialog');dialog.close();dialog.style.display='none';document.fordiv.div.value='';\"><i class='fa fa-close'></i></button>";
                dialog.style.display='block'; 
                    dialog.showModal();
            }            
        }
        
        function composer() {
            number=parseInt(document.forcomp.comp.value);
            let p=[]; 
            let tab=[2];

            if (!motif.test(number)) {
                dialog.innerHTML =result;
                dialog.style.display='block'; 
                dialog.showModal();
            }else{        

            for (let j = 3; j <=number; j++){
                if (j%2!=0) {
                    for (let i=1; i<=j; i++) {
                        if (j%i==0){
                            p.push(i);
                        }
                    }
                    if (p.length==2){
                        tab.push(j);
                    }
                    p.splice(0, p.length);
                }
            }

            let facteurs=[];        
            for (let i = 0; i < tab.length; i++) {
                if (number%tab[i]==0) {
                    facteurs.push(tab[i]);
                    number=number/tab[i];
                    i--;
                }
            }
            number = parseInt(document.forcomp.comp.value);
            let sh="<h3>La décomposition en facteurs premiers</h3><p class='pa'>";
            let t=number;
            for (var i = 0; i < facteurs.length; i++) {            
                sh+=t+"/"+facteurs[i]+"<br>";
                t=t/facteurs[i];
            }
            sh+="1/1<br>";
            let puis=0;
            let rep=facteurs.length;      
            let af=number+" = ";
            if (facteurs.length==1){
                af+=facteurs[0];
                dialog.innerHTML=sh+af+"<br><b>Remarque:</b><br>"+number+" est un nombre premier !</p>"+"<button class='btnMenu' onclick=\" dialog.close();dialog.style.display='none'; dialog.innerHTML='';document.forcomp.comp.value='';\"><i class='fa fa-close'></i></button>";
                dialog.style.display='block'; 
                dialog.showModal();
            }
            if(facteurs.length!=1){
            while (facteurs.length!=0){
                for (var i = 1; i < rep; i++) {
                    if (facteurs[i-1]==facteurs[i]) {
                        puis++;
                    }
                    if (facteurs[i-1]!=facteurs[i]||i==facteurs.length-1) {
                        puis++;
                        af+=facteurs[i-1]+"<sup>"+puis+"</sup>x";
                        break;
                    }
                }facteurs.splice(0, puis);
                puis=0;
            }            
                let af1=af.substring(0, af.length-1);
                dialog.innerHTML=sh+af1+"</span></p>"+
                "<button class='btnMenu' onclick=\" dialog.close();dialog.style.display='none'; dialog.innerHTML='';document.forcomp.comp.value='';\"><i class='fa fa-close'></i></button>";
                dialog.style.display='block'; 
                    dialog.showModal();
            } 
        }
    }
        
        function triangle() {
            number = parseInt(document.fortri.tri.value);
            let tex;
            if (!motif.test(number)) {
                dialog.innerHTML =result;
                dialog.style.display='block'; 
                dialog.showModal();
            }else{
            let L1=[1,1], L=[1,1];
            for (i=1;i<=number;i++) {    
                let nL=[];   
                nL[0]=1;nL[i]=1;
                for (j=1;j<i;j++) {
                    nL[j]=L[j-1]+L[j];    
                }
                L=nL;
                L1[i]=nL.join(" ");
            }

            tex="<h3>Triangle de Pascal</h3><table>";
            for (let j = 0; j < L1.length; j++){
                tex+= "<tr><td>"+L1[j]+"</td></tr>";    
            }
            tex+="</table>";
            dialog.innerHTML =tex+
                "<button class='btnMenu' onclick=\" dialog.close();dialog.style.display='none'; dialog.innerHTML='';document.fortri.tri.value='';\"><i class='fa fa-close'></i></button>";
            dialog.style.display='block'; 
            dialog.showModal();
        }
        }
/*== Fin Les activités mathématiques ==*/


/*calendrier Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche. */
var moi;
    var d = new Date();
    var jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    var mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août",
                "Septembre","Octobre","Novembre","Décembre"];
    if(d.getDate()<10){
      mo='0'+d.getDate();
    }
    var myVar = setInterval(myTimer, 1000);

      function myTimer() { 
      var d = new Date(); 
      document.getElementById("cloc").innerHTML = jours[d.getDay()]+' '+mo+' '+mois[d.getMonth()]+
      ' '+d.getFullYear();      
        document.getElementById("cloc").innerHTML += '  '+d.toLocaleTimeString();
      }

       
      //les quatre saisons d'une année: le printemps, l'été, l'automne et l'hiver.
      var mois = ["printemps", "été", "automne", "hiver"];

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

      if(n%10==0&&n!=0){
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