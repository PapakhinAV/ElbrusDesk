import './index.css';
import { useSelector } from "react-redux"
import VerticalLinearStepper from '../VerticalStepper/VerticalStepper';


const Project = () => {
  // const store = useSelector(store => store.id)
  return (
    <>
      <div className="blockWrapper">
        <div className="inputMain">
          {/* <div>img</div>
        <div className="input">
          {store}
          Информация о проекте
        </div> */}
        <VerticalLinearStepper />
        </div>
      </div>
    </>
  );
}

export default Project;
