export default{
    editFormContact(state,data){
        state.contactById = state.contacts.find(user => user.id ===data.id)
        state.editMode = true
        console.log("edit id", data)
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
      
    },
    EDIT_CONTACT(state,data){
        const index = state.contacts.findIndex(user => user.id === data.id)
        if( index !== -1){
            state.contacts.splice(index,1, data)
        }
    },
    SEARCH(state,data){
        state.contacts =data
    }
};