class CampaignController < ApplicationController

    def index
      @campaigns = Campaign.all
      render json: @campaigns
    end

    def show
      @campaign = Campaign.find(params[:id])
      render json: @campaign
    end

    def create
      @campaign = Campaign.new(campaign_params)
      # @campaign.image.attach(params[:image])
        if @campaign.save
          render json: @campaign
        else
          render json: {status: 'ERROR', message: 'A new quote was not able to be created', data: @campaign.errors}, status: :unproccessable_entity
        end
    end

    def update
      @campaign = Campaign.find(params[:id])
      if @campaign.update(campaign_params)
        render json: @campaign
      else
        render json: {status: 'ERROR', message: 'Quote not updated', data: @campaign.errors}, status: :unproccessable_entity
      end
    end

    def campaign_params
      params.permit(:image,:subject,:description,:goal,:user_id,:duration,:reason_for_arrest,:time_at_rikers,:time_untill_hearing,:for_whom,:relationship)
    end
end
