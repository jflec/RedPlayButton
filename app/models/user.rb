class User < ApplicationRecord

    attr_reader :password

    validates :username, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :likes,
        foreign_key: :liker_id,
        class_name: :Like
    
    has_many :dislikes, 
        foreign_key: :disliker_id,
        class_name: :Dislike
    
    has_many :comments,
        foreign_key: :commenter_id,
        class_name: :Comment
    
    has_many :replies,
        foreign_key: :commenter_id,
        class_name: :Comment

    has_many :liked_videos,
        through: :likes,
        source: :likeable,
        source_type: :Video

    has_many :disliked_videos,
        through: :dislikes,
        source: :dislikeable,
        source_type: :Video

    before_validation :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        (user && user.is_password?(password)) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(p)
    end

    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end