/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Goals from './components/Goals';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu HELLO world',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();

    this.state = {
      view: null,
      data: [
        { 
          id: 'chest',
          exercises: [ 
            {type: 'bench', current: 10, goal: 30}
          ]
        },
        {
          id: 'back',
          exercises: [
            {type: 'latPulldown', current: 50, goal: 70},
            {type: 'row', current: 40, goal: 60},
            {type: 'deadlift', current: 20, goal: 45}
          ] 
        },
        {
          id: 'arms',
          exercises: [
            {type: 'bicepCurl', current: 10, goal: 25}
          ]
        },
        {
          id: 'shoulders',
          exercises: [
            {type: 'shoulderPress', current: 10, goal: 25}
          ]
        },
        {
          id: 'legs',
          exercises: [
            {type: 'squat', current: 20, goal: 45}
          ]
        }
      ]

    }
  }

  calculatePercentage() {
    // for each muscle
      // sum all exercise current & divide over
      // sum all exercise goal
    let currentSum = 0;
    let goalSum = 0;
    this.state.data.forEach(muscle => {
      currentSum += muscle.current;
      goalSum += muscle.goal;
    })
  }

  expandMuscleGroup() {

  }

  render() {
    return (
      <Goals data={this.state.data}/>
    );
  }
}




// {
//         chest: {
//           bench: {current: 10, goal: 30}
//         },
//         back: {
//           latPulldown: {current: 50, goal: 70},
//           row: {current: 40, goal: 60},
//           deadlift: {current: 20, goal: 45}
//         },
//         arms: {
//           bicepCurl: {current: 10, goal: 25}
//         },
//         shoulders: {
//           shoulderPress: {current: 10, goal: 25}
//         },
//         legs: {
//           squat: {current: 20, goal: 45}
//         }
//       }