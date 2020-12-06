json.set! :users do
  json.array! @users do |user|
    json.extract! user, :id, :username, :email, :encrypted_password
  end
end