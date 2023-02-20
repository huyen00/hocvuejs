<template>
  <div class="pt-7 bg-gray-200 h-full w-full fixed">
    <div class="container mx-auto">
        <div class="w-5/6">
            <div class="flex">
                <h2 class="text-2xl text-green-700">View Contact</h2>
            </div>
            <span class="italic ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias amet debitis error explicabo, facilis nemo non placeat qui repudiandae. Aperiam aut expedita inventore magnam nostrum, obcaecati officia perspiciatls quibusdam?</span>
        </div>
        <div class="mt-8">
            <div class="grid grid-cols-3 gap-4 pt-8 pb-8">
                <div class="w-2/4">
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="">
                </div>
                <div class="col-span-2 ">
                    <ul class="bg-white w-2/4" >
                        <li class="p-2">
                            Name: <strong>Brand Gibson</strong>
                        </li>
                        <li class="border-t-2 p-2">
                            Mobile: <strong>009567538</strong>
                        </li>
                        <li class="border-t-2 p-2">
                            Email: <strong>kldjhglgh</strong>
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
            <router-link to="" class="px-4 py-2 bg-green-700 rounded-md text-white"> Back</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'viewContact',
    mounted(){
       
       this.$store.dispatch("stores/dataContacts/getContact");
     },
     computed:{
        contacts(){
            return this.$store.state.stores.dataContacts.contacts;
        }
     }

}
</script>

<style>

</style>