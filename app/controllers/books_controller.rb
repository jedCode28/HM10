class BooksController < ApplicationController
  def app
    # render our app with no props, will get the data we need with axios calls
    render component: 'App'
   end
   
   def index
     @books = Book.order(title: :desc)
     
     # don't want to render component here just return data as JSON
     # render component: "Items", props: { items: @items }
     
     render json: @books
    
   end
   
end
