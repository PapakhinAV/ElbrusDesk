import './index.css';
import { useSelector } from "react-redux"


const Project = () => {
  const store = useSelector(store => store.id)
  return (
    <>
      <div className="inputMain">
        <div>img</div>
        <div className="input">
          {store}
          Информация о проекте
        </div>
      </div>


    </>
  );
}

export default Project;
