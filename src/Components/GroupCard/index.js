import React from 'react'
import style from './style.module.css'
import { Link } from "react-router-dom"


function GroupCard({key, name, city, avatar, dateStart, dateEnd}) {

	
	return (
		<div key={key} className={'card mb-3'} id={style.cardMain}>
  <div className="row no-gutters">
    <div className="col-md-4" >
      <img src={`${avatar}`} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
			<h5 className="card-title">{name}   {city}</h5>

        <p className="card-text"><small className="text-muted">{dateStart}</small></p>
        <p className="card-text"><small className="text-muted">{dateEnd}</small></p>
		    <Link to={`/students_list_in_group/${key}`}>Подробнее</Link>
      </div>
    </div>
  </div>
</div>
	)
}

export default GroupCard
