//Dòng này để import vue-router

// import TableSV from '@/components/TableSV'
// import products from '@/components/dataProducts/products'
// import ArmorialGame from '@/components/userGame/ArmorialGame'
// import Index from '@/components/index'
// import LaserTag from '@/components/userGame/laserTag'
// import listHistory from '@/components/userGame/list-History'
// import listEntries from '@/components/entries/listEntries'
import viewContact from "@/components/contacts/viewContact"
import listContact from "@/components/contacts/listContact"
import addContact from "@/components/contacts/addContact"
import editContact from "@/components/contacts/editContact"
import roles from '@/components/contacts/roles'
import addRoles from '@/components/contacts/addRoles'
import editRoles from '@/components/contacts/EditRoles'
import listPermission from '@/components/contacts/listPermission'
import login from "@/components/auth/login"
import HomeComponent from "@/components/HomeComponent"
const routes = [
  // bao gồm danh sách route

  {
    path: "/login",
    name: "login",
    component: login,
  },
  // {
  //   path: '*',
  //   redirect: '/'
  //  },
  // {
  //   path: "/roles",
  //   name: "roles",
  //   component: roles,
  //   children: [
  //     {
  //       path: "/roles/add",
  //       name: "addRoles",
  //       component: addRoles
        
  //     },
  //   ]
  // },
  {
    path: "/contact",
    name: "contact",
    component: HomeComponent,
    meta: { requiresAuth: true },
    redirect: {
      name: "list",
    },
    children: [
      {
        path: "/contact/list",
        name: "list",
        component: listContact,
        meta: { requiresAuth: true },
      },

      {
        path: "/contact/view/:id",
        name: "ViewContact",
        component: viewContact,
        meta: { requiresAuth: true },
      },
      {
        path: "/contact/add",
        name: "addContact",
        component: addContact,
        meta: { requiresAuth: true },
      },
      {
        path: "/contact/edit/:id",
        name: "ediContact",
        component: editContact,
        meta: { requiresAuth: true },
      },
      {
        path: "/roles",
        name: "roles",
        component: roles,
        meta: { requiresAuth: true },
      },
      {
        path: "/roles/add",
        name: "addRoles",
        component: addRoles
      },
      {
        path: "/roles/edit/:id",
        name: "editRoles",
        component: editRoles
      },
      {
        path: "/permission",
        name: "listPermission",
        component: listPermission
      },
    ],
  },
];
export default routes;
