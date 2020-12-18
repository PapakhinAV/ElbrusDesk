import './index.css';

const TechNews = ({ value, index }) => {
  return (
    <div className="newsBlock">
      <div className="Title">{index + 1}. {value[0]}</div>
      <div className="NewsText">{value[1]}</div>
    </div>
  );
}

export default TechNews;
