import {BrowserRouter,Switch,Route} from "react-router-dom";
import Welcome from "./Comp/Views/Welcome";
import Navbar from "./Comp/Navbar/Navbar";
import Filmview from "./Comp/Views/Films/Filmview";
import FilmList from "./Comp/Views/Films/FilmList";
import Locationview from "./Comp/Views/Locations/LocationView";
import LocationList from "./Comp/Views/Locations/LocationList";
import Personview from "./Comp/Views/People/PersonView";
import PeopleList from "./Comp/Views/People/PeopleList";




const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/films/:id">
          <Filmview/>
        </Route>

        <Route exact path="/films">
          <FilmList/>
        </Route>

        <Route exact path="/people/:id">
          <Personview/>
        </Route>

        <Route exact path="/people">
          <PeopleList/>
        </Route>

        {/* <Route exact path="/vehicles/:id">
          <VehicleView/>
        </Route>

        <Route exact path="/vehicles">
          <VehicleList/>
        </Route> */}

        <Route exact path="/locations/:id">
          <Locationview/>
        </Route>

        <Route exact path="/locations">
          <LocationList/>
        </Route>

        {/* <Route exact path="/species/:id">
          <SpecieView/>
        </Route>

        <Route exact path="/species">
          <SpeciesList/>
        </Route> */}

        <Route exact path="/">
          <Welcome/>
        </Route>

      </Switch>
    </BrowserRouter>
  );

};

export default App;
