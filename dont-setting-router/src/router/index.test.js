import Vue from 'vue'
import Router from 'vue-router'
import { humpToLine } from '@/utils/util'
Vue.use(Router)

const routerArr = require.context('@/view', true, /\.vue$/).keys()

//来个递归，给component为null添加路径
// const toDoChildren = (obj) => {
//   if (obj.children.length && !obj.children[0].component) {
//     try {
//       routerArr.forEach((item) => {
//         if (item.indexOf(`${lineToHump(obj.children[0].name)}.vue`)>-1) {
// 					console.log(`@/view/${item.slice(2)}`)
//           obj.children[0].component = () => import(`@/view/${item.slice(2)}`)
//         }
//       })
//       return toDoChildren(obj.children[0])
//     } catch (err) {
//       console.log(err)
//     }
//   } else {
//     return obj
//   }
// }

//浅拷贝
// const shallowCopy = (src) => {
// 	let dst = {};
// 	for(let prop in src){
// 		if(prop in src){
// 			dst[prop] = src[prop]
// 		}
// 	}
// 	return dst
// }

//深拷贝思路
// const addChild = (obj, hash = new WeakMap(), children) => {

// }
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
      component: () => import(`@/view/${itemUrl}`),
			meta: { isRoot: true },
			children: []
    }
    if ( newItem.length > 2 ) {
			let childrenStr = itemObj
      for (let i = 1; i < newItem.length-1; i++) {
				childrenStr =  childrenStr['children'];
				childrenStr = [
					{
						path: `${humpToLine(newItem[i])}`,
						name: humpToLine(newItem[i]),
						component: null,
						children: [],
					},
				]
			}
			
			console.log(itemObj)
    }
    //itemObj = newItem.length > 2 ? toDoChildren(itemObj) : itemObj
  }
 // console.log(itemObj)
  routes.push(itemObj)
})
console.log(routes)
export default new Router({
  routes,
  // routes: [
  //   {
  //     path: '',
  //     name: 'home_index',
  //     redirect: '/home_index',
  //     component: () => import(`@/view/homeIndex/homeIndex.vue`),
  // 	},
  // 	{
  //     path: '/home_index',
  //     name: 'home_index',
  //     component: () => import(`@/view/homeIndex/homeIndex.vue`),
  // 	},
  //   {
  //     path: '/home_index',
  //     name: 'home_index',
  //     component: () => import(`@/view/homeIndex/homeIndex.vue`),
  //     children: [
  //       {
  //         path: 'index_children',
  //         name: 'index_children',
  //         component: () => import(`@/view/homeIndex/indexChildren/indexChildren.vue`),
  //       },
  //     ],
  // 	},
  // 	{
  // 		path: '/home_category',
  //     name: 'home_category',
  //     component: () => import(`@/view/homeCategory/homeCategory.vue`),
  // 	}
  // ],
})
