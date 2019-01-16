

export const SHOW_USERS = 'SHOW_USERS'

export function showUsers() {
    const users =[
        {id:1,name:'Camila'},
        {id:2,name:'Andrés'}
    ]
    return  {
       type:SHOW_USERS,
       payload:users,
    }
    
} 

