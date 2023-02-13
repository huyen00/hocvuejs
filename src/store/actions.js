

export default {
   pushsinhvien(content,data){
    console.log('pushsinhvien content',content)
   
    content.commit('PushSinhVien', data)
    
   },
   editsv(content,data){
     content.commit('editDataSV', data)
       console.log('editsv content',content)
      console.log('editsv data',data)

   },
   deletesv(content, data){
      
      content.commit('deletesinhvien', data)

   }
};