<template>
  <div class="hello text-white">
    <div class="menu_slidebar">
      <div class="logo_admin flex ">
        <img src="../assets/img/logo_admin.svg" class="rounded-full w-11" alt="">
        <div class="grid pl-1.5 ">
          <span class="text-sm">Admin</span>
          <span class="text-xs"><font-awesome-icon icon="fa-solid fa-circle" class="w-1.5" style="color: #24e30d;"/> online</span>
        </div>
      </div>
    <div class="sinhvien_manager mt-6">
      <ul class="list__sinhvien text-left">
        <li class="item__sinhvien">
          <a href="" class="link_sinhvien">Quản lý sinh viên <font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
          <ul class="list_sub pt-4 pl-3.5">
            <li>
              <router-link to="/sinhvien">Danh sách sinh viên</router-link>
            </li>
          </ul>
        </li>
        
      </ul>
    </div>
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu_slidebar{
  width: 250px;
  height: 500px;
  background-color: #222d32;
  padding:2rem 1rem;
}

</style>
