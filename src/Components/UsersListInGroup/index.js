import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadUsersFromBack } from '../../Redux/actions/notes';
import { Link } from "react-router-dom";
import volkov from '../img/volkov.jpg'


function UsersListInGroup() {

	const { id } = useParams();

const dispatch = useDispatch()
useEffect(() => {
	(() => {
		dispatch(LoadUsersFromBack(id))
	})()
}, [])

const userOne = useSelector(state=> state.users)

let nameOfGroup = userOne[0].stydyGroup.filter(el=> (el._id === id))

	return (
		<>
    <div  className="blockWrapper">
      <div className="groupBody">

      <div className="groupHeader">
          <h1><span className="yellowSymbols">//</span> Эльбрусовцы <span className="yellowSymbols">//</span></h1>
        </div>
        <div className="groupHeader">
          <h2>{nameOfGroup[0].name} <span className="yellowSymbols">?</span>{nameOfGroup[0].dateEnd}<span className="yellowSymbols">:</span>{nameOfGroup[0].city}</h2>
        </div>
      <div className="groupListWrap">
		<div>
      {
        userOne && userOne.map(el=>(
          <div ey={el._id} className="groupCardWrap">
          <div className="group">
            <div className="groupAvatar">
              <img src={`${el.avatar}`} className="card-img" alt="..." />
              <img src={volkov} className="card-img" alt="..." />
            </div>
            <div className="groupInfo">
              <div>
              <Link to={`/students_list_in_group/`}><h5 className="userHeader">{el.firstname + el.surname}</h5></Link>
              </div>
            </div>
          </div>
        </div>
				))
					}
					</div>
</div></div>
</div>
    </>
	)
}

export default UsersListInGroup
