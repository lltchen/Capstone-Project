class UserController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show

    @user = User.find_by(email:params[:email])
    if @user
      render json: UserSerializer.create(@user)
    else
      render json: {status: 'ERROR', message: 'cant find user by this email', data: @user.errors}, status: :unproccessable_entity
    end
  end

  def create
    byebug
    @user = User.create(user_params)
      if @user.valid?
        @token = JWT.encode({user_id: @user.id}, "secret")
        render json: { user: @user, jwt: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
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
    params.permit(:name,:image,:password,:email,:address,:phone_num,:role,:age)

  end
end
