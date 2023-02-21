<template>
  <div class="pt-7 bg-gray-200 min-height-screen">
    <div class="container mx-auto">
        <div class="w-5/6">
            <div class="flex">
                <h2 class="text-2xl text-green-700">View Contact</h2>
            </div>
            <span class="italic ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias amet debitis error explicabo, facilis nemo non placeat qui repudiandae. Aperiam aut expedita inventore magnam nostrum, obcaecati officia perspiciatls quibusdam?</span>
        </div>
        <div class="mt-8" v-if="contact">
            <div class="grid grid-cols-3 gap-4 pt-8 pb-8">
                <div class="w-2/4">
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="">
                </div>
                <div class="col-span-2 ">
                    <ul class="bg-white w-2/4" >
                        <li class="border-t-2 p-2">
                            name: <strong >{{ contact.name }}</strong>
                        </li>
                        <li class="border-t-2 p-2">
                            phone: <strong>{{contact.phone}}</strong>
                        </li><li class="border-t-2 p-2">
                            email: <strong>{{contact.email}}</strong>
                        </li>
                        
                        <li class="border-t-2 p-2">
                            Công ty: <strong>Công ty Công Nghệ Holomia</strong>
                        </li>
                        <li class="border-t-2 p-2">
                            Địa chỉ: <strong>102 Thái Thịnh, Đống Đa, Hà Nội</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mt-8">
            <a @click="$router.back()" class="px-4 py-2 bg-green-700 rounded-md text-white cursor-pointer"> Back</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'viewContact',
    data(){
          return{
            contact: null
          }
      },
    mounted(){
        this.getDataEdit()
   
     },
     computed:{
        
     },
     methods:{
        getDataEdit(){
              this.$store.dispatch('stores/contacts/getEditContact',this.$route.params.id).then(response=>{
                this.contact = response.data
                console.log("respon", response)

              })
             
            
          },
     }

}
</script>

<style>

</style>