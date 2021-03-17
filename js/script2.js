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
                if(arr[i].length>=9){mybody.innerHTML ="<p style='width: 90%;text-align:center;font-size:18px;'>Attention!<br>"+arr[i]+": n'est pas un mot</p> ";modal.style.display='block';break;}                
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