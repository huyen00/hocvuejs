<template>
    
<div class="flex flex-col">
    <input type="text" v-on:input="changeValue" class="lg:bg-red">
    <h1 class="">{{ title }}</h1>
    <p>{{ sayHello() }}</p>
    <p>{{ showPost() }}</p>
    
    <div class="row">
      <button @click="showcount()" class="w-32 bg-indigo-500 rounded-full p-1.5 m-4 text-white ">
        Count is: {{ count }}
      </button>
    </div>
   
<!-- Default Modal -->
    <addsinhvien  :sinhvienbyId="sinhvienbyId"></addsinhvien>
   
    <h1 class="text-3xl mx-auto">{{ data_demo.school }}</h1>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full" >
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                STT
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Class
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Year Old
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b" v-for="item in list_demo" :key="item.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ item.id }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {{ item.name }}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{item.class}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{ item.yearOld }}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="editDataDemo(item)">edit</button>
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="deleteDatasinhvien(item)">Delete</button> 
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

 
<script>
import { mapState } from 'vuex';
import addsinhvien from './addsinhvien.vue';
import EventBus from './../../EventBus'

export default {

  name: 'TableSV',
  props: {
    msg: String,
    
  },
  components:{ 
      addsinhvien
   },
 
  data(){
    return {
      count:0,
        title: " Hellooo",
        body: " kkk",
        data: null,
        // message:"",
        showHide_FormCreate: false,
        showHide_FormEdit: false,
        // Show_FormCreate:
       
    }
  },
  computed: {
    ...mapState("stores", {
      data_demo: state => state.data_demo,
      sinhvienbyId: state => state.sinhvienbyId
        }),
        list_demo(){
          return this.$store.getters['stores/list_dataDemo']
        }
  },
  methods:{
    changeValue: function(event){
        this.title= event.target.value;
    },
    sayHello: function(){
        // document.write("Say Hello!");
        return "say Hello!"
    },
    showPost: function(){
        return this.body;
    },
    showcount: function(){
      this.count++;
    },
    closeFormCreate: function(){

    },
    clickadd(data){
      console.log(data)
      this.$store.dispatch('stores/pushsinhvien',data)
      
    },
    editDataDemo: function(item){
      EventBus.$emit( 'editSinhVien', item)
      this.$store.commit('stores/editSinhVien',item.id)
      
    },
    deleteDatasinhvien: function(item){
      EventBus.$emit( 'deletesinhvien', item)
      this.$store.commit('stores/deletesinhvien',item.id)
    }

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add__sv{
  background: #131414a1;
}
</style>
