// import NewsApi1 from './component/NewsApi1';

import { BrowserRouter, Route } from "react-router-dom";
import ApiNews1 from "./component/ApiNews1";
import ApiNews2 from "./component/ApiNews2";
import Header from "./component/Header";
import NewsApi1 from "./component/NewsApi1";
import NewsApi2 from "./component/NewsApi2";

// import ApiNews1 from "./component/ApiNews1";
// import ApiNews2 from "./component/ApiNews2";
// import NewsApi2 from "./component/NewsApi2";

function App() {
  return (
    <div className="App">
      {/* <NewsApi1 /> */}
      {/* <NewsApi2 /> */}
      {/* <ApiNews1 /> */}
      {/* <ApiNews2 /> */}
      <BrowserRouter>
      <Header />

      <Route path="/news1" exact component={NewsApi1} />
      <Route path="/news2" exact component={NewsApi2} />
      <Route path="/news3" exact component={ApiNews1} />
      <Route path="/news4" exact component={ApiNews2} />
      </BrowserRouter>
    </div>
  );
}

export default App;
