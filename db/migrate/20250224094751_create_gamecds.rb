class CreateGamecds < ActiveRecord::Migration[8.0]
  def change
    create_table :gamecds do |t|
      t.string :name
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
