# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_04_213547) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "commenter_id", null: false
    t.integer "video_id", null: false
    t.integer "root_comment_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["commenter_id"], name: "index_comments_on_commenter_id"
    t.index ["root_comment_id"], name: "index_comments_on_root_comment_id"
    t.index ["video_id"], name: "index_comments_on_video_id"
  end

  create_table "dislikes", force: :cascade do |t|
    t.integer "disliker_id", null: false
    t.string "dislikeable_type", null: false
    t.bigint "dislikeable_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dislikeable_type", "dislikeable_id"], name: "index_dislikes_on_dislikeable"
    t.index ["disliker_id"], name: "index_dislikes_on_disliker_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.string "likeable_type", null: false
    t.bigint "likeable_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["likeable_type", "likeable_id"], name: "index_likes_on_likeable"
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "about"
    t.string "password_digest"
    t.string "session_token"
    t.string "profile_picture_url"
    t.string "channel_picture_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "videos", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "uploader_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["title"], name: "index_videos_on_title"
    t.index ["uploader_id"], name: "index_videos_on_uploader_id"
  end

  create_table "views", force: :cascade do |t|
    t.integer "viewer_id", null: false
    t.integer "video_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["video_id"], name: "index_views_on_video_id"
    t.index ["viewer_id"], name: "index_views_on_viewer_id"
  end

end
