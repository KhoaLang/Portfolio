import "./card.scss";

const Card = (props) => {
  const { image, name, description, link } = props;
  return (
    <div className="my-card d-flex flex-column align-items-center">
      <div className="my-card__image">
        <img src={image} alt="project" />
      </div>
      <div className="my-card__description">
        <h4>{name}</h4>
        <p>{description}</p>
        <button>
          <a href={link}>Visit now</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
