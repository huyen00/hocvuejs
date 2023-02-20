export default{
    editContact(state,id){
        state.contactbyId = state.contacts.find(user => user.id ===id)
        state.editMode = true
    },
    SET_CONTACT(state,data){
        state.contacts = data
        console.log(data)
    },
    DELETE_CONTACT(state, data){ 
        const index=state.contacts.findIndex(user => user.id ===data.id)
        console.log("index:",index)
        if(index !== -1){
        state.contacts.splice(index,1)
        }
    },
    ADD_CONTACT(state, data){
        console.log("addContact state",state)
        console.log("addContact",data)
        // state.contacts.push(data)
      
    }
};