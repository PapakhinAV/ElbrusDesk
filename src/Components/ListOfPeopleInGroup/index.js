import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

function ListOfPeopleInGroup() {

const [peopleOne, setPeopleOne] = useState({})

const {id} = useParams()
useEffect(()=>{
	fetch(`${process.env.REACT_APP_URL}/students_list_in_group/${id}`)
	.then(res => res.json())
	.then(data => setPeopleOne(data))
}, [])

console.log("list of people in group", peopleOne);

	return (
		<>
		<div>
      {
        peopleOne && peopleOne.map(el=>(
						<div className="card" style={{ width: '18rem' }}>
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

export default ListOfPeopleInGroup
