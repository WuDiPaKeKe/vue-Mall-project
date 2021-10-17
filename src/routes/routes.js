const NotFoundComponent = () => import(/* webpackChunkName: "404" */'pages/notFound/notFound')


export default [
    {path:"*",component:NotFoundComponent}

]