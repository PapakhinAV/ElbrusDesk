import './index.css';
import UserMenu from "../UserMenu/UserMenu";
import Post from "../Post/Post"
import Wall from "../Wall/Wall"

const HomePage = () => {
  return (
    <>

      <div className="MainBlock">

        <div className="leftColumn">
          <div className="fotoBlock">foto</div>
          <div className="userMenuBlock"><UserMenu /></div>
        </div>

        <div className="rightColumn">
          <div className="newPostBlock"><Post /></div>
          <div className="wallBlock"><Wall /></div>
        </div>

      </div>
    </>
  );
}

export default HomePage;
