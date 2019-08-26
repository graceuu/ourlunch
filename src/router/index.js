import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import StartFamily from '../components/StartFamily'
import StartComplete from '../components/StartComplete'
import JoinFam from '../components/JoinFam'
import Main from '../components/Main'
import ChoiceLunch1 from '../components/ChoiceLunch1'
import ChoiceLunch2 from '../components/ChoiceLunch2'
import ChoiceLunchResult from '../components/ChoiceLunchResult'
import Restaurant from '../components/Restaurant'
import FamMembers from '../components/FamMembers'
import FamRestaurants from '../components/FamRestaurants'

// peace study
import Study from '../components/Study'

// ekim Test
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/study',
      name: 'Study',
      component: Study
    },
    {
      path: '/startFamily',
      name: 'StartFamily',
      component: StartFamily
    },
    {
      path: '/startComplete',
      name: 'StartComplete',
      component: StartComplete
    },
    {
      path: '/joinFam',
      name: 'JoinFam',
      component: JoinFam
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/choiceLunch1',
      name: 'ChoiceLunch1',
      component: ChoiceLunch1
    },
    {
      path: '/choiceLunch2',
      name: 'ChoiceLunch2',
      component: ChoiceLunch2
    },
    {
      path: '/choiceLunchResult',
      name: 'ChoiceLunchResult',
      component: ChoiceLunchResult
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    },
    {
      path: '/famMembers',
      name: 'FamMembers',
      component: FamMembers
    },
    {
      path: '/famRestaurants',
      name: 'FamRestaurants',
      component: FamRestaurants
    }
  ]
})
