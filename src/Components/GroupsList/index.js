import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadGroupsFromBack } from '../../Redux/actions/notes'
import GroupCard from '../GroupCard'

function GroupsList() {
const dispatch = useDispatch()
useEffect(() => {
		dispatch(LoadGroupsFromBack())
}, [])



const groupList = useSelector(state=> state.groups)
console.log(groupList);
	return (
		<>
		{ groupList.length && <GroupCard groupList={groupList}/>}
			</>
	)
}

export default GroupsList
