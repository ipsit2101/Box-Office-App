import { useParams } from "react-router-dom";
import ShowContent from "./ShowContent";
import ShowDetails from "./ShowDetails";
import ShowSeasons from "./ShowSeasons";
import ShowCasts from "./ShowCasts";
import { InfoBlock, ShowPageWrapper } from "./ShowPageStyling";
import { useShow } from "../Misc/CustomHooks";


const ShowPage = () => {

  const { id } = useParams();
  const state = useShow(id);
  console.log(state);

  console.log(state.show);
  if (state.isLoading) {
    return <div>Data is being loaded</div>
  }
  if (state.error) {
    return <div>Error Ocurred: {state.error}</div>
  }
  return (
    <ShowPageWrapper>
      <ShowContent image = {state.show.image} name = {state.show.name} rating = {state.show.rating} summary = {state.show.summary} genres = {state.show.genres}/>
      <InfoBlock>
        <h2>Details</h2>
        <ShowDetails status = {state.show.status} network = {state.show.network} premiered = {state.show.premiered} />
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons</h2>
        <ShowSeasons seasons = {state.show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Casts</h2>
        <ShowCasts cast = {state.show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  )
};

export default ShowPage;
