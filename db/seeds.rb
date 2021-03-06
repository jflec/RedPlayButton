# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all
ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

User.create(username: 'joe', password: '111111', email:'joe@bingle.com', profile_picture_url: 'https://i.imgur.com/QWMN2fV.png')
User.create(username: 'demo', password: 'password', email:'demo@bingle.com', about: 'I am a demo.')