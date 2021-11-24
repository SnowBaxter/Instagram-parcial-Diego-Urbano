import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Messenger } from "../images/inbox.svg";
import {ReactComponent as More} from "../images/More.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import Welcome from "./Welcome";
import ProfileIcon from "./ProfileIcon";
import image from "../images/profile.jpg";

function Menu() {
  return (
    <div className="menu">
      <Home className="icon" />
      <Messenger className="icon" />
      <More className="icon"/>
      <Explore className="icon" />
      <Notifications className="icon" />
      <ProfileIcon iconSize="small" image={image} />
      <Welcome className="icon"/>
    </div>
  );
}

export default Menu;
