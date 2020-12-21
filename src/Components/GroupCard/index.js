import React from 'react'
import './index.css';
import { Link } from "react-router-dom"


/* #cardMain {
  max-width: 540px;
} */
// id={style.cardMain}

function GroupCard({ groupList }) {


  return (
    <>


      <div className="groupListWrap">

        {
          groupList && groupList.map(el => (
              <div key={el._id} className="groupCardWrap">
                <div className="group">
                  <div className="groupAvatar">
                    <img src={`${el.avatar}`} className="card-img" alt="..." />
                  </div>
                  <div className="groupInfo">
                    <div>
                      <h5 className="groupHeader">Орлы-2020</h5>
                      <p className="city">Москва</p>
                      <Link className="purpleButton" to={`/students_list_in_group/#`}>Подробнее</Link>
                    </div>
                  </div>
                </div>
              </div>
          ))
        }
      </div>


    </>
  )
}

export default GroupCard
