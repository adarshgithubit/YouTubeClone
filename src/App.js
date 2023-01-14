import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {SearchFeed,Feed,NavBar,VideoDetails,ChannelDetail} from "./Components"
// import SearchFeed from "./Components/SearchFeed";
// import NavBar from "./Components/NavBar";
// import Feed from "./Components/Feed";
// import VideoDetails from "./Components/VideoDetails";
// import ChannelDetail from "./Components/ChannelDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetails />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;


