
//Dòng này để import vue-router

import TableSV from '@/components/TableSV'
import products from '@/components/dataProducts/products'
import ArmorialGame from '@/components/userGame/ArmorialGame'
// import Index from '@/components/index'
import LaserTag from '@/components/userGame/laserTag'
import listHistory from '@/components/userGame/list-History'
import listEntries from '@/components/entries/listEntries'
import viewContact from '@/components/contacts/viewContact'
import listContact from '@/components/contacts/listContact'
import addContact from '@/components/contacts/addContact'
import editContact from '@/components/contacts/editContact'
const routes = [// bao gồm danh sách route
  {
    path: '/', 
    name: 'home', 
    component: listContact
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
    },
    {
      path: '/entries', ///path của route
      name: 'Entries', // tên route
      component: listEntries // component route sử dụng
    },
    {
      path: '/entries', ///path của route
      name: 'Entries', // tên route
      component: listEntries // component route sử dụng
    },
    {
      path: '/contact/view/:id', 
      name: 'ViewContact', 
      component: viewContact  
    },
    {
      path: '/contact/add', 
      name: 'addContact', 
      component: addContact  
    },
    {
      path: '/contact/edit/:id', 
      name: 'ediContact', 
      component: editContact  
    },
    
  ]
export default routes;