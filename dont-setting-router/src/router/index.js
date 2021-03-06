import Vue from 'vue'
import Router from 'vue-router'
import { humpToLine } from '@/utils/util'
Vue.use(Router)
let routes = []

const routerArr = require.context('@/views', true, /\.vue$/).keys()
const insert = (url) => {
  let urlArr = url.slice(2).split('/')
  //移除vue文件
  urlArr.pop()
  let node = routes
  let path = ''
  urlArr.forEach((item, index) => {
    let humpItem = item
    item = humpToLine(item)
    path = index ? path : ''
    if (node.some((val) => val.name === item)) {
      for (let i = 0; i < node.length; i++) {
        if (node[i].name === item) {
					console.log(i)
					
          path += `/${humpItem}`
          node = node[i].children
          return true
        }
      }
    } else {
      path += `/${humpItem}`
      console.log(`${path}/${humpItem}.vue`)
      let componentPath = `${path}/${humpItem}.vue`
      node.push({
        path: index ? item : `/${item}`,
        name: item,
        component: () => import(`@/views${componentPath}`),
        children: [],
      })
      node = node[node.length - 1].children
    }
  })
}
routerArr.forEach((element) => {
  insert(element)
})

//加上默认重定向
routes = routes.concat({
	path: '',
	name: 'home_index',
	redirect: '/home_index',
	component: () => import(`@/views/homeIndex/homeIndex.vue`),
})
export default new Router({
  routes
})
