import './index.css';
import TechNews from "../TechNews/TechNews"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ParceNews } from "../../Redux/actions/notes"

const TechNewsPage = () => {

  const dispatch = useDispatch();


  // const [news, setNews] = useState('')
  useEffect(() => {
    (() => {
      dispatch(ParceNews())
    })()
  }, [])
  const store = useSelector((state) => state.news);
  console.log("store", store);



  return (
    <div className="newsPage">
        
      {store.map((element, index) => <TechNews index={index} key={element[0]} value={element} />)}
    </div>
  );
}

export default TechNewsPage;
