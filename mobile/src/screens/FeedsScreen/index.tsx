import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql, ChildDataProps } from 'react-apollo';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import { Photo } from 'src/types';
import { PhotoCard } from '../../components';

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Response {
  photos: Photo[];
}

interface State {
  isRefreshing: boolean;
}

class FeedsScreen extends Component<ChildDataProps<{}, Response>, State> {
  public state = {
    isRefreshing: false,
  };

  private keyExtractor = (item: Photo): string => item.id;

  private renderItem = ({ item }: ListRenderItemInfo<Photo>) => (
    <PhotoCard data={item} />
  );

  private refreshRequest = async () => {
    this.setState({ isRefreshing: true });
    await this.props.data.refetch();
    this.setState({ isRefreshing: false });
  };

  public render() {
    const { data } = this.props;
    const { isRefreshing } = this.state;

    if (data.loading) {
      return (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <FlatList
        data={data.photos}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={this.refreshRequest}
          />
        }
      />
    );
  }
}

const getPhotos = gql`
  query {
    photos {
      id
      imageUrl
      caption
    }
  }
`;

export default graphql<{}, Response, {}, ChildDataProps<{}, Response>>(
  getPhotos,
)(FeedsScreen);
