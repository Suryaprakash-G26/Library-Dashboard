import { useDispatch } from "react-redux";
import { Getallbooks } from "./api/Booksapi";
import { updateinfo } from "./reducers/booksreducer";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage";
import Booksaddpage from "./pages/booksadd";
import Bookseditpage from "./pages/booksedit";
import Authordisplaypage from "./pages/authordisplay";
import Authoraddpage from "./pages/authoradd";
import Authoreditpage from "./pages/authoredit";
import { useEffect } from "react";
import Booksdisplaypage from "./pages/booksdisplay";
import { Getallauthor } from "./api/authorapi";
import { updateauthorinfo } from "./reducers/authorreducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Getallbooks().then((data) => dispatch(updateinfo(data)));
    Getallauthor().then((data)=>dispatch(updateauthorinfo(data)))
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route path="/books" element={<Booksdisplaypage />} />
        <Route path="/booksadd" element={<Booksaddpage />} />
        <Route path="/booksedit/:id" element={<Bookseditpage />} />
        <Route path="/author" element={<Authordisplaypage />} />
        <Route path="/authoradd" element={<Authoraddpage />} />
        <Route path="/authoredit/:id" element={<Authoreditpage />} />
      </Routes>
    </div>
  );
}

export default App;
