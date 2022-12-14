import {
  FLOOR_IMG,
  GOAL_IMG,
  GOAL_SYM,
  MARIO_IMG,
  MARIO_ON_GOAL_IMG,
  MARIO_ON_GOAL_SYM,
  MARIO_SYM,
  WALL_IMG,
  WALL_SYM,
} from "../Config";

const Cell = ({ value, style }) => {
  const cellCss = {
    ...style,
    backgroundImage: `url(${FLOOR_IMG})`,
    backgroundSize: "contain",
  };

  let imgSrc = "";
  switch (value) {
    case GOAL_SYM:
      imgSrc = GOAL_IMG;
      break;
    case WALL_SYM:
      imgSrc = WALL_IMG;
      break;
    case MARIO_SYM:
      imgSrc = MARIO_IMG;
      break;
    case MARIO_ON_GOAL_SYM:
      imgSrc = MARIO_ON_GOAL_IMG;
      break;
    default:
      imgSrc = FLOOR_IMG;
      break;
  }

  return (
    <div className="cell" style={cellCss}>
      <img src={imgSrc} alt={imgSrc} loading="lazy" />
    </div>
  );
};

export default Cell;
