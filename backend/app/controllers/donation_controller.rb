class DonationController < ApplicationController

  def index
    @donations = Donation.all
    render json: @donations
  end

  def show
    @donation = Donation.find(params[:id])
    render json: @donation
  end

  def create
    @donation = Donation.new(donation_params)
      if @donation.save
        render json: @donation
      else
        render json: {status: 'ERROR', message: 'A new quote was not able to be created', data: @donation.errors}, status: :unproccessable_entity
      end
  end

  def donation_params
    params.permit(:id,:campaign_id,:donation_amount,:user_id,:time_date)

  end


end
