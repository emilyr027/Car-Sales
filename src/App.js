import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from "react-redux";
import { addFeature, removeItem } from './components/actions/index';

const App = ({ state, addFeature, removeItem }) => {
  const removeFeature = item => {
    removeItem(item);
  };

  const buyItem = item => {
    addFeature(item);
  };
 

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.additionalFeatures} buyItem={buyItem}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, { addFeature, removeItem })(App);
