import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <div>
        {data.map((data, index) => {
          const {name, ...rest} = data;
          return <Tile key={index} name={name} description={rest}/>;
        })}
    </div>
  );
};
