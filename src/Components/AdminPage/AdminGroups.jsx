import style from './index.module.css';


const AdminGroups = ({ element }) => {
  return (
    <div className={style.groupMain}>
      <div className={style.groupsNames}>
        <div className={style.groupsFirstColumn}>
          <p>{element.city}</p>
          <p>{element.name}</p>
        </div>
        <div>
          <p>Start: {element.dateStart && element.dateStart}</p>
          <p>End: {element.dateEnd && element.dateEnd}</p>
        </div>
      </div>
      <div className={style.buttonBlock}>
        <button>Редактировать</button>
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default AdminGroups;
