import "../styles/cardMenu.scss";
import { ReactComponent as Plane } from "../images/Plane.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" />
        <Comments className="icon" />
        <Plane className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
}

export default CardMenu;
