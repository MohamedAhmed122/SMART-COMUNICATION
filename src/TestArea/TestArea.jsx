import React from "react";

import { connect } from "react-redux";

import { increment, decrement } from "../redux/Test/ReducerActions";
import { Button } from "semantic-ui-react";
import LocationSearchInput from "./LocationSearchInput/LocationSearchInput";
import SimpleMap from "./SimpleMap/SimpleMap";
import TestModal from '../Modal/TestModal'
import { openModal } from "../redux/Modal/ModelAction";

const TestArea = ({ data, increment, decrement,openModal }) => (
  <div>
    <h2> TEST COMPONENT</h2>
    <h3>{data}</h3>
    <Button onClick={increment} positive content="increment" />
    <Button onClick={decrement} negative content="decrement" />
    <Button
      onClick={() => openModal("TestModal",{data: 42})}
      color="teal"
      content="open modal"
    />
    <br />
    <br />
    <LocationSearchInput />
    <br />
    <br />
    <SimpleMap />
    <br />
    <br />
    <TestModal />
  </div>
);
const mapDispatchProps = {
  increment,
  decrement,
  openModal,
};
const mapStateToProps = ({ test: { data } }) => ({
  data,
});
export default connect(mapStateToProps, mapDispatchProps)(TestArea);
