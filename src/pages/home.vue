<template>
<f7-page>
  <!-- карточки -->
  <f7-block-header class="welcome">Welcome to gallery of failed attempts
    <p>I tried to do everything and I didn't do anything sensible.</p>
    <p class="light">Okay, it was my first steps on this stack)</p>
  </f7-block-header>
    <f7-list-item link="/first-quiz/">
      <f7-card
      class="demo-card-header-pic"
      title="Quiz #1 --- Failed :("
      content="Trying link with anchor links "
      style="background-color:royalblue">
      </f7-card>
    </f7-list-item>
    <f7-list-item link="/second-quiz/">
      <f7-card
      class="demo-card-header-pic"
      title="Quiz #2 --- Failed :("
      content="Trying to reduse using framework7 to simplify understanding"
      style="background-color:royalblue">
      </f7-card>
    </f7-list-item>
    <f7-list-item link="/quiz-blank/">
      <f7-card
      class="demo-card-header-pic"
      title="Quiz #3 --- Failed :("
      content="Trying to use smart-select"
      style="background-color:royalblue">
      </f7-card>
    </f7-list-item>
    <f7-list-item link="/third-quiz/">
      <f7-card
      class="demo-card-header-pic"
      title="Quiz #4 --- Failed :("
      content="Handwriten list"
      style="background-color:royalblue">
      </f7-card>
    </f7-list-item>
    <f7-list-item link="/test-quiz/">
      <f7-card
      class="demo-card-header-pic"
      title="Quiz #5 --- Failed :("
      content="Trying to use Vuex store(store replaced with quiz #2)"
      style="background-color:royalblue">
      </f7-card>
    </f7-list-item>

</f7-page>
</template>

<style>

  .list ul {
    width: 70vw;
    margin: 0 auto;
  }
  li {
    list-style: none;
  }
  .demo-card-header-pic {
    height: 50vh;
    width: 60vw;
    margin: 10% auto;
  }
  .card {
    font-weight: bold;
    color: #ffffff;
  }
  .welcome {
    font-size: 30px;
    font-weight: bold;
  }
  .light {
    color: lightgray
  }

</style>
<script>
export default {}
</script>
