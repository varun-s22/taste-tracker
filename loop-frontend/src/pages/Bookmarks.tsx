import React, { useContext } from "react";
import LeftPane from "../components/LeftPane";
import bookmarkContext from "../contexts/bookmarkContext";
import Map from "../components/Map";
import Authenticated from "../components/Authenticated";
function Bookmarks() {
  const { bookmarks } = useContext(bookmarkContext);
  return (
    <Authenticated>
      <div className="home-div">
        <LeftPane />
        <div className="body-content">
          <h2 className="subheading">Bookmarks</h2>
          <div className="home-body" style={{ marginTop: "-150px" }}>
            Welcome to your bookmarked maps page! Here, you can conveniently
            access and manage all the maps you have bookmarked for future
            reference
          </div>
          {bookmarks.map((bookmark) => {
            return <Map restrauntName={bookmark} isBookmarked />;
          })}
        </div>
      </div>
    </Authenticated>
  );
}
export default Bookmarks;
