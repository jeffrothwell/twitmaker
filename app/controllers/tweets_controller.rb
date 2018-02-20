class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      respond_to do |format|
        format.json {
          render json: {tweets: {message: @tweet.message, created_at: @tweet.created_at.strftime('%b %e, %l:%M %p')}}
          puts @tweet.to_json
        }
      end
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
