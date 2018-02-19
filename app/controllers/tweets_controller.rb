class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    puts tweet_params
    # in the solution code at wdi-ajax-forms this is not wrapped in an
    # if statement, find out why, do we not need to check this stuff
    # with ajax because it has a .fail function?
    if @tweet.save
      # respond_to do |format|
      #   format.html { render partial: "tweet" }
      # end
      redirect_to tweets_path
    else
      render :index
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
