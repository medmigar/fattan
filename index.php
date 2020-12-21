<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Page principale</title>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" href="images/mad.ico"sizes="20x20">
  <!--<link rel="stylesheet" href="web/css/style_hor.css">  
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/styleMenu.css">
  <link rel="stylesheet" href="css/style1.css">
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
</head>
<body>
	<div id="conteneur">
    <?php require_once'/parties/header.php'; ?>
		<?php require 'menus/menu_principal.php'; ?>
    <article>
      <header>
        <h4 style="color:#dbdad9;background: -webkit-gradient(linear, left top, left bottom, from(#A9A9A9), to(#7A7A7A));text-shadow: 2px 2px 3px #000;padding: 5px;text-align: center; max-width: 100%;">
          <span id="jour" style="color:#dbdad9;text-shadow: 2px 2px 3px #000;padding: 5px;text-align: center;">
          </span>          
          <?php
            echo date("d - m - Y");
          ?>
          <br>
          <span id="cloc" style="color:#dbdad9;text-shadow: 2px 2px 3px #000;padding: 5px;text-align: center;">
          </span>
          <div id="bloc"></div>     
          <marquee direction="left" height="" width="100%" behavior="alternate" onMouseOver='this.stop()' onMouseOut='this.start()' scrollAmount='1' scrollDelay='20'>
            Actualités أخبار news 
          </marquee>      
        </h4>     
        <script>
          var myVar = setInterval(myTimer, 1000);
          var d = new Date();

          function myTimer() {
            var d = new Date();
            document.getElementById("cloc").innerHTML = '&#9956;'+d.toLocaleTimeString()+" الرباط"+'&#9956;';

          }            
          var jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
          document.getElementById("jour").innerHTML = jours[d.getDay()];
        </script>           
        &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958;
        <h1>
          <details>
            <summary  style="cursor: pointer;display: inline;">
              <i class="fa fa-at"></i> Informations de contact
            </summary>
            <span>
              <a href="mailto:tardamed@gmail.com" style="text-decoration: none;color: #fff;">
                &#9993; tardamed@gmail.com
              </a>
            </span> 
          </details>
          <br>
          <details>
            <summary style="cursor: pointer;display: inline;">Mise à jour</summary>
            <span> 
              Mise à jour le: <?php echo date("d - m - Y");?>      
            </span>
          </details>            
          <br>
          <details>
            <summary id="but1" style="cursor: pointer;display: inline;color: #fff;" onmouseout="ap();">
              RAGIM Mohamed
            </summary>
          </details>
        </h1>
            &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958;             
      </header>                
      <p id="p1" style="text-align: center;display: none;">
        <img src="images/med2.jpg" alt="med" class="im1" style="max-width:100%;height:auto;border-radius: 50%;border: solid 3px #d6e498;" >
        <br>
        <img src="images/med.jpg" alt="med" class="im1" style="max-width:100%;height:auto;border-radius: 50%;border: solid 3px #d6e498;" >
        <br>
        <span>
          <a href="/site/cvMed/cv_med/cvMed.php" style="background-color: green;border-bottom: 3px solid #fff;font-weight: bold;font-size: 17px;color: #fff;"> 
            &nbsp;CV&nbsp; 
          </a>
        </span>
      </p>
    </article>
    <img id="ain" src="images/004.jpg" alt="med" class="im1" style="display: block;margin: auto;width: 100%;">
    <FRAMESET cols="200,*" onResize="if (navigator.family == 'nn4') window.location.reload()"> 
  <FRAME src="index.html" name="treeframe" > 
  <FRAME SRC="titre.htm" name="basefrm"> 
</FRAMESET><NOFRAMES></NOFRAMES>
    <?php require'/parties/footer.php' ?>
	</div>
  <script src="js/jquery-min.js"></script>
  <script src="js/script.js"></script>
  <script>

    $(function(){
      $(function(){
        $("#but1").click(function(){
          $("#but1").css({"color":"#f00"});
          $("#ain").slideToggle(5000);
          $("#p1").toggle(5000);          
        });
      });
    });

    function ap(){
      $(function(){
        $(function(){
          $("#but1").css({"color":"#fff"});
        });
      });
    }
    
            var texte=[];
            var actual_texte = 0;
    function changeMessage(){

texte[0]='<?php echo date("h:i");?> الرباط';
            texte[1]='<?php echo date("h:i");?> مكة';
                 
document.getElementById("bloc").innerHTML = texte[actual_texte];
        
        actual_texte++;

        if(actual_texte >= texte.length){
          actual_texte = 0;
          
           }

        
        }     
        setInterval("changeMessage()",2000);          
  </script> 
</body>
</html>