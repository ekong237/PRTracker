import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  List,
  ListItem
} from 'react-native-elements';

export default class Goals extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          LETS GO!
        </Text>

        <List>
          <FlatList 
            data={this.props.data}
            renderItem={({ item }) => (
              <ListItem
                title={item.id}
              />
            )}
            keyExtractor={item => item.id}
          />
        </List>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#33FFFF',
  },
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    marginTop: '20%',
    marginBottom: '10%'
  },
  muscle: {
    width: 200,
    height: 50,
    backgroundColor: 'skyblue'
  },
  listItem: {
    backgroundColor: '#33FFFF',
  }

});


        // <View style={styles.muscle}>
        //   <Text>Chest</Text>
        //   <Text>{this.props.muscleData.chest.bench.goal}</Text>
        //   // for each muscle,
        //     // for each exercise
        //       // get current
        //       // get goal
        // </View>
        // <View style={styles.muscle}>
        //   <Text>Back</Text>
        // </View>
        // <View style={styles.muscle}>
        //   <Text>Arms</Text>
        // </View>
        // <View style={styles.muscle}>
        //   <Text>Shoulders</Text>
        // </View>
        // <View style={styles.muscle}>
        //   <Text>Legs</Text>
        // </View>