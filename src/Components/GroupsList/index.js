import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadGroupsFromBack, LoadStatusElbrus } from '../../Redux/actions/notes'
import { useHistory } from 'react-router-dom';

import GroupCard from '../GroupCard'

function GroupsList() {
  const status = useSelector(store => store.elbrusStatus)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    if (status === false) {
      history.push('/')
    }
    (() => {
      dispatch(LoadGroupsFromBack())
    })()
  }, [])


  const groupList = useSelector(state => state.groups)

  return (
    <>
      { groupList.length && <GroupCard groupList={groupList} />}
    </>
  )

}

export default GroupsList
