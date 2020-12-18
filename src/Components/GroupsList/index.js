import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadGroupsFromBack } from '../../Redux/actions/notes'
import GroupCard from '../GroupCard'

function GroupsList() {
const dispatch = useDispatch()
useEffect(() => {
	(() => {
		dispatch(LoadGroupsFromBack())
	})()
}, [])
const groupList = useSelector(state=> state.groups)
console.log(groupList);
	return (
		<>
		{ 
			groupList && groupList.map(el=>(
			<GroupCard key={el._id} name={el.name} city={el.city} avatar={el.avatar} dateStart={el.dateStart} dateEnd={el.dateEnd}/>
		))
		}
		</>
	)
}

export default GroupsList
