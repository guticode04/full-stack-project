class Track < ApplicationRecord

  validates :title, :lyrics, presence: true

  belongs_to :artist,
  class_name: :Artist,
  foreign_key: :artist_id,
  primary_key: :id

  has_many :annotations,
  class_name: :Annotation,
  foreign_key: :track_id,
  primary_key: :id


end