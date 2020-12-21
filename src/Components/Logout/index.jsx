import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DeleteUserID } from '../../Redux/actions/notes';
import { useDispatch } from 'react-redux';

const Logout = ()=>{
    const dispatch = useDispatch()
    const history = useHistory();
    useEffect(()=>{
        (async () => {
            let response = await fetch("http://localhost:3000/logout", {
              method: 'DELETE',
              credentials: 'include'
            });
            if (response.status === 200) {
                dispatch(DeleteUserID(''))
              history.push('/')
            }
          })()
    },[])
return (
    <></>
)
}

export default Logout;