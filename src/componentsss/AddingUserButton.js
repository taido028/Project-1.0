import { useState, useCallback } from 'react';
import { PersonFillAdd, Save,X } from 'react-bootstrap-icons';
import { v1 } from 'uuid';

export const Adding_Member = ({new_user,set_new_user, onClick,setState0,setState1,state}) =>{ 

    if ( state === 0 ) 
    {
        return (
            <button className='btn btn-sm btn-primary' onClick={setState1}><PersonFillAdd>Add a user</PersonFillAdd></button>
             )
    } else {

            function handleChange(evt) 
            {
                const value = evt.target.value;
                set_new_user({
                  ...new_user,
                  [evt.target.name]: value
                });
               
            }
            
        return (
            <>  
            <label>User's email address:<input type="text" name="email" value={new_user.email} placeholder='Enter user email' onChange={handleChange} /> </label>
           
                <button className='btn btn-sm btn-warning' onClick={setState0}><X></X></button>
                <button className='btn btn-sm btn-success' onClick={onClick}><Save></Save></button>
            </>
        )
    }
}


export const Adding_Member_Button = ({group,  actions}) => {
    const [new_user, set_new_user] = useState({
        id:"",
        email:"", 
        roles:
        [
            {
                roletype:
                {
                    name:''
                }
            }
        ],
        users:
        [
            {
                id:v1()
            }
        ]
        
    })
  const onClick = () => 
  {
    set_new_user({...new_user,id:v1()})
    const user=
    {
        id:new_user.users[0].id,
        user:{...new_user,id:v1()}
    }
    actions.onGroupMemberAdd({user, group})
    /*
    const membership = {userId = user.user.id, groupId = group.id}
    */

  }
  const [ state, setState ] = useState(0)
  const setState0 = useCallback(() => setState(0))
  const setState1 = useCallback(() => setState(1))

  return (
      <Adding_Member new_user={new_user} state={state} setState0={setState0} setState1={setState1} set_new_user={set_new_user} onClick={onClick}><PersonFillAdd></PersonFillAdd> Add a user </Adding_Member>
  )
}