import React from "react";

import { connect } from "react-redux";

import { increment, decrement } from "../redux/Test/ReducerActions";
import { Button } from "semantic-ui-react";
import LocationSearchInput from "../Component/LocationSearchInput/LocationSearchInput";

const TestArea = ({ data, increment, decrement }) => (
  <div>
    <h2> TEST COMPONENT</h2>
    <h3>{data}</h3>
    <Button onClick={increment} positive content="increment" />
    <Button onClick={decrement} negative content="decrement" />
    <br />
    <br />
    <LocationSearchInput />
  </div>
);
const mapDispatchProps = {
  increment,
  decrement,
};
const mapStateToProps = ({ test: { data } }) => ({
  data,
});
export default connect(mapStateToProps, mapDispatchProps)(TestArea);
