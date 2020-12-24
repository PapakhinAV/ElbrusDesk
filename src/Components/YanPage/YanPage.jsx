import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import YanMap from "../YanMap/YanMap"
import { addUserPosition, loadAllCoordinatse } from "../../Redux/actions/notes"
import { useState } from "react";
import { usePosition } from 'use-position';



const YanPage = () => {
  const dispatch = useDispatch()
  const poz = useSelector(state => state.positions)
  const [positions, setPositions] = useState(poz)


  useEffect(() => {
    (() => {
      dispatch(loadAllCoordinatse())
    })()
  }, [])



	const watch = true;
  const {
    latitude,
    longitude
	} = usePosition(watch);
	
console.log(latitude, longitude);

const userId = useSelector(state => state.userInfo[0]._id)

function handleTakePosition(){
dispatch(addUserPosition({latitude, longitude, userId}))
}


  return (
    <div>
      <div>
        <YanMap positions={positions} />
      </div>
      <button onClick={handleTakePosition}>Добавить свою позицию</button>
    </div>

  );
}

export default YanPage;
