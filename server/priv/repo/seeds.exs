# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Instagram.Repo.insert!(%Instagram.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Instagram.Posts

mock_photos = 9

photos_list = [
  "https://picsum.photos/id/0/5616/3744",
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/100/2500/1656",
  "https://picsum.photos/id/1000/5626/3635",
  "https://picsum.photos/id/1001/5616/3744",
  "https://picsum.photos/id/1002/4312/2868",
  "https://picsum.photos/id/1003/1181/1772",
  "https://picsum.photos/id/1005/5760/3840",
  "https://picsum.photos/id/1006/3000/2000",
  "https://picsum.photos/id/1008/5616/3744"
]

for index <- 0..mock_photos do
  photo = %{
    image_url: Enum.at(photos_list, index),
    caption: Faker.Lorem.Shakespeare.hamlet()
  }

  Posts.create_photo(photo)
end
