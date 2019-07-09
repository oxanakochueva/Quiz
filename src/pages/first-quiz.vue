<template>
<f7-page name="first-quiz">
  <f7-navbar title="Какая вы феечка Винкс" back-link="Back"></f7-navbar>
  <f7-card class="quiz-card">
    <f7-block  v-for="(question, index) in questions" :key="index" strong data-page="page1">
      <f7-block-title>{{ question.text }}</f7-block-title>
      <f7-list form>
        <f7-list-item v-for="(response, index) in question.responses" :key="index" radio name="my-radio" :value="response.text" :title="response.text"></f7-list-item>
      </f7-list>
    </f7-block>
    <f7-button class="col" small round fill>Закончить</f7-button>
  </f7-card>
</f7-page>
</template>

<style >
.quiz-card {
  /* width: 60vw;
  margin: 0 auto;
  padding: 5%;
  color: #000000; */
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      questions: "getQuestions"
    })
  },
  created(){
    console.log(this.questions);

  }
}
</script>
