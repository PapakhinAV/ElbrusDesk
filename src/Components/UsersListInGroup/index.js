import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadUsersFromBack } from '../../Redux/actions/notes';
import { Link } from "react-router-dom";
// import volkov from '../img/volkov.jpg'


function UsersListInGroup() {

  const { id } = useParams();

  const dispatch = useDispatch()
  useEffect(() => {
    (() => {
			dispatch(LoadUsersFromBack(id))
    })()
  }, [])

  const groupInfo = useSelector(state => state.groups)
	let groupInfoOne = groupInfo.filter(el => (el._id === id))
	
	const peopleList = useSelector(state => state.users)

  return (
    <>
      <div className="blockWrapper">
        <div className="groupBody">

          <div className="groupHeader">
            <h1><span className="yellowSymbols">//</span> Эльбрусовцы <span className="yellowSymbols">//</span></h1>
          </div>
          <div className="groupHeader">
            <h2>{groupInfoOne && groupInfoOne[0].name} <span className="yellowSymbols">?</span> {groupInfoOne[0].dateEnd}<span className="yellowSymbols">:</span>{groupInfoOne[0].city}</h2>
          </div>
          <div className="groupListWrap">
            <div>
              {
                peopleList.length ? peopleList.map(el => (
                 <div ey={el._id} className="groupCardWrap">
                    <div className="group">
                      <div className="groupAvatar">
											{ el.avatar ? <img width="250px" height="250px" src={`${el.avatar}`} className="card-img" alt="..." /> :
											<img width="250px" height="250px" src={groupInfoOne[0].avatar} className="card-img" alt="..." />
											 	}
                      </div>
                      <div className="groupInfo">
                        <div>
                          <Link to={`/user_page/${el._id}`}><h5 className="userHeader">{el.firstname + el.surname}</h5></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )):
								<div><h3>Ещё нет зарегестрированных эльбрусовцев в этой группе.</h3></div>
              }
            </div>
          </div></div>
      </div>
    </>
  )
}

export default UsersListInGroup
