import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = () => import('components/main/main')
const Anime = () => import('components/anime/anime')
const Drama = () => import('components/drama/drama')
const Country = () => import('components/country/country')
const Music = () => import('components/music/music')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/anime',
      name: 'Anime',
      component: Anime
    },
    {
      path: '/drama',
      name: 'Drama',
      component: Drama
    },
    {
      path: '/country',
      name: 'Country',
      component: Country
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    }
  ]
})
