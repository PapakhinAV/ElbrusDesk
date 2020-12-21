import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadGroupsFromBack } from '../../Redux/actions/notes'
import GroupCard from '../GroupCard'

function GroupsList() {
  const dispatch = useDispatch()
  useEffect(() => {
    (() => {
      dispatch(LoadGroupsFromBack())
    })()
  }, []);

  const groupList = useSelector(state => state.groups);

  return (
    <>
    <div className="blockWrapper">
      <div className="groupBody">
        <div className="groupHeader">
          <h1><span className="yellowSymbols">//</span> Эльбрусовцы <span className="yellowSymbols">//</span></h1>
        </div>
        <div className="groupHeader">
          <h2>Москва <span className="yellowSymbols">!==</span> СПб <span className="yellowSymbols">||</span> Онлайн</h2>
        </div>
        
        <GroupCard groupList={groupList} />
      </div>
      </div>
    </>
  )
}

export default GroupsList
