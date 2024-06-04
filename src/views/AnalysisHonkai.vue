<script setup>

</script>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  </head>
  <main>
    <div class="row">
      <div class="column">
        <img src="@/assets/gallery/daymockup.png" />
        <img src="@/assets/gallery/hana.png" />
        <img src="@/assets/gallery/mitsuru.png" />
        <img src="@/assets/gallery/kagurasword.png" />
        <img src="@/assets/gallery/golem.png" />
      </div>
      <div class="column">
        <img src="@/assets/gallery/nightmockup.png" />
        <img src="@/assets/gallery/principal.png" />
        <img src="@/assets/gallery/shinobu.png" />
        <img src="@/assets/gallery/genesius.png" />
        <img src="@/assets/gallery/scarecrow.png" />
      </div>
      <div class="column">
        <img src="@/assets/gallery/hanamacyneutral.png" />
        <img src="@/assets/gallery/tatsuo.png" />
        <img src="@/assets/gallery/hinata.png" />
        <img src="@/assets/gallery/kaguranosword.png" />
        
      </div> 
      <div class="column">
        <img src="@/assets/gallery/hanamacysmile.png" />
        <img src="@/assets/gallery/kazuha.png" />
        <img src="@/assets/gallery/misskurosawa.png" />
        <img src="@/assets/gallery/werewolf.png" />
        <img src="@/assets/gallery/gorilla.png" />
      </div> 
    </div>
  </main>
</template>

<style scoped>

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  cursor: pointer;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>