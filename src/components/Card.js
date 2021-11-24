import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
  } = props;

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Visto por <strong>{likedByText}</strong> Y{" "}
          <strong>{likedByNumber} Otros</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">HACE {hours} HORAS</div>
      <div className="addComment">
        <div className="commentText">Agrega un comentario...</div>
        <div className="postText">Publicar</div>
      </div>
    </div>
  );
}

export default Card;
