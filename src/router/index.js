import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/view/Home.vue'
import NotFound from "@/view/NotFound";
import Login from "@/view/Login";
import Register from "@/view/Register";
import OnlineShopping from "@/view/OnlineShopping";
import FiftyToneMap from "@/view/FiftyToneMap";
import Forum from "@/view/Forum";
import MyFavourite from "@/view/MyFavourite";
import MyCart from "@/view/MyCart";
import OnlineVideo from "@/view/OnlineVideo";
import MySelf from "@/view/MySelf";
import MyBlog from "@/view/MyBlog";
import Article from "@/view/Article";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/404',
        name: 'Notfound',
        component: NotFound
    },
    {
        path: '*', // 此处需特别注意置于最底部
        redirect: '/404'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
    ,
    {
        path: '/onlineshopping',
        name: 'OnlineShopping',
        component: OnlineShopping
    },
    {
        path: '/fiftytonemap',
        name: 'FiftyToneMap',
        component: FiftyToneMap
    },
    {
        path: '/forum',
        name: 'Forum',
        component: Forum
    },
    {
        path: '/myfavourite',
        name: 'MyFavourite',
        component: MyFavourite
    },
    {
        path: '/mycart',
        name: 'MyCart',
        component: MyCart
    },
    {
        path: '/onlinevideo',
        name: 'OnlineVideo',
        component: OnlineVideo
    },
    {
        path: '/myself',
        name: 'MySelf',
        component: MySelf
    },
    {
        path: '/myblog',
        name: 'MyBlog',
        component: MyBlog
    },
    {
        path: '/article',
        name: 'Article',
        component: Article
    }
]
const index = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})  

export default index