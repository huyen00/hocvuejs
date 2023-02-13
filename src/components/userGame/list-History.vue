<template>
  <div class="list-history pt-8 pb-8 bg-armorialgame1">
    <!-- more info -->
    <!-- Modal -->
    <div v-if="showHide_moreInfo" class="modal fade fixed top-0 left-0   w-full h-full  outline-none overflow-x-hidden overflow-y-auto z-10 bg-history_item"
    id="exampleModal" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog relative  pointer-events-none w-2/5 mx-auto mt-4 overflow-hidden">
        <div
        class="modal-content border-none shadow-lg relative flex flex-col h-full overflow-x-hidden  w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">History Game </h5>
            <button type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-red-900 hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal" aria-label="Close" @click="showHide_moreInfo = !showHide_moreInfo"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
        </div>
        <div class="modal-body relative block p-4" v-if="detail.matchups !=null">
            <div class="history_red">
                <div class="title_red text-center">
                    <p class="text-red-800 font-bold capitalize text-xl">red team</p>
                </div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        ID
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        score
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        kill
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        death
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        calo
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" v-for="(play,index) in detail.matchups.match_team.redteam.players" :key="index">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{play.id}}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play.name}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play.score}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play.kill}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play.death}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play.calo}}
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="history_blue mt-8">
                <div class="title_red text-center">
                    <p class="text-blue-800 font-bold capitalize text-xl">blue team</p>
                </div>
                
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        ID
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        score
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        kill
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        death
                                    </th>
                                    <th scope="col" class="text-sm font-medium capitalize text-gray-900 px-6 py-4 text-left">
                                        calo
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" v-for="(play1,index) in detail.matchups.match_team.blueteam.players" :key="index">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{play1.id}}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play1.name}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play1.score}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play1.kill}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play1.death}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{play1.calo}}
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button" class="px-6
            py-2.5
            bg-purple-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-purple-700 hover:shadow-lg
            focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-purple-800 active:shadow-lg
            transition
            duration-150
            ease-in-out" data-bs-dismiss="modal" @click="showHide_moreInfo = !showHide_moreInfo">Cancel</button>
            
        </div>
        </div>
    </div>
    </div>

    <div class="container mx-auto">
        <div class="flex justify-center pb-8">
            <div class="bg-red-600 h-16 w-16 text-center rounded-lg">
                <p class="text-white text-2xl">21</p>
                <p class="text-white">Red</p>
            </div>
            <div class="bg-blue-800 ml-4 h-16 w-16 text-center rounded-lg">
                <p class="text-white text-2xl">21</p>
                <p class="text-white">Blue</p>
            </div>
        </div>
        <div class="history-game  relative" style="">
            <div class=" top-16 w-full">
                <div v-for="item in list_game" :key="item.id" class="item_history mx-auto" >
                    <img src="assets/bghistory1.png" class="mx-auto image_history " alt="">
              
                    <div class="relative image_history1 " >
                        <div class=" top-0 w-full flex ">
                            <div class=" top-0 w-full flex p-2">
                                <img :src=item.avt  class="img_avt " alt="">
                                <div class="w-full px-4">
                                    <h1 class="text-white text-xl">{{item.name}}</h1>
                                    <div class="w-full bg-gray-200 rounded-full ">
                                        <div class="bg-blue-600 text-xs font-medium  text-blue-100 text-center p-0 leading-none rounded-l-full" style="width: 75%"> 75%</div>
                                    </div>
                                    <div class="flex">
                                        <p class="text-white text-xs">{{item.date}}</p>
                                        <p class="text-white text-xs pl-4">{{item.time}}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="relative w-2/5 more_info mx-auto" >
                            <div href="" class="cursor-pointer" @click="dataItemHistory(item)">
                                <div class=" top-0 w-full text-center bg_more">
                                    <p class="text-white">More info</p>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            showHide_moreInfo: false,
            detail: null,
            score: null,
            kill: null,
            death:null,
            calo:null,
     
        }
    },
    name: 'listHistory',
    props: {
      msg: String,

    },
    computed:{
        ...mapState("stores", {
            user_profile: state => state.user_profile
    
        }),
        list_game(){
            return this.$store.getters['stores/list_game']
        }
    },
    methods:{
        dataItemHistory(item){
            this.showHide_moreInfo=!this.showHide_moreInfo
            console.log(item)
            this.detail= item
        },

        
    }
}
</script>

<style scoped>
.image_history{
    width: 50%;
}
.image_history1{
    height: 75px;
    width: 50%;
    margin: auto;
    background-color: #16142e;
}

.img_avt{
    width: 55px;
    height: 55px;
}
.more_info{
    position: absolute;
    right: 0px;
    width: 160px;
    clip-path: polygon(0% 0%, 100% 0, 100% 100%, 20% 100%, 0% 0%);

}
.item_history{
    height: fit-content;
    margin-bottom: 45px;
    /* padding: 10px;
    margin: 10px; */
}
.bg_more{
    background-color: rgb(21 141 227);
    color: black;
    padding: 7px;
}
.modal-dialog{
    height: 500px;
}
</style>