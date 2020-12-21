import style from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddInfoForAdmin } from "../../Redux/actions/notes"
import { useEffect } from 'react';
import AdminPeople from "./AdminPeople"
import AdminGroups from "./AdminGroups"




const AdminPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(AddInfoForAdmin())
    })()
  }, [])
  const store = useSelector((state) => state.adminInfo);


  const allUsers = store.users
  const allGroups = store.groups

  console.log("1", allUsers);
  console.log("2", allGroups);
  return (

    <div className={style.mainBlock}>

      <div className={style.peopleBlock}>
        <div className={style.headBlock}>
          {allUsers.map((element) => <AdminPeople element={element} />)}
        </div>
      </div>
      <div className={style.groupsBlock}>
        <div className={style.headBlock}>
          {allGroups.map((element) => <AdminGroups element={element} />)}

        </div>
      </div>
    </div>

  );
}

export default AdminPage;
