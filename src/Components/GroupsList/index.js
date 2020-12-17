import React, { useEffect, useState } from 'react'
import GroupCard from '../GroupCard'

function GroupsList() {

const [groupList, setGroupList] = useState('')

useEffect(()=>{
fetch(`${process.env.REACT_APP_URL}/groupslist`)
.then(res=> res.json())
.then(data=>setGroupList(data))
}, [])
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
