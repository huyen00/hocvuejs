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
<div id="medium-modal" v-if="showHide_FormCreate" tabindex="-1" class="add__sv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" >
    <div class="relative w-full h-full max-w-lg md:h-auto m-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    create student
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal" @click="showHide_FormCreate = !showHide_FormCreate">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <div class="row flex">
                <div class="grid-cols-6">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Name:</label>
                  <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" />
                </div>
                <div class="grid-cols-6 ml-12">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Class:</label>
                  <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" />
                </div>
                
               </div>
               <div class="row">
                <div class="grid-cols-6">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Year Old:</label>
                  <input type="Number"  min="0" max="100" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" />
                </div>
               </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="medium-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Save changes</button>
                <button data-modal-hide="medium-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="showHide_FormCreate = !showHide_FormCreate">Close</button>
            </div>
        </div>
    </div>
</div>

    <!-- <div class="add__sv fixed w-full h-full inset-0 ">
     
      <form action="" class="p-8 mt-8 ml-8 bg-gray-100 w-4/12">
        <div class="row header__sv flex justify-between pb-8">
          <div class="">
            create student
          </div>
          <div class="close">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
        </div>
        <div class="row flex">
          <div class="grid-cols-6">
            <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" />
          </div>
          <div class="grid-cols-6 ml-12">
            <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Class:</label>
            <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" />
          </div>
        </div>
      </form>    
    </div> -->
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
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
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="showHide_FormCreate = !showHide_FormCreate">Add</button>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="showHide_FormCreate = !showHide_FormCreate">Add</button>
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                Larry the Bird
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="showHide_FormCreate = !showHide_FormCreate">Add</button>
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
export default {
  name: 'TableSV',
  props: {
    msg: String,
    
  },
  data(){
    return {
      count:0,
        title: " Hellooo",
        body: " kkk",
        // message:"",
        showHide_FormCreate: true,
        // Show_FormCreate:
       
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
