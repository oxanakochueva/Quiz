<template>
<f7-page name="first-quiz">
  <f7-navbar title="Какая вы феечка Винкс" back-link="Back"></f7-navbar>
  <f7-card class="quiz-card">
    <f7-block strong data-page="page1">
      <f7-block-title>Должен быть номер вопроса и сам вопрос</f7-block-title>
      <f7-list form>
        <f7-list-item v-for="n in 3" :key="n" radio name="my-radio" :checked="n === 1" :value="n" :title="'Нужно найти ключи для вопросов ' + n"></f7-list-item>
      </f7-list>
      <f7-block strong>
        <f7-button class="col" small round fill>Далее</f7-button>
      </f7-block>
    </f7-block>
    <f7-block strong data-page="page2">
      <f7-block-title>Должен быть номер вопроса и сам вопрос</f7-block-title>
      <f7-list form>
        <f7-list-item v-for="n in 3" :key="n" radio name="my-radio" :checked="n === 1" :value="n" :title="'" Это вторая страница" ' + n"></f7-list-item>
        </f7-list>
        <f7-block strong>
          <f7-button class="col" small round fill><a href="#page3">Далее</a></f7-button>
<!--           <question v-bind:question=' question'>
          </question>
          <answers v-bind:answers='object' v-on:nextQuestion='getQuestion($event)'></answers> -->
    </f7-block>
    </f7-block>
  </f7-card>
</f7-page>
</template>

<style >
.quiz-card {
  width: 60vw;
  margin: 0 auto;
  padding: 5%;
  color: #000000;
}
</style>

<script>
// import Question from './Question.vue'
// import Answers from './Answers.vue'
export default {
  // components:{
  //   question: Question,
  //   answers: Answers
  // },
  // data: function(){
  // 	return{
  // 			questions: this.$store.state.questions,
  // 			question:'',
  // 			object: {},
  // 			result:{
  // 				corrects:0,
  // 				incorrects:0
  // 			},
  // 			gameActive: true
  // 		}
  // },
  // methods:{
  // 	getQuestion: function(answer){
  // 		if(answer){
  // 		this.result.corrects++
  // 		}
  // 		else if(answer == false){
  // 		this.result.incorrects++
  // 		}
  // 		else if(answer == null){}
  // 		if(this.questions[0]){
  // 		this.gameActive = true;
  // 		this.object = this.questions.shift();
  // 		this.question = this.object.question;
  // 		}
  // 		else{
  // 		this.$store.commit('setResults', this.result);
  // 		this.$router.push({name: 'results'})
  // 		}
  // 	}
  // },
  // created(){
  // 	this.getQuestion()
  // 			console.log(this.questions)
  // }
}
</script>
