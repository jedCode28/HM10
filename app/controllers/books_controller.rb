class BooksController < ApplicationController
  def app
    # render our app with no props, will get the data we need with axios calls
    render component: "App"
   end
   
   def index
     @books = Book.order(title: :desc)
     # don't want to render component here just return data as JSON
     # render component: "Items", props: { items: @items }
     
     render json: @books
    
   end

   def create 
    book = Book.new(book_params)
    if book.save 
      render json: book 
    else 
      render json: { errors: book.errors }, status: :unprocessable_entity
    end 
  end 

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end 

end
