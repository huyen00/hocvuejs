export default{
    pushProduct(content, data){
        content.commit('add_DataProduct', data)
        console.log("Product content", content)
        console.log("Product data", data)
       
    },
    editDataProduct(content, data){
        content.commit('edit_DataProduct', data)
    }
}