import HomePage from './pages/home.vue';
import FirstQuizPage from './pages/first-quiz.vue';
import SecondQuizPage from './pages/second-quiz.vue';
import ThirdQuizPage from './pages/third-quiz.vue';
import TestQuizPage from './pages/test-quiz.vue';
import BlankQuizPage from './pages/quiz-blank.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/first-quiz/',
    name: 'first-quiz',
    component: FirstQuizPage
  },
  {
    path: '/second-quiz/',
    name: 'second-quiz',
    component: SecondQuizPage
  },
  {
    path: '/third-quiz/',
    name: 'third-quiz',
    component: ThirdQuizPage
  },
  {
    path: '/test-quiz/',
    name: 'test-quiz',
    component: TestQuizPage
  },
  {
    path: '/quiz-blank/',
    name: 'quiz-blank',
    component: BlankQuizPage
  }
];
