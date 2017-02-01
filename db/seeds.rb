# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Destroying posts"
Post.destroy_all

NUM_POSTS = 5


puts "Creating posts"

NUM_POSTS.times do |i|
  Post.create({
      title: "Title #{i}",
      author: "Batman",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem, natus labore sunt blanditiis. Esse, odit maxime nisi error eius. Possimus, temporibus dicta? Quam cum ducimus, in asperiores vitae at?"
    }) 
end
