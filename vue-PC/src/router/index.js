import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/home',
      component: () => import ('@/pages'),
      children: [
        {
          path: 'home',
          name: '',
          component: () => import('@/pages/Home')
        },
        {
          path: '/card',
          name: '模板制作',
          component: () => import('@/pages/Card/redirect'),
          redirect: '/card/list',
          children: [
            {
                path: 'list',
                name: '模板一览',
                component: () => import('@/pages/Card')
            },{
              path: 'add',
              name: '新建模板',
              component: () => import('@/pages/Card/add')
            }
          ]
        },
        {
          path: '/material',
          name: '素材管理',
          component: () => import('@/pages/redirect'),
          redirect: '/material/list/video',
          children: [
            {

              path: 'list/:type',
              name: '素材一览',
              component: () => import('@/pages/Material')
            }
          ]
        },
        {
          path: '/setting',
          name: '用户设置',
          component: () => import('@/pages/setting'),
          redirect: '/setting/baseInfo',
          children: [
            {
              path: 'baseInfo',
              name: '基本信息',
              component: () => import('@/pages/Setting/baseInfor'),
            },
            {
              path: '/setting/brandInfo',
              name: '品牌信息',
              component: () => import('@/pages/redirect'),
              redirect: '/setting/brandInfo/list',
              children: [
                {
                  path: '/setting/brandInfo/list',
                  name: '品牌列表',
                  component: () => import('@/pages/Setting/brandInfor/list'),
                },
                {
                  path: '/setting/brandInfo/add/:id',
                  name: '品牌新增/编辑',
                  component: () => import('@/pages/Setting/brandInfor/add'),
                }
              ]
            },
            {
              path: '/setting/cardInfo',
              name: '名片信息',
              component: () => import('@/pages/Setting/cardInfor'),
            },
            {
              path: '/setting/billingDetails',
              name: '账单明细',
              component: () => import('@/pages/Setting/billingDetail'),
            },
            {
              path: '/setting/userSpace',
              name: '账户空间',
              component: () => import('@/pages/Setting/userSpace'),
            },
            {
              path: '/setting/safeSetting',
              name: '安全设置',
              component: () => import('@/pages/Setting/safeSetting'),
            },
            {
              path: '/setting/roleManage',
              name: '角色管理',
              component: () => import('@/pages/redirect'),
              redirect: '/setting/roleManage/list',
              children: [
                {
                  path: '/setting/roleManage/list',
                  name: '角色列表',
                  component: () => import('@/pages/Setting/roleManage/list'),
                }
              ]
            },
            {
              path: '/setting/userManage',
              name: '用户管理',
              component: () => import('@/pages/redirect'),
              redirect: '/setting/userManage/list',
              children: [
                {
                  path: '/setting/userManage/list',
                  name: '用户列表',
                  component: () => import('@/pages/Setting/userManage/list'),
                }
                
              ]
            },
          ]

        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: ()=>import('@/pages/Login')
    }

  ]
})
