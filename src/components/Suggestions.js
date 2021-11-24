import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Sugerencias para tí</div>
        <a href="/">Ver todos</a>
      </div>

      <Profile
        caption="Te gusta esta página de Facebook"
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Popular"
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Te sigue"
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Sugerencia para ti"
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Te sigue"
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}

export default Suggestions;
