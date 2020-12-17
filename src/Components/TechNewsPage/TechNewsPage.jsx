import './index.css';
import TechNews from "../TechNews/TechNews"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ParceNews } from "../../Redux/actions/notes"
const TechNewsPage = () => {

  const dispatch = useDispatch();


  const store = useSelector((state) => state.news);
  // const [news, setNews] = useState('')

  useEffect(() => {
    (() => {
      dispatch(ParceNews())
    })()
  })



  return (
    <div>

    </div>
  );
}

export default TechNewsPage;
