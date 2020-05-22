import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
};

export type UserSession = {
  __typename?: 'UserSession';
  token: Scalars['String'];
};

export enum Provider {
  Facebook = 'FACEBOOK',
}

export type Query = {
  __typename?: 'Query';
  photos: Array<Photo>;
  photo?: Maybe<Photo>;
};

export type QueryPhotoArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<UserSession>;
  likePhoto?: Maybe<Scalars['Boolean']>;
};

export type MutationLoginArgs = {
  provider?: Maybe<Provider>;
  token?: Maybe<Scalars['String']>;
};

export type MutationLikePhotoArgs = {
  photoId: Scalars['ID'];
};

export type PhotosQueryVariables = {};

export type PhotosQuery = { __typename?: 'Query' } & {
  photos: Array<
    { __typename?: 'Photo' } & Pick<Photo, 'id' | 'imageUrl' | 'caption'>
  >;
};

export type LoginMutationVariables = {
  provider?: Maybe<Provider>;
  token?: Maybe<Scalars['String']>;
};

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'UserSession' } & Pick<UserSession, 'token'>>;
};

export type LikePhotoMutationVariables = {
  photoId: Scalars['ID'];
};

export type LikePhotoMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'likePhoto'
>;

export const PhotosDocument = gql`
  query photos {
    photos {
      id
      imageUrl
      caption
    }
  }
`;
export type PhotosProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    PhotosQuery,
    PhotosQueryVariables
  >;
} &
  TChildProps;
export function withPhotos<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PhotosQuery,
    PhotosQueryVariables,
    PhotosProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    PhotosQuery,
    PhotosQueryVariables,
    PhotosProps<TChildProps, TDataName>
  >(PhotosDocument, {
    alias: 'photos',
    ...operationOptions,
  });
}
export type PhotosQueryResult = ApolloReactCommon.QueryResult<
  PhotosQuery,
  PhotosQueryVariables
>;
export const LoginDocument = gql`
  mutation login($provider: Provider, $token: String) {
    login(provider: $provider, token: $token) {
      token
    }
  }
`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;
export type LoginProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    LoginMutation,
    LoginMutationVariables
  >;
} &
  TChildProps;
export function withLogin<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps, TDataName>
  >(LoginDocument, {
    alias: 'login',
    ...operationOptions,
  });
}
export type LoginMutationResult = ApolloReactCommon.MutationResult<
  LoginMutation
>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LikePhotoDocument = gql`
  mutation likePhoto($photoId: ID!) {
    likePhoto(photoId: $photoId)
  }
`;
export type LikePhotoMutationFn = ApolloReactCommon.MutationFunction<
  LikePhotoMutation,
  LikePhotoMutationVariables
>;
export type LikePhotoProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    LikePhotoMutation,
    LikePhotoMutationVariables
  >;
} &
  TChildProps;
export function withLikePhoto<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LikePhotoMutation,
    LikePhotoMutationVariables,
    LikePhotoProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LikePhotoMutation,
    LikePhotoMutationVariables,
    LikePhotoProps<TChildProps, TDataName>
  >(LikePhotoDocument, {
    alias: 'likePhoto',
    ...operationOptions,
  });
}
export type LikePhotoMutationResult = ApolloReactCommon.MutationResult<
  LikePhotoMutation
>;
export type LikePhotoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LikePhotoMutation,
  LikePhotoMutationVariables
>;
