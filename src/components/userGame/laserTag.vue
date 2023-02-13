<template>
  <div class="laser__tag">
    <!-- <div class="header__menu h-16 bg-black_header">
        <div class="container mx-auto h-full flex">
            <div class="h-full w-1/2">
                <img src="assets/logo.png" class="h-full" alt="">
            </div>
            <div class="image_laserTag">
                <img src="assets/laser-tag.png" alt=""> 
                <div class="text_laserTag absolute top-0 w-full ">
                    <p class="text-white text-3xl">Laser Tag</p>
                </div>          
            </div>
        </div>
    </div> -->
    <!-- {{ posts}} -->
    <div class="bg-laser_Tag pt-16">
        <div class="container mx-auto">
            <div class="relative w-full">
                <img src="assets/list-profile.png" class="w-full img-list_profile" alt="">
                <div class="absolute top-0 p-16 w-full">
                    <div class="name_profile flex">
                        <div class="avt_profile">
                            <img :src=user_profile.avt alt="">
                        </div>
                        <div class="text_name--laserTag ml-4 w-full">
                            <div class="flex justify-between">
                                <p class="text-white text-2xl">{{ user_profile.name }}</p>
                                <div class="relative image_lever">
                                    <img src="assets/lv.png" alt="">
                                    <div class="absolute  w-full h-full text-center top-2">
                                        <p class="text-white text-l">Lv3</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="w-full bg-gray-200 rounded-full mt-2">
                                <div class="bg-blue-600 text-xs font-medium  text-blue-100 text-center p-0 leading-none rounded-l-full" style="width: 75%"> 75%</div>
                            </div>
                            <p class="text-white text-l mt-2">Play Time: {{ user_profile.playtime }}</p>
                        </div>
                    </div>
                    <div class="start_laserTag relative mt-4">
                        <img src="assets/start.png" alt="">
                        <div class="absolute top-0 w-full text-center ">
                            <p class="text-white text-xl">Start</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full  text-center">
                                        <thead class="border-b border-line_laserTag">
                                            <tr>                       
                                                <th scope="col" class=" font-medium text-emerald-400 px-6 py-4 border-r uppercase text-xl border-line_laserTag">
                                                    wins 
                                                </th>
                                                <th scope="col" class="text-xl text-red-700 font-medium  px-6 py-4 uppercase">
                                                    losser
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-line_laserTag">                       
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-line_laserTag">
                                                    <div class="flex justify-between">
                                                        <p class="text-white text-xl uppercase">{{this.history[0].name}}</p>
                                                        <p class="text-white text-xl">{{ this.history[0].point }}</p>
                                                    </div>
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <div class="flex justify-between">
                                                        <p class="text-white text-xl uppercase">{{ this.history[1].name }}</p>
                                                        <p class="text-white text-xl">{{ this.history[1].point }}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="border-b border-line_laserTag">                      
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-line_laserTag">
                                                    <div class="flex justify-between">
                                                        <p class="text-white text-xl uppercase">{{ this.history[2].name }}</p>
                                                        <p class="text-white text-xl">{{ this.history[2].point }}</p>
                                                    </div>
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <div class="flex justify-between">
                                                        <p class="text-white text-xl uppercase">acc</p>
                                                        <p class="text-white text-xl">135</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class=" ">
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-line_laserTag">
                                                <div class="flex justify-between">
                                                    <p class="text-white text-xl uppercase">calor</p>
                                                    <p class="text-white text-xl">200</p>
                                                </div>
                                            </td> 
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img src="assets/fiting1.png" class="img-fiting" alt="">
                        <div  class="block ml-8">
                            <h1 class="uppercase text-white text-2xl">{{ posts ? posts.API : '' }}</h1>
                            <!-- <p class="text-white">Charge Rifle and Burst Rifle</p> -->
                            <p class="text-white">{{posts ? posts.Link : ''}}</p>
                        </div>
                        
                    </div>
                    <div class="list_unlocks mt-8">
                        <div class="item_unlock flex h-8 mt-4">
                            <img src="assets/fiting1.png" alt="">
                            <div class="bg-item_unlock w-full">
                                <p class="text-white pl-8 text-xl">Charge Rifle</p>
                            </div>
                            <div class="bg-unlock pl-4 pr-4 ">
                                <font-awesome-icon icon="fa-solid fa-unlock" class="mt-2" />
                            </div>
                        </div>
                        <div class="item_unlock flex h-8 mt-4">
                            <img src="assets/fiting1.png" alt="">
                            <div class="bg-item_unlock w-full">
                                <p class="text-white pl-8 text-xl">Charge Rifle</p>
                            </div>
                            <div class="bg-unlock pl-4 pr-4 ">
                                <font-awesome-icon icon="fa-solid fa-unlock" class="mt-2" />
                            </div>
                        </div>
                        <div class="item_unlock flex h-8 mt-4">
                            <img src="assets/fiting1.png" alt="">
                            <div class="bg-item_unlock w-full">
                                <p class="text-white pl-8 text-xl">Charge Rifle</p>
                            </div>
                            <div class="bg-unlock pl-4 pr-4 ">
                                <font-awesome-icon icon="fa-solid fa-unlock" class="mt-2" />
                            </div>
                        </div>
                        <div class="item_unlock flex h-8 mt-4">
                            <img src="assets/fiting1.png" alt="">
                            <div class="bg-item_unlock w-full">
                                <p class="text-white pl-8 text-xl">Charge Rifle</p>
                            </div>
                            <div class="bg-unlock pl-4 pr-4 ">
                                <font-awesome-icon icon="fa-solid fa-unlock" class="mt-2" />
                            </div>
                        </div>
                        <div class="item_unlock flex h-8 mt-4">
                            <img src="assets/fiting1.png" alt="">
                            <div class="bg-item_unlock w-full">
                                <p class="text-white pl-8 text-xl">Charge Rifle</p>
                            </div>
                            <div class="bg-unlock pl-4 pr-4 ">
                                <font-awesome-icon icon="fa-solid fa-unlock" class="mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex mt-8 justify-between">
                <div class="game_history relative">
                    <img src="assets/history.png" class="bg_textGame" alt="">
                    <div class="absolute top-2 text-center w-full">
                        <router-link to="/list-history" class="text-white text-xl ">Game History</router-link>
                    </div>
                </div>
                <div class="flex">
                    <div class="game_history relative ">
                    <img src="assets/history.png" class="bg_textGame" alt="">
                    <div class="absolute top-2 text-center w-full">
                        <p class="text-white text-xl ">Battlefield Info</p>
                        
                    </div>
                   
                </div>
                    <div class="unlock relative ml-3">
                        <img src="assets/history.png" class="img_unlock bg_textGame" alt="">
                        <div class="text_unlock absolute top-2 w-full text-center">
                            <p class="text-white text-xl">Unlocks</p>
                        </div>
                    </div>
                </div>
               
                
            </div>
            
        </div>
        <div class="btn__back mt-16 bg-armorialgame1 pt-4 pb-4">
        <div class="container mx-auto ">
          <div class="back relative ">
            <a href="">
            <img src="assets/back1.png" class=" img_back" alt="">
          </a>
            <div class="text_back absolute top-0 text-center w-full text-white">
              <a @click="$router.back()" class="cursor-pointer">
                <p class="">Back</p>
              </a>
            </div>
          </div>
        </div> 
       </div>
    </div>
  </div>
