export default{
    // show form
    add_product(state){
        state.productbyId = null
        state.showhide_FormModel = true;
        state.editMode= false
      
    },
    // add data product
    add_DataProduct(state, data){
        console.log("data Product",state)
        console.log("data Product 1",data)
        state.list_product.push(data)
    },
    // show form edit
    edit_formproduct(state, id){
        state.productbyId = state.list_product.find(product => product.id ==id)
        state.showhide_FormModel = true
        state.editMode = true
    },
    edit_DataProduct(state, data){
        const index = state.list_product.findIndex(product => product.id === data.id)
        if( index !== -1){
            state.list_product.splice(index,1, data)
        }
    },
    // close form
    close_product(state){
        state.showhide_FormModel = false
        state.editMode = false
        console.log("editMode",state)
    },
    // detele product
    deleteproduct(state, id){ 
        const index=state.list_product.findIndex(sv => sv.id ===id)
        if(index !== -1){
        state.list_product.splice(index,1)
        }
    }

};