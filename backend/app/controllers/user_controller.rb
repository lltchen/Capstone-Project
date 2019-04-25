class UserController < ApplicationController

  def index
    @users = User.all
    render json: @users, each_serializer: UserSerializer
  end

  def show
    @user = User.find(params[:id])
    render json: @user, serializer: UserSerializer
  end

  def create
    @user = User.new(quote_params)
      if @user.save
        render json: @user
      else
        render json: {status: 'ERROR', message: 'A new quote was not able to be created', data: @user.errors}, status: :unproccessable_entity
      end
  end

  def update
    @user = Quote.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: {status: 'ERROR', message: 'Quote not updated', data: @user.errors}, status: :unproccessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name,:password,:email,:address,:phone_num,:role,:age)

  end
end
