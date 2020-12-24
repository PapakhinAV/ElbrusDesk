import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import YanMap from "../YanMap/YanMap"
import { loadAllCoordinatse } from "../../Redux/actions/notes"
import { useState } from "react";




const YanPage = () => {
  const dispatch = useDispatch()
  const poz = useSelector(state => state.positions)
  const [positions, setPositions] = useState(poz)

  useEffect(() => {
    (() => {
      dispatch(loadAllCoordinatse())
    })()
  }, [])


  return (
    <div>
      <div>
        <YanMap positions={positions} />
      </div>
      <button>Добавить свою позицию</button>
    </div>

  );
}

export default YanPage;
