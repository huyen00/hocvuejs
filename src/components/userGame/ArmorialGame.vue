<template>
    <div class="ArmorialGame">
      <img src="assets/hr2.png" class="w-full h-6" alt="">
        <div class="container mx-auto">
            <div class="your-medals ">
                <img src="assets/logogame.jpg" class="m-auto h-64" alt="">
                <h1 class="text-white text-5xl text-center pb-5">Your medals</h1>               
            </div>
        </div>
      <div class="armorial_all bg-armorialgame2">
        <div class="container mx-auto">
          <div class="img_armorial relative overflow-hidden">
            <div class="all_item h-full overflow-auto">
              <img src="assets/layout1.png" class="w-full p-2 h-full" alt="">
            <div class="list_armorial absolute top-8  w-full mx-auto  grid grid-cols-3 gap-4 overflow-auto justify-items-center" >
              
              <div class="relative h-64 col-span-1 item_armorial justify-items-center">
                <img src="assets/item_armorial1.png" class="h-41" alt="">
               
                <a href="" class="absolute top-0 text-center justify-items-center w-full h-full">
                  <h1 class="text-white text-2xl mt-4 font-bold">MVP</h1>
                  <img src="assets/3.png" class="image_item  " alt="">
                  <h1 class="text-white text-3xl font-bold">2</h1>
                </a>
              </div>
              <div class="relative h-64 col-span-1 item_armorial justify-items-center">
                <img src="assets/item_armorial1.png" class="h-41" alt="">
               
                <a href="" class="absolute top-0 text-center justify-items-center w-full  h-full">
                  <h1 class="text-white text-2xl mt-4 font-bold">MVP</h1>
                  <img src="assets/3.png" class="image_item" alt="">
                  <h1 class="text-white text-3xl font-bold">2</h1>
                </a>
              </div>
              <div class="relative h-64 col-span-1 item_armorial justify-items-center">
                <img src="assets/item_armorial1.png" class="h-41" alt="">
               
                <a href="" class="absolute top-0 text-center justify-items-center w-full  h-full">
                  <h1 class="text-white text-2xl mt-4 font-bold">MVP</h1>
                  <img src="assets/3.png" class="image_item" alt="">
                  <h1 class="text-white text-3xl font-bold">2</h1>
                </a>
              </div>
              <div class="relative h-64 col-span-1 item_armorial justify-items-center">
                <img src="assets/item_armorial1.png" class="h-41" alt="">
               
                <a href="" class="absolute top-0 text-center justify-items-center w-full  h-full">
                  <h1 class="text-white text-2xl mt-4 font-bold">MVP</h1>
                  <img src="assets/3.png" class="image_item" alt="">
                  <h1 class="text-white text-3xl font-bold">2</h1>
                </a>
              </div>
              <div class="relative h-64 col-span-1 item_armorial justify-items-center">
                <img src="assets/item_armorial1.png" class="h-41" alt="">
               
                <a href="" class="absolute top-0 text-center justify-items-center w-full  h-full">
                  <h1 class="text-white text-2xl mt-4 font-bold">MVP</h1>
                  <img src="assets/3.png" class="image_item" alt="">
                  <h1 class="text-white text-3xl font-bold">2</h1>
                </a>
              </div>
              <div class="relative h-64 col-span-1 item_armorial justify-items-center">
                <img src="assets/item_armorial1.png" class="h-41" alt="">
               
                <a href="" class="absolute top-0 text-center justify-items-center w-full  h-full">
                  <h1 class="text-white text-2xl mt-4 font-bold">MVP</h1>
                  <img src="assets/3.png" class="image_item" alt="">
                  <h1 class="text-white text-3xl font-bold">2</h1>
                </a>
              </div>
              <div class="relative h-64 col-span-1 item_armorial justify-items-center">
                <img src="assets/item_armorial1.png" class="h-41" alt="">
               
                <a href="" class="absolute top-0 text-center justify-items-center w-full  h-full">
                  <h1 class="text-white text-2xl mt-4 font-bold">MVP</h1>
                  <img src="assets/3.png" class="image_item" alt="">
                  <h1 class="text-white text-3xl font-bold">2</h1>
                </a>
              </div>
              <div class="relative h-64 col-span-1 item_armorial justify-items-center">
                <img src="assets/item_armorial1.png" class="h-41" alt="">
               
                <a href="" class="absolute top-0 text-center justify-items-center w-full  h-full">
                  <h1 class="text-white text-2xl mt-4 font-bold">MVP</h1>
                  <img src="assets/3.png" class="image_item" alt="">
                  <h1 class="text-white text-3xl font-bold">2</h1>
                </a>
              </div>
            </div>
          </div>
            
        </div>
         
      </div>
      <!-- <div class=" bg-blue_layout h-1 mt-8"></div> -->
       <div class="btn__back mt-16 bg-armorialgame1 pt-4">
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

  export default {
    name: 'HomeGame',
    props: {
      msg: String,

    },
  
  }
  </script>
  
  
  <style scoped>
  .ArmorialGame{
    background: rgba(5, 22, 56, 0.89) ;
  }
  .img_armorial{
    height: 600px;
  }
  .list_armorial{
    height: 90%;
  }
  .image_item{
    width: 95%;
    margin: auto;
    margin-top:1rem;
    height: 50%;
    object-fit: contain;
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
  .scrollbar::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }

.scrollbar::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #f7f4ed;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #e0cbcb;
    border-radius: 100vh;
    border: 3px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background: #c0a0b9;
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
  </style>
  