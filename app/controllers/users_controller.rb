class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      flash.now[:notice] = 'Created account!'
      log_in_user!(@user)
      render :new
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end
end