<template>
<f7-page name="second-quiz" class="questionBox" id="2nd-quiz">
  <f7-navbar title="Какая вы феечка Винкс" back-link="Back"></f7-navbar>
  <f7-card class="questionContainer" v-if="questionIndex<quiz.questions.length" v-bind:key="questionIndex">
    <f7-block-title class="titleContainer title">{{ quiz.questions[questionIndex].text }}</f7-block-title>
    <f7-list class="optionContainer">
      <f7-list-item class="option" v-for="(response, index) in quiz.questions[questionIndex].responses" @click="selectOption(index)" :class="{ 'is-selected': userResponses[questionIndex] == index}" :key="index">
        {{ index | charIndex }}. {{ response.text }}
      </f7-list-item>
    </f7-list>
    <f7-footer class="questionFooter">
      <f7-navbar class="pagination" role="navigation" aria-label="pagination">
        <f7-button class="button" :class="(userResponses[questionIndex]==null)?'':'is-active'" v-on:click="next();" :disabled="questionIndex>=quiz.questions.length">
          {{ (userResponses[questionIndex]==null)?'Skip':'Next' }}
        </f7-button>
      </f7-navbar>
    </f7-footer>
  </f7-card>
  <f7-block v-if="questionIndex >= quiz.questions.length" v-bind:key="questionIndex" class="quizCompleted has-text-centered">
    <f7-block class="icon">
      <i class="fa" :class="score()>3?'fa-check-circle-o is-active':'fa-times-circle'"></i>
    </f7-block>
    <f7-block-header class="title">
      You did {{ (score()>7?'an amazing':(score()<4?'a poor':'a good')) }} job!
    </f7-block-header>
    <p class="subtitle">
      Total score: {{ score() }} / {{ quiz.questions.length }}
    </p>
  </f7-block>
</f7-page>
</template>

<script>
import Vue from 'vue'
import store from "../store/store.js";

export default {
  data() {
    return {
      quiz: store.getters.getQuiz,
      name: "second-quiz",
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false
    },
    userResponseSkelaton = Array(quiz.questions.length).fill(null);
  },
methods: {
    selectOption: function(index) {
      Vue.set(this.userResponses, this.questionIndex, index);
    },
    next: function() {
      if (this.questionIndex < this.quiz.questions.length)
        this.questionIndex++;
    },
  },
  computed: {
    score: function() {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[
            this.userResponses[i]] !==
          "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct) {
          score = score + 1;
        }
      }
      return score;

      return this.userResponses.filter(function(val) {
        return val
      }).length;
    }
  },
};
</script>
