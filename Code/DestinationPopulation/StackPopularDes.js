import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PopularDestinations from './PopularDestinations';
import DaLatDenistation from './DaLatDestinations';

export default class StackPopularDes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <StackPopular></StackPopular>
    );
  }
}
const StackPopular={
    PopularDes_: PopularDestinations,
    DaLatDestinations_:DaLatDenistation
}
