require 'sinatra'

# You need to run heroku ps:scale web=1


get '/' do
 erb :index
 # "Woot"
end
