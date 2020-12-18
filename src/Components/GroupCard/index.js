import React from 'react'
// import style from './style.module.css'
import { Link } from "react-router-dom"

/* #cardMain {
  max-width: 540px;
} */
// id={style.cardMain}

function GroupCard({ groupList }) {


  return (
    <>
      {
        groupList && groupList.map(el => (
          <div key={el._id} className={'card mb-3'} >
            <div className="row no-gutters">
              <div className="col-md-4" >
                <img src={`${el.avatar}`} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{el.name}   {el.city}</h5>
                  <p className="card-text"><small className="text-muted">Начало обучения: {el.dateStart}</small></p>
                  <p className="card-text"><small className="text-muted">Окончание обучения: {el.dateEnd}</small></p>
                  <Link to={`/students_list_in_group/${el._id}`}>Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default GroupCard
