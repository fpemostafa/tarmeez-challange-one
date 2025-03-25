import "./App.css";
import AppHeader from "./components/Header/AppHeader";
import Post from "./components/post/Post";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
   return (
      <div className="App">
         <AppHeader />
         {/* Page Content */}
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex" }}>
            {/* Post Container */}
            <div style={{ width: "70%", paddingRight: "20px" }}>
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
            </div>
            {/* End Post Container*/}

            {/* Side Container */}
            <div style={{ width: "30%" }}>
               <SideMenu />
            </div>

            {/* End Side Container */}
            {/* End Page Content */}
         </div>
      </div>
   );
}

export default App;
