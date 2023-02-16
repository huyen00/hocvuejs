
//Dòng này để import vue-router

import TableSV from '@/components/TableSV'
import products from '@/components/dataProducts/products'
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
    path: '/sinhvien', 
    name: 'TableSV', 
    component: TableSV 
  },
    {
      path: '/product', ///path của route
      name: 'product', // tên route
      component: products // component route sử dụng
    }
  ]
export default routes;