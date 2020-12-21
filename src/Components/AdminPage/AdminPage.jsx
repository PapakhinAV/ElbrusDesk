import style from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddInfoForAdmin } from "../../Redux/actions/notes"
import { useEffect, useState } from 'react';
import AdminPeople from "./AdminPeople"
import AdminGroups from "./AdminGroups"




const AdminPage = () => {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    (() => {
      console.log(counter);
      dispatch(AddInfoForAdmin())
    })()
  }, [counter])

  const store = useSelector((state) => state.adminInfo);
  const allUsers = store.users
  const allGroups = store.groups


  return (

    <div className={style.mainBlock}>

      <div className={style.peopleBlock}>
        <div className={style.headBlock}>
        </div>
        {allUsers.map((element) => <AdminPeople element={element} setCounter={setCounter} />)}
      </div>
      <div className={style.groupsBlock}>
        <div className={style.headBlock}>
          <div>
            <button type="button">+ Добавить новую группу</button>
          </div>
        </div>
        {allGroups.map((element) => <AdminGroups element={element} />)}
      </div>
    </div>

  );
}

export default AdminPage;
