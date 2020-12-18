import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { LoadUsersFromBack } from '../../Redux/actions/notes'

function UsersListInGroup() {

	const { id } = useParams();

const dispatch = useDispatch()
useEffect(() => {
	(() => {
		dispatch(LoadUsersFromBack(id))
	})()
}, [])

const userOne = useSelector(state=> state.users)
console.log(userOne);

	return (
		<>
		<div>
      {
        userOne && userOne.map(el=>(
						<div key={el._id} className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{el.firstname}</h5>
            <p className="card-text">{el.email}</p>
          </div>
					</div>
				))
					}
					</div>
    </>
	)
}

export default UsersListInGroup
