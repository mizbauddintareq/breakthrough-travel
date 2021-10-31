import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Pages/context/AuthProvider";
import AddOffer from "./Pages/Home/AddOffer/AddOffer";
import AllOrders from "./Pages/Home/AllOrders/AllOrders";
import Home from "./Pages/Home/Home/Home";
import MyOrder from "./Pages/Home/MyOrders/MyOrder";
import Order from "./Pages/Home/Order/Order";
import NotFound from "./Pages/Home/NotFound/NotFound";
import Login from "./Pages/Login/Firebase/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer";
import MainMenu from "./Pages/Shared/MainMenu";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainMenu></MainMenu>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/addOffer">
            <AddOffer></AddOffer>
          </Route>
          <Route path="/myOrders">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/allOrders">
            <AllOrders></AllOrders>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
