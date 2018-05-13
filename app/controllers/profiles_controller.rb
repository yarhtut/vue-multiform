class ProfilesController < ApplicationController
  def index

  end

  def user_info_step_1 
      
    profile = Profile.new(profile_params)
    respond_to do |format|
      if profile.save
        format.html { redirect_to profile, notice: 'Profile was successfully created.' }
        format.json { render :show, status: :created, location: profile }
      else
        format.html { render :new }
        format.json { render json: profile.errors, status: :unprocessable_entity }
      end
    end
  end

  def user_info_step_2 

  end

  private 
  def profile_params
    params.require(:profile).permit(:first_name, :last_name, :nick_name, :email, :steps, :street, :suburb, :city, :partner_relation, :partner, :children_total, :child_name, :income)
  end
end
