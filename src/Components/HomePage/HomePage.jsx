import './index.css';
import UserMenu from "../UserMenu/UserMenu";
import Post from "../Post/Post"
import Wall from "../Wall/Wall"
import foto from '../img/volkov.jpg'

const HomePage = () => {
  return (
      <div className="userMainBlock">
        <div className="userWrap">
        <div className="leftColumn">
          <div className="fotoBlock"><img src={foto} alt="userPhoto"/></div>
          <div className="userName">
          <h1><span className="yellowSymbols">//</span> Волков Игорь <span className="yellowSymbols">//</span></h1>
          </div>
          <div className="userMenuBlock"><UserMenu /></div>
        </div>

        <div className="rightColumn">
          <div className="newPostBlock"><Post /></div>
          <div className="wallBlock"><Wall /></div>
        </div>
        </div>
      </div>
  );
}

export default HomePage;
