<template>
  <div class="game">
    <h1 class="text-black text-3xl text-center pt-16 pb-16">Danh sách Game Holomia</h1>
    <button class="py-2 mb-8 ml-16 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" @click="addProduct()">
        Add
    </button>

<!-- Main modal -->
<div id="medium-modal" v-if="showhide_FormModel" tabindex="-1" class="add__sv fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" >
    <div class="relative w-full h-full max-w-lg md:h-auto m-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white" v-if="editMode == true ">
                    Edit Product
                </h3>
                <h3 v-else class="text-xl font-medium text-gray-900 dark:text-white">
                    Create Product
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="medium-modal" @click="closeProduct()">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <div class="row flex">
                <div class="grid-cols-6">
                    
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                  <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" v-model = "product.nameproduct"  />
                </div>
                <div class="grid-cols-6 ml-12">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">color:</label>
                  <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white" v-model = "product.color" />
                </div>
                
               </div>
               <div class="row flex">
                <div class="grid-cols-6">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">Category:</label>
                  <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white"  v-model = "product.category" />
                </div>
                <div class="grid-cols-6 ml-12">
                  <label for="" class="uppercase block tracking-wide text-gray-700 text-sm font-bold mb-2">price:</label>
                  <input  placeholder="" class="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-2 px-3 mb-3 text-xl leading-tight focus:outline-none focus:bg-white"  v-model = "product.price"/>
                </div>
               </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="medium-modal" type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="savechange()">Save changes</button>
                <button data-modal-hide="medium-modal" type="button"  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="closeProduct()">Close</button>
            </div>
        </div>
    </div>
</div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="item in Product" :key="item.id" >
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.id }}
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.nameproduct }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.color }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.category }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.price }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" @click="edit_DataProduct(item)">Edit</a>
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline pl-8" @click="deleteProduct(item)">Delete</a>
                    </td>
                </tr>
               
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
    name: 'products-component',
    props: {
    msg: String,
    ProductbyId: Object || null
    
  },
    data(){
        return{
            product:{
                id:Math.floor(Math.random()*1000),
                nameproduct:null,
                color:null,
                category:null,
                price:null,
            }
        }
    },
    mounted(){

        // this.product.id =
        // this.product.nameproduct =""
        // this.product.color =
        // this.product.category =""
        // this.product.price =""
    },
    computed:{
        ...mapState('stores/dataGame',{
            Product: state => state.list_product,
            
        }),
        showhide_FormModel(){
            return this.$store.state.stores.dataGame.showhide_FormModel
        },
        editMode(){
            return this.$store.state.stores.dataGame.editMode
        }
    
    },
    methods:{
        addProduct(){
            this.$store.commit('stores/dataGame/add_product')
        },
        closeProduct(){
            this.$store.commit('stores/dataGame/close_product')
            
        },
        savechange(){
            if(this.editMode){
                this.$store.dispatch('stores/dataGame/editDataProduct',this.product)
            }
            else{
                this.$store.dispatch('stores/dataGame/pushProduct', this.product)
            }
            // theem product
           
           this.product={
            id:Math.floor(Math.random()*1000),
                nameproduct:null,
                color:null,
                category:null,
                price:null,
               
           }
           this.closeProduct()
           
        },
        // show form edit 
        edit_DataProduct(item){
            this.$store.commit('stores/dataGame/edit_formproduct')
            this.product.id =item.id
            this.product.nameproduct =item.nameproduct
            this.product.color =item.color
            this.product.category =item.category
            this.product.price =item.price
        },
        // xoa product
        deleteProduct(item){
            this.$store.commit('stores/dataGame/deleteproduct',item.id)
        }
    }
}
</script>

<style>

</style>