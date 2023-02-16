<template>
  <div>

    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-1/5" @click="add()">Add</button>
    <div id="medium-modal" v-if="showHide_FormCreate" tabindex="-1" class="add__sv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" >
    <div class="relative w-full h-full max-w-lg md:h-auto m-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white" v-if="editMode == true ">
                    Edit student
                </h3>
                <h3 v-else class="text-xl font-medium text-gray-900 dark:text-white">
                    Create student
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal" @click="closeSinhVien()">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <div class="row flex">
                <div class="grid-cols-6">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Name:</label>
                  <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" v-model ="student.name" />
                </div>
                <div class="grid-cols-6 ml-12">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Class:</label>
                  <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" v-model ="student.class" />
                </div>
                
               </div>
               <div class="row">
                <div class="grid-cols-6">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Year Old:</label>
                  <input type="Number"  min="0" max="100" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" v-model ="student.yearOld" />
                </div>
               </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="medium-modal" type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="savechange()" >Save changes</button>
                <button data-modal-hide="medium-modal" type="button"  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="closeSinhVien()">Close</button>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import EventBus from './../../EventBus'
export default {
    name: 'addsinhvien-component',
  props: {
    msg: String,
    sinhvienbyId: Object || null
    
  },
  data(){
    return{
        student:{
            id:Math.floor(Math.random()*1000),
            name:null,
            class: null,
            yearOld:null,
        }
    }
  },
  mounted(){
    EventBus.$on( 'editSinhVien', (item)=>{
      console.log('editSinhVien',item)
        this.student.id =item.id
        this.student.name =item.name
        this.student.class =item.class
        this.student.yearOld =item.yearOld
    })
  },
  computed: {

      showHide_FormCreate(){
       return  this.$store.state.stores.showHide_FormCreate
      },  
      editMode(){
        return  this.$store.state.stores.editMode
      },
    

  },
  methods:{
    
    add: function(){
      this.$store.commit('stores/addSinhVien')
      
    },
    savechange: function(){

    if(this.editMode){
      this.$store.dispatch('stores/editsv',this.student)
    }
    else{
     this.$store.dispatch('stores/pushsinhvien',this.student)
     console.log("add", this.student)
    }
      
      console.log(this.student) 
 
      this.student={  id:Math.floor(Math.random()*1000),
            name:null,
            class: null,
            yearOld:null,}
            this.closeSinhVien()
      // this.$store.dispatch('stores/pushsinhvien',this.student)
    },
    closeSinhVien(){
      this.$store.commit('stores/closeSinhVien')
    }
    

  },
  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off('editSinhVien');
  },
}
</script>

<style>

</style>