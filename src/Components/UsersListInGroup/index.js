import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadUsersFromBack } from '../../Redux/actions/notes';
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Loader from '../Loader';
=======
import { PermContactCalendarSharp } from '@material-ui/icons';
>>>>>>> ea406d0fdc46f0f58626278c1758bc64a4043692


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
            <h1><span className="yellowSymbols">//</span> COM.MEMBERS <span className="yellowSymbols">//</span></h1>
          </div>
          <div className="groupHeader">
<<<<<<< HEAD
         {groupInfoOne[0] &&  (<h2>{groupInfoOne[0].name && groupInfoOne[0].name}<span className="yellowSymbols">?</span> {groupInfoOne[0].dateEnd}<span className="yellowSymbols">:</span>{groupInfoOne[0].city}</h2>)}
=======
            {groupInfoOne[0] && (<h2>{groupInfoOne[0].name && groupInfoOne[0].name}<span className="yellowSymbols">?</span> {groupInfoOne[0].dateEnd.slice(0, 4)} <span className="yellowSymbols">: </span>{groupInfoOne[0].city}</h2>)}
>>>>>>> ea406d0fdc46f0f58626278c1758bc64a4043692
          </div>
          <div className="groupListWrap">
            <div>
              {
                peopleList.length ? peopleList.map(el => (
                  <div ey={el._id} className="groupCardWrap">
                    <div className="group">
                      <div className="groupAvatar">
                        {el.avatar && <img width="250px" height="250px" src={`${el.avatar}`} className="card-img" alt="..." />

                        }
                      </div>
                      <div className="groupInfo">
                        <div>
                          <Link to={`/user_page/${el._id}`}><h5 className="userHeader">{el.firstname + el.surname}</h5></Link>
                        </div>
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
                )): <div><h3>Ещё нет зарегестрированных эльбрусовцев в этой группе.</h3></div> 
=======
                )) :
                  <div><h3>Ещё нет зарегестрированных эльбрусовцев в этой группе.</h3></div>
>>>>>>> ea406d0fdc46f0f58626278c1758bc64a4043692
              }
            </div>
          </div></div>
      </div>
    </>
  )
}

export default UsersListInGroup


