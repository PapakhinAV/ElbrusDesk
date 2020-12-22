import style from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddInfoForAdmin } from "../../Redux/actions/notes"
import { useEffect, useState } from 'react';
import AdminPeople from "./AdminPeople"
import AdminGroups from "./AdminGroups"
import { Link } from 'react-router-dom';




const AdminPage = () => {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    (() => {
      dispatch(AddInfoForAdmin())
    })()
  }, [])

  // console.log(counter);
  const store = useSelector((state) => state.adminInfo);
  const allUsers = store.users
  const allGroups = store.groups

  return (
    <div className={style.mainBlock}>

      <div className={style.peopleBlock}>
        <div className={style.headBlock}>
        </div>
        {allUsers && allUsers.map((element) => <AdminPeople element={element} setCounter={setCounter} />)}
      </div>
      <div className={style.groupsBlock}>
        <div className={style.headBlock}>
          <div>
            <Link to="/AdminCreateGroup"> <button>+ Добавить новую группу</button></Link>

          </div>
        </div>
        {allGroups && allGroups.map((element) => <AdminGroups element={element} />)}
      </div>
    </div>

  );
}

export default AdminPage;
