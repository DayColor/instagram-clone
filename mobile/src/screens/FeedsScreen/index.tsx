import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import { PhotoCard } from '../../components';
import { Photo, withPhotos, PhotosProps } from '../../graphql-types';

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface State {
  isRefreshing: boolean;
}

class FeedsScreen extends Component<PhotosProps, State> {
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

export default withPhotos()(FeedsScreen);
