import { Link } from "react-router-dom";
//import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import "./LandingPage.css";
function LandingPage() {
  return (
    <div className="home">
      <div className="home_con">
        <h1>🍿FlexMovix </h1>
        <h2>Watch Movies & TV Shows Online for Free in HD</h2>
        <div className="home_center">
          <p>
            Top wacth: Industry Bob’s Burgers My Hero Academia Believer Shadows
            Side Wistoria: Wand and Sword FAIRY TAIL 100 YEARS QUEST The Elusive
            Samurai Final Girl: Halloween The Lie: The Murder of Grace Millane
          </p>
        </div>
        <Link to="/home" className="home-a">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
