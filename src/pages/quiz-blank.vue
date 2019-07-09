<template>
<f7-page name="quiz-blank">
  <f7-navbar title="Какая вы феечка Винкс" back-link="Back"></f7-navbar>
  <f7-card class="quiz-card">
    <f7-tab strong id="question-1" class="page-content tab" tab-active>
      <f7-block-title>Должен быть номер вопроса и сам вопрос</f7-block-title>
      <f7-list form>
        <f7-list-item>
              <f7-list-item radio value="apple" name="my-radio">Apple</f7-list-item>
              <f7-list-item radio value="apple" name="my-radio">Apple</f7-list-item>
              <f7-list-item radio value="apple" name="my-radio">Apple</f7-list-item>
              <f7-list-item radio value="apple" name="my-radio">Apple</f7-list-item>
              <f7-list-item radio value="apple" name="my-radio">Apple</f7-list-item>
        </f7-list-item>
        <f7-block strong>
          <f7-button v-bind:key="tab"  tab-link="#question-2" class="col" small round fill>Далее</f7-button>
        </f7-block>
      </f7-list>
      </f7-tab>


    <f7-tab strong id="question-2" class="page-content tab">
      <f7-block-title>Второй вопрос</f7-block-title>
      <f7-list form>
        <f7-list-item v-for="n in 3" :key="n" radio name="my-radio" :checked="n === 1" :value="n" :title="'" Это вторая страница" ' + n"></f7-list-item>
        </f7-list>
        <f7-block strong>
          <f7-button class="col" small round fill><a href="#page3">Далее</a></f7-button>
    </f7-block>
  </f7-tab>
  </f7-card>
</f7-page>
</template>

<style >
/* .quiz-card {
  width: 60vw;
  margin: 0 auto;
  padding: 5%;
  color: #000000;
} */
</style>

<script>

export default {
}
</script>
