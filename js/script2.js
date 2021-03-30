/*== Début Compteur ==*/
      var span = document.getElementsByClassName("close")[0];
        var modal = document.getElementById("myModal");
        var mybody= document.getElementById("mybody");
        function compter(){
             var str = document.dment.fich.value;
            var n=0,m="";
            str=str.trim();
            var arr = str.split(" ");
            for(var i=0;i<arr.length;i++){
                if(arr[i].length==1){m+=" - "+arr[i];}
                if(arr[i]==""){n++;}
                if(arr[i].length>=9){
                    mybody.innerHTML ="<p style='width: 90%;text-align:center;font-size:18px;'>Attention!<br>"+arr[i]+": n'est pas un mot</p> ";
                    modal.style.display='block';break;}                
            }
            document.getElementById("resul").innerHTML = "Si on compte ces caractères <span style='font-size:25px;'>&#9758;</span> "+m+" <span style='font-size:25px;'>&#9756;</span> Ce document contient: "+(arr.length-n)+" mots";
        }

     
function affDmt() { 
    var fileInput = document.querySelector('#file');
    if(fileInput.files[0]==undefined){mybody.innerHTML ="<p style='width: 90%;text-align:center;font-size:18px;'>On doit choisir un fichier</p>";modal.style.display = "block";}else{
        var reader = new FileReader();
        var nom=fileInput.files[0].name;
        var ary = nom.split(".");
        if(ary[1]=="php"||ary[1]=="html"||ary[1]=="txt"){
            reader.onload = function() {
         document.querySelector('#lab').textContent='Contenu du fichier "' + fileInput.files[0].name + '" :\n\n' + reader.result;};
        }else{mybody.innerHTML ="<p style='width: 90%;text-align:center;font-size:18px;'> L'extention du fichier n'est pas valide</p>";modal.style.display='block';
        }
    }     
    reader.readAsText(fileInput.files[0]);   
    };

    span.onclick = function() {
        modal.style.display = "none";    
    }
    /*== Fin Compteur ==*/
    

    /*== Début Les activités mathématiques*/ 
      let result="<h3 style='width:90%;border-radius: 0;'><span style='font-size:30px;'>&#127799;</span></h3><p  class='pa' style='width:90%;'>Caractère invalide !<br>Entrer dans ce champ un nombre entier positif</p>";       
      let number=0;
        let motif = /^[0-9]+$/;
      function premier(){        
            number=parseInt(document.forprem.prem.value);
            let p=[]; 
            let texte="";
            let res=""; 
            let tab=[2]; 
            if (!motif.test(number)) {
                mybody.innerHTML =result;
                modal.style.display='block';
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
            res="<h3 style='width:90%;border-radius: 0;'>La liste des nombres premiers inférieurs à "+
            number+"</h3>"+"<p class='pa' style='width:90%;'>"+res+"</p>";
            mybody.innerHTML=res;
            modal.style.display='block';
            return tab;            
        }
    }

    function pgcd(){
            let  n1 = parseInt(document.forpgcd.pgcd1.value);
            let  n2 = parseInt(document.forpgcd.pgcd2.value);
            let di="";
            if (!motif.test(n1)||!motif.test(n2)) {
                mybody.innerHTML =result;
                modal.style.display='block';
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
            mybody.innerHTML = "<h3 style='width:90%;border-radius: 0;'>pgcd </h3><p class='pa' style='width:90%;'>pgcd("+n1+" , "+n2+") = "+di+"</p>";
            modal.style.display='block';
        }
      }        

        function ppcm(){
            let  n1 = parseInt(document.forppcm.ppcm1.value);
            let  n2 = parseInt(document.forppcm.ppcm2.value);
            let di="";

            if (!motif.test(n1)||!motif.test(n2)) {
                mybody.innerHTML =result;
                modal.style.display='block';
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
            mybody.innerHTML = "<h3 style='width:90%;border-radius: 0;'>ppcm </h3><p class='pa' style='width:90%;'>ppcm("+n1+" , "+n2+") = "+m+"</p>";
            modal.style.display='block';
        }
        }        
        
        function diviseurs() {
            var str = document.fordiv.div.value;
            
            var text ="";
            var  n1 = parseInt(document.fordiv.div.value);
            var msg=document.getElementById('div');
            n1=Math.abs(n1);

              if (!motif.test(str)) {
                    mybody.innerHTML =result;
                    modal.style.display='block';
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
                mybody.innerHTML ="<h3 style='width:90%;border-radius: 0;'>Les diviseurs du nombre "+n1+" sont:</h3><p class='pa' style='width:90%;'>D = {"+res+"} <br>"+"le nombre des diviseurs de "+n1+" est: "+tabn.length+"<br>"+msg+"</p>";
                modal.style.display='block';
            }            
        }
        
        function composer() {
            number=parseInt(document.forcomp.comp.value);
            let p=[]; 
            let tab=[2];

            if (!motif.test(number)) {
                mybody.innerHTML =result;
                modal.style.display='block';
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
            let sh="<h3 style='width:90%;border-radius: 0;'>La décomposition en facteurs premiers</h3><p class='pa' style='width:90%;'>";
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
                mybody.innerHTML=sh+af+"<br><b>Remarque:</b><br>"+number+" est un nombre premier !</p>";
                modal.style.display='block';
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
                mybody.innerHTML=sh+af1+"</span></p>";
                modal.style.display='block';
            } 
        }
    }
        
        function triangle() {
            number = parseInt(document.fortri.tri.value);
            let tex;
            if (!motif.test(number)) {
                mybody.innerHTML =result;
                modal.style.display='block';
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

            tex="<h3 style='width:90%;border-radius: 0;'>Triangle de Pascal</h3><table style='width:90%;'>";
            for (let j = 0; j < L1.length; j++){
                tex+= "<tr><td>"+L1[j]+"</td></tr>";    
            }
            tex+="</table>";
            mybody.innerHTML =tex;
            modal.style.display='block';
        }
        }
/*== Fin Les activités mathématiques ==*/



