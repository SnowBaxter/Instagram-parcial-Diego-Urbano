import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "Mom's spagetti",
      text: "Igual y no está tan mal",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "JSDAJSDJS",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Sigue así!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Genial!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="Mom's spagettii"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="Mom's spagettii"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="mapvault"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="Mom's spagettii"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default Cards;
