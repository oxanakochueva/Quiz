<template>
<f7-page name="test-quiz">
  <f7-card class="quiz-card">
    <f7-block strong>
      <f7-block-title>{{ quiz.question }}</f7-block-title>
      <f7-list form >
        <f7-list-item
          v-for="(quiz, index) in quizes"
          v-show="index === questionindex">
        </f7-list-item>
        <f7-list-item
          v-for="answer in quiz.incorrect_answers"
          v-bind:name="index" v-model="answers[index]"
          :key="index"
          v-bind:value="answer">{{answer}}
        </f7-list-item>
        <!-- <f7-list-item v-for="quiz in quizes" :title="incorrect_answers.text" v-bind:name="index" v-model="answers[index]" v-bind:value="answer">{{answer}}
        </f7-list-item> -->
      </f7-list>
      <f7-block strong >
        <f7-button v-if="questionindex < quizes.length" v-on:click="next" class="col" small round fill>Далее</f7-button>
      </f7-block>
      <f7-block strong>
        <span v-show="questionindex == quizes.length">
          <p>Your Total score is {{score}} / {{quizes.length}}</p>
        </span>
      </f7-block>
    </f7-block>
  </f7-card>
</f7-page>
</template>

<script>
import store from "../store/store.js";

export default {
  name: 'app',
  data : function (){
      return{
        questionindex: 0,
        quizes: quiz_questions,
answers:Array(quiz_questions.length).fill(''),
      }
  },
   methods: {
    // Go to next question
    next: function() {
      this.questionindex++;
    },
 },
 computed:{
    score: function() {
      var total = 0;
        for (var i =0; i <this.answers.length; i++) {
          if(this.answers[i]==this.quizes[i].correct_answer){
            total +=1;
          }
        }
      return total;
  }
 }
}
</script>
