const NotFoundComponent = () => import(/* webpackChunkName: "404" */'pages/notFound/notFound')
const login = () => import(/* webpackChunkName: "mall-login" */'pages/login/login')
const register = () => import(/* webpackChunkName: "mall-register" */'pages/register/register')
const home = () => import(/* webpackChunkName: "mall-home" */'pages/home/home')


export default [ 
    {path:"/login",component:login,meta:{hideFooter:true}},
    {path:"/register",component:register,meta:{hideFooter:true}},
    {path:"/home",component:home},
    {path:"/",redirect:"/home"},
    {path:"*",component:NotFoundComponent}

]