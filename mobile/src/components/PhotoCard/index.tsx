import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { human, iOSColors } from 'react-native-typography';
import { Photo } from 'src/graphql-types';
import ActionBtns from './ActionBtns';
import Header from './Header';
import Meta from './Meta';
import CommentInput from '../CommentInput';

const styles = StyleSheet.create({
  root: {
    minHeight: 800,
    paddingBottom: 10,
  },
  img: {
    flex: 1,
  },
  commentsWrapper: {
    height: 50,
    paddingHorizontal: 16,
  },
  commentViewAll: {
    ...human.calloutObject,
    color: iOSColors.midGray,
  },
  timeAgoWrapper: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  timeAgo: {
    ...human.footnoteObject,
    color: iOSColors.midGray,
  },
});

interface Props {
  data: Photo;
}

class PhotoCard extends Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Image
          style={styles.img}
          source={{
            uri: this.props.data.imageUrl,
          }}
        />
        <ActionBtns />
        <Meta caption={this.props.data.caption!} />
        <View style={styles.commentsWrapper}>
          <TouchableOpacity>
            <Text style={styles.commentViewAll}>View all 13 comments</Text>
          </TouchableOpacity>
          <CommentInput />
        </View>
        <View style={styles.timeAgoWrapper}>
          <Text style={styles.timeAgo}>6 HOURS AGO</Text>
        </View>
      </View>
    );
  }
}

export default PhotoCard;
