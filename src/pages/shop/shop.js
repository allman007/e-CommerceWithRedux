import React, { useState } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/collections-overview";
import CollectionPage from "../collection/collection";
import "./shop.styles.scss";

//Before Shop Redux
// import SHOP_DATA from "../../redux/shop/shop.data";

//BEFORE Shop Redux
// class ShopPage extends React.Component {
//   constructor(props) {
//     super();

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState();

  setTimeout(() => {
    setLoading({
      loading,
    });
  }, 2000);

  return (
    <div className="shop-page">
      {!loading ? (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
      )}
      <div>
        {!loading ? (
          <></>
        ) : (
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          />
        )}
      </div>
    </div>
  );
};

export default ShopPage;
