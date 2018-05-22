//reducer for data functions
const initialState = {
    list: [
        {
            id: 1,
            Name: 'Emily',
            Phone: '3152225555',
            Email: 'email@gmail.com'
        },
        {
            id: 2,
            Name: 'Doug',
            Phone: '4445556666',
            Email: 'email@gmail.com'
        },
        {
            id: 3,
            Name: 'Wade',
            Phone: '4447776666',
            Email: 'email@gmail.com'
        },
    ],
    Name: '',
    Phone: '',
    Email: '',
    redirectTo: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_LIST':
            const listItem = state.list.filter(item => item.id === parseInt(action.id))
            return{ 
                ...state,
                Name: listItem[0] ? listItem[0].Name : '',
                Phone: listItem[0] ? listItem[0].Phone : '',
                Email: listItem[0] ? listItem[0].Email : ''
            }

        case 'CAPTURE_INPUT':

            return{
                ...state, 
                [action.payload.name]: action.payload.value
        }

        case 'UPDATE':
            const updatedList = state.list.map(item =>{
                if (item.id === parseInt(action.id, 10)) {
                    item.Name = state.Name;
                    item.Phone = state.Phone;
                    item.Email = state.Email;
                }
                return item;
            })
            return{
                ...state,
                list: updatedList 
            }

        case 'DELETE':
            const newList = state.list.filter(item => item.id !== parseInt(action.id, 10));
            return{
                ...state,
                list: newList,
                Name: newList[0] ? newList [0].Name: '', 
                Phone: newList[0] ? newList [0].Phone: '', 
                Email: newList[0] ? newList [0].Email: '',
                redirectTo: newList.length > 0 ? `/${newList[0].id}` : '/1'
            }

        case 'ADD':
            let id;
            state.list.length > 0 ? id = state.list[ state.list.length -1 ].id + 1 : id = 1;
            const newContact = {id: id, Name: state.Name, Phone: state.Phone, Email: state.Email}
            return{
                ...state, 
                list: state.list.concat(newContact)
            }

        default:
        return state;
    }
}

    

export default reducer;