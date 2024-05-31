<script setup>

</script>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  </head>
  <main>
    <img class="logo" src="@/assets/digitaldivine.png" width="100%" height="auto" />
    <p>This is the website that accompanies the final year major research project “The Digital Divine”. The project investigates how modern video games construct representations of religion through its narrative and worldbuilding and aims to find out how these representations can be improved.</p>

    <p>As part of this project, an original game was created: The Right to Revenge.</p>

    <p>‘Defy destiny and take control in this tale of revenge and liberation. Join Hana as she navigates her double life as a Bearer and a high school student in this immersive visual novel!’ </p>

    <p>DISCLAIMER: This game is a demo and is not a complete game. For further information on the game and its development process, click here.</p>
    <iframe id="gamelink" frameborder="0" src="https://itch.io/embed-upload/10512734?color=0f0f0f" allowfullscreen="" width="1024" height="596"><a href="https://luisarmada.itch.io/the-right-of-revenge">Play The Right of Revenge on itch.io</a></iframe>

    <h1>Glossary</h1>

<p>The following is a list of terms/names found in The Right to Revenge and simple definitions.</p>

<p><b><i>Bearer </i></b>– A human who has entered a Binding Pact with a Messenger. They receive supernatural abilities and are dutybound to exterminate the Lingering.</p>

<p><b><i>Binding Pact</i></b> – A cosmic contract between a human and a Messenger that transcends time and space. It stipulates that the human will use their newfound gifts to exterminate the Lingering, and the Messenger will supply said gifts as well as other blessings. This contract cannot be broken by either party.</p>

<p><b><i>Messenger</i></b> – A being of divine nature that answers to The Original Patron. They wield their Authority to aid mankind in the struggle against the Lingering, and are tasked to find Bearers.</p>

<p><b><i>Authority</i></b> – The signature power of a Messenger.
For example, Genesius has the Authority of Replication, which allows Hana to conjure copies of items, primarily her knives.</p>

<p><b><i>Lingering</i></b> – Creatures that feed on humanity’s negative emotions. They are shadows at day, but by Night they manifest their physical forms. They are pieces that make up The Primordial Beast.</p>
<p>The Lingering have a ranking that defines their strength and size.</p>

               <p><i><u>Minor Lingering</u></i> – The weakest form of a Lingering.</p>

               <p><i><u>Major Lingering</u></i> – The form a Lingering takes when it has amassed power over many years. Can influence human behaviour in a large area to make it easier to feed.</p>

               <p><i><u>Superior Lingering</u></i> – The strongest form of a Lingering. Their power can rival Fate’s Design, and they can influence behaviour on a citywide scale.</p>

<p><b><i>The Original Patron (Her Opulence)</i></b> – The Master of the Messengers, and the Guardian of Humanity. She is revered by many and has a devoted following, though they are scattered in the modern age. She is the Source of all life and creation.</p>

               <p><b><i>Her Gaze</i></b> – Her first Gift to humanity, the Sun. It is physical manifestation of a promise that She will never leave them to fend for themselves.</p>

<p><b><i>The Heavens</i></b> – The dwelling of all Messengers and The Original Patron. It is found in an alternate dimension, inaccessible to humanity.</p>

<p><b><i>The Night</i></b> – The time at which Lingering manifest their physical forms.</p>

<p><b><i>Fate’s Design (Fate)</i></b> – Akin to Destiny. The future is foretold to The Original Patron, and it is set on its path by Fate, immovable and insistent. Her Opulence has no choice but to see Fate through.</p>
<p>It should be noted that a Bearer’s wish can alter Fate’s course, and Her Opulence must chart a new path forward if it happens.</p>

<p><b><i>The Hunt</i></b> – The act of exterminating the Lingering.</p>

<p><b><i>Tiamat (The Primordial Beast)</i></b> – The goddess that rivalled The Original Patron, said to be ‘Chaos incarnate’. She is the antithesis to Her Opulence and brought suffering and destruction where she walked.</p>
<p>In a cataclysmic battle, Tiamat was sealed away in an alternate dimension, and was split into innumerable fragments to further weaken her.</p>

<p><b><i>The Opulent Jades</i></b> – A faction wholly devoted to The Original Patron. They operate worldwide and have appointed Bearers as either Brothers or Sisters to try and bring more followers to their faith.</p>
    
  </main>
</template>

<style scoped>

  @font-face {
    font-family: 'VCR OSD MONO';
    src: url(@/assets/VCR_OSD_MONO.ttf);
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8em;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
    color: black;
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