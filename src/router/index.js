
//Dòng này để import vue-router

import TableSV from '@/components/TableSV'
import product from '@/components/product'
import ArmorialGame from '@/components/userGame/ArmorialGame'
import Index from '@/components/index'
import LaserTag from '@/components/userGame/laserTag'
import listHistory from '@/components/userGame/list-History'

const routes = [// bao gồm danh sách route
  {
    path: '/', 
    name: 'home', 
    component: Index  
  },
  {
    path: '/sinhvien', 
    name: 'TableSV', 
    component: TableSV 
  },
  {
    path: '/medals', 
    name: 'Medals', 
  
    component: ArmorialGame 
  },
  {
    path: '/laser-tag', 
    name: 'profile', 
    component: LaserTag 
  },
  {
    path: '/list-history', 
    name: 'Game History', 
    component: listHistory 
  },
    {
      path: '/product', ///path của route
      name: 'product', // tên route
      component: product // component route sử dụng
    }
  ]
export default routes;