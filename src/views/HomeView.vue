<script>

</script> 

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

  </head>
  <main>
    
    <div id="bg">
      
  
      <div id="titlesection">
        <h1 id="webtitle">THE</h1>
        <h1 id="webtitle">DIGITAL DIVINE</h1>
        <p id="desctext">Investigating the representations and adaptations of religious elements in modern video games.</p>
        <a href="https://luisarmada.itch.io/the-right-of-revenge" class="myButton">
          <img src="@/assets/itchiologo.png"/>
          Play on itch.io
        </a>
        <p></p>
      </div>
      

        <div class="highlightsection">

          <div class="highlightbox">
            <img src="@/assets/tror_sc1.png"/>
            <p class="boxtype">Video Game</p>
            <p>The Right of Revenge</p>
            <a href="https://luisarmada.itch.io/the-right-of-revenge" class="highlightButton">Play now</a>
          </div>

          <div class="highlightbox">
            <img src="@/assets/hanamenucolor.jpeg"/>
            <p class="boxtype">Design</p>
            <p>Concept Art & Mockups</p>
            <a href="#" class="highlightButton">View the Gallery</a>
          </div> 
        </div>

    </div>
      

    <!--
    <p>This is the website that accompanies the final year major research project “The Digital Divine”. The project investigates how modern video games construct representations of religion through its narrative and worldbuilding and aims to find out how these representations can be improved.</p>

    <p>As part of this project, an original game was created: The Right to Revenge.</p>

    <p>‘Defy destiny and take control in this tale of revenge and liberation. Join Hana as she navigates her double life as a Bearer and a high school student in this immersive visual novel!’ </p>

    <p>DISCLAIMER: This game is a demo and is not a complete game. For further information on the game and its development process, click here.</p>
    <iframe id="gamelink" frameborder="0" src="https://itch.io/embed-upload/10512734?color=0f0f0f" allowfullscreen="" width="1024" height="596"><a href="https://luisarmada.itch.io/the-right-of-revenge">Play The Right of Revenge on itch.io</a></iframe>

    -->
        
  </main>
</template>

<style scoped>

  #bg{
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    
    overflow: hidden;
    background-image: url('@/assets/priestcathedral.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
  }

  .highlightsection{
    position: absolute;
    right: 5%;
    width: 40vh;
    top: 50%;
    transform: translate(0, -50%);
    height: 70vh;
  }

  .highlightsection .highlightbox {
    
    margin: 10% 5% 5% 5%;
    height: 45%;
    background-color: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius:10px;
    padding: 7px;
  }

  .highlightbox img {
    width: 100%;
    height: 65%;
    left: 5px;
    right: 5px;
    border-radius: 10px;
  }

  .highlightbox .boxtype {
    font-size: 1.8vh;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    transform: translateY(10%);
    color:rgb(117, 198, 226);
    white-space: nowrap;
  }

  .highlightbox p {
    font-size: 2.7vh;
    margin-left: 20px;
    margin-top: 0;
    font-weight: 700;
    white-space: nowrap;
  }


  #logo{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    pointer-events: none;
    user-select: none;
    z-index: -10;
  }

  #titlesection{
    position: absolute;
    bottom: 0px;
    height: 55%;
    left: 0;
    padding-left: 9%;
    width: 40%;
    text-align: left;
    overflow: hidden;
  }

  #titlesection h1{
    font-family: "Jersey 25", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 5.4vw;
    color: transparent;
    line-height: 40%;
    text-align: left;
    white-space: nowrap;

    -webkit-text-stroke: 0.08vw white;
  }



  .myButton {
    background-color:#51739c;
    border-radius:10px;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family: "Reddit Mono", monospace;
    font-size: 0.7vw;

    font-weight: 600;
    margin-top: 1.5vw;

    padding:0.7vw 1.8vw;
    text-decoration:none;
  }
  .myButton:hover {
    background-color:#416c9e;
  }
  .myButton:active {
    position:relative;
    top:1px;
  }
  .myButton img {
    height: 1.1vw;
    margin-right: 7px;
    margin-top: -10px;
    transform: translate(0, 20%);
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }


  .highlightButton {
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius:10px;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family: "Reddit Mono", monospace;
    font-size: 1.4vh;

    font-weight: 600;

    position: absolute;
    bottom: 0;
    right: 5%;
    transform: translate(0, 50%);

    padding:1.5vh 3.2vh;
    text-decoration:none;

    margin-top: 30px;
  }
  .highlightButton:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .highlightButton:active {
    bottom: -1%;
  }

  #desctext {
    font-size: 1vw;
    margin-right: 10%;
    margin-top: 1.9vw;
    margin-left: 0;
    color: white;

    font-family: "Reddit Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 500;
  }

  b {
    font-family: Arial Black, Helvetica, sans-serif;
  }

  h1{
    text-align: center;
    margin-top: 40px;
  }

  #gamelink {
    margin-left: 50%;
    margin-top: 20px;
    transform: translate(-50%, 0);
  }
</style>