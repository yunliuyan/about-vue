import Vue from 'vue'
import Router from 'vue-router'
import { humpToLine } from '@/utils/util'
Vue.use(Router)

const routerArr = require.context('@/view', true, /\.vue$/).keys()

let routes = [
  {
    path: '',
    name: 'home_index',
    redirect: '/home_index',
    component: () => import(`@/view/homeIndex/homeIndex.vue`),
  },
]
routerArr.forEach((item) => {
  let itemUrl = item.slice(2)
  let newItem = itemUrl.split('/')
  let itemObj = {}
  if (newItem.length < 2) {
    alert('数据读取错误，请按照约定进行设置文件')
  } else {
    itemObj = {
      path: `/${humpToLine(newItem[0])}`,
      name: humpToLine(newItem[0]),
      component: () => import(`@/view/${newItem[0]}/${newItem[0]}.vue`),
      meta: { isRoot: true },
      children: [],
    }
    if (newItem.length === 3) {
      itemObj.children = [
        {
          path: humpToLine(newItem[newItem.length-2]),
          name: humpToLine(newItem[newItem.length-2]),
          component: () => import(`@/view/${itemUrl}`),
          children: [],
        },
      ]
    }
  }
  routes.push(itemObj)
})
console.log(routes)
export default new Router({
  routes,
})
