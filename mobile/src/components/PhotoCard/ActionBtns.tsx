import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { makeHitSlop } from '../../utils/themes/metrics';

const styles = StyleSheet.create({
  root: {
    height: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  actionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  actionBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fakeView: {
    flex: 1.6,
  },
  bookmarkWrapper: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

class ActionBtns extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionsWrapper}>
          <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.actionBtn}>
            <FontAwesomeIcon icon={faHeart} size={25} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.actionBtn}>
            <FontAwesomeIcon icon={faComment} size={25} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={makeHitSlop(20)} style={styles.actionBtn}>
            <FontAwesomeIcon icon={faPaperPlane} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.fakeView} />
        <TouchableOpacity
          hitSlop={makeHitSlop(20)}
          style={styles.bookmarkWrapper}>
          <FontAwesomeIcon icon={faBookmark} size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ActionBtns;