</template>

<script>
// import { kill } from 'process';

import { mapState } from 'vuex';
export default {
    data() {
        return {
            posts: null,
            errors: [],
            history:[
                {name:"kill", point: "980" },
                {name:"deaths", point: "13" },
                {name:"calo", point: "1980" },

            ],
          
            
        }
    },
    name: 'laserTag',
    props: {
      msg: String
    },
    mounted(){
       this.getData();
    },
    computed:{
        // user_profile(){
        //     return this.$store.state.stores.user_profile
        // },
        ...mapState("stores", {
            user_profile: state => state.user_profile
    
        })
    },
    methods: {
        getData (){
    

        // Tạo một request để truy xuất người dùng ứng với ID cho sẵn:
    //    window.axios.get('https://devinfinity.holomia.com/api/v1/player/show/5')
    //     .then(response =>{
    //         // this.posts = response
    //         console.log(response);
    //         // console.log(response.data.entries[1].Description);
       
    //     }
         
    //     //    this.posts.response.data.entries
    //         )
    //     .catch( error=>{
    //         // xử trí khi bị lỗi
    //         console.log(error);
    //         console.log("123")
    //     });
       
    }

    }
    
    
    
     
    
}
</script>

<style scoped>
.image_laserTag{
    position: relative;
    top: 50%;
    width: 350px;
}
.text_laserTag {
    top:20%;
    text-align: center;
}
.avt_profile{
    width: 70px;
}
.image_lever{
    width: 50px;
}
.start_laserTag{
    width: 200px;
}
.img-fiting{
    width: 120px;
}
.img-list_profile{
    height: 950px;
}
.unlock{
    width: 200px;
}
.bg_textGame{
    height: 50px;
}
.game_history{
    width: 200px;
}
.img_back{
    height: 50px;
    width: 150px;
    
  }
 
  .back{
    width: 150px;
  }
  .text_back{
    top:3%;
  }
  .text_back p{
    font-size: 24px;
  }
</style>