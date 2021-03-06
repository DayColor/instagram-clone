defmodule InstagramWeb.Schema do
  use Absinthe.Schema

  alias InstagramWeb.Resolvers
  alias InstagramWeb.Schema.Middleware

  import_types(__MODULE__.PostsTypes)
  import_types(__MODULE__.AccountsTypes)

  query do
    @desc "Get a list of photos"
    field :photos, list_of(:photo) do
      middleware(Middleware.Authorize)
      resolve(&Resolvers.Posts.photos/3)
    end

    @desc "Get a single photo based on an ID"
    field :photo, :photo do
      arg(:id, non_null(:id))

      resolve(&Resolvers.Posts.photo/3)
    end
  end

  mutation do
    @desc "Login as a user"
    field :login, :user_session do
      arg(:token, :string)
      arg(:provider, type: :provider)

      resolve(&Resolvers.Accounts.login/3)
    end

    @desc "Like or unlike a photo"
    field :like_photo, :boolean do
      arg(:photo_id, non_null(:id))
      middleware(Middleware.Authorize)
      resolve(&Resolvers.Reactions.like_photo/3)
    end
  end
end
