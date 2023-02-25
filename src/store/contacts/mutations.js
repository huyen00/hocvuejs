

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
    },
    // ROLES
    SET_ROLES(state, data){
        state.permissions = data
        console.log("data roles", data)
    },
    DELETE_ROLES(state, data){ 
        const index=state.permissions.data.findIndex(role => role.id ===data.id)
        console.log("index333:",index)
        if(index !== -1){
        state.permissions.data.splice(index,1)
        }
    },
    // ADD_ROLES(state, data){
    //     console.log("state111 roles", state)
    //     console.log("data roles", data)
    //     state.permissions.data.push(data)
    // }

    // permission
    showFormModel(state){
        state.showHide_Model = true;
        state.editMode= false
    },
    closeFormMode(state){
        state.showHide_Model = false;
        state.editMode= false
    },
    ADD_PERMISSION(state, data){
        state.permissions.data.push(data)
    },
    // show form edit
    editFormPermission(state, id){
      
        state.permissionById = state.permissions.data.find(permission => permission.id == id)
        console.log("id", id)
        state.showHide_Model = true
        state.editMode= true
    }

};