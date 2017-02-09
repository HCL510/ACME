#main.rb
# ruby 2.0.0

require 'sinatra'
require 'sendgrid-ruby'
require 'ruby_http_client'

get '/' do
  erb :home
end

get '/about' do 
  erb :about
end

get '/work' do 
  erb :work
end

get '/contact' do 
  erb :contact
end