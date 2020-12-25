import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import YanMap from "../YanMap/YanMap"
import { addUserPosition, loadAllCoordinatse } from "../../Redux/actions/notes"
import { useState } from "react";
import { usePosition } from 'use-position';
import { useHistory } from "react-router-dom";



const YanPage = () => {
  const dispatch = useDispatch()
  const positions = useSelector(state => state.positions)
  useEffect(() => {
    (() => {
      dispatch(loadAllCoordinatse())
    })()
  }, [])

  const history = useHistory()


  const watch = true;
  const {
    latitude,
    longitude
  } = usePosition(watch);


  const userId = useSelector(state => state.userInfo[0]._id)
  const store = useSelector(state => state.positions)

  function handleTakePosition() {

    dispatch(addUserPosition({ latitude, longitude, userId, store }))

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
