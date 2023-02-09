import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Base from "./pages/Base";
import Video1 from "./pages/Video_1";
import Video2 from "./pages/Video2";
import Video3 from "./pages/Video3";
import Video4 from "./pages/Video4";
import Video5 from "./pages/Video5";
import Video6 from "./pages/Video6";
import Video7 from "./pages/Video7";
import Record1 from "./pages/Record1";
import Record2 from "./pages/Record2";
import Record3 from "./pages/Record3";
import Record4 from "./pages/Record4";
const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Base />} />
      <Route path="video1" element={<Video1 />} />
      <Route path="video2" element={<Video2 />} />
      <Route path="video3" element={<Video3 />} />
      <Route path="video4" element={<Video4 />} />
      <Route path="video5" element={<Video5 />} />
      <Route path="video6" element={<Video6 />} />
      <Route path="video7" element={<Video7 />} />
      <Route path="Record1" element={<Record1 />} />
      <Route path="Record2" element={<Record2 />} />
      <Route path="Record3" element={<Record3 />} />
      <Route path="Record4" element={<Record4 />} />
      <Route path="*" element={<>Error: No Document</>} />
    </Route>
  </Routes>
);

export default App;
