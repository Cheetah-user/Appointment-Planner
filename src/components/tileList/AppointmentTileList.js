import { AppTile } from "../tile/AppointmentTile";

export const TileListApp = ({data}) => {
    return (
      <div>
          {data.map((data, index) => {
            const {title, ...rest} = data;
            return <AppTile key={index} title={title} description={rest}/>;
          })}
      </div>
    );
  };