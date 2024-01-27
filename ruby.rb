# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    attr_accessor :model, :wheels, :current_speed
    # ran into error adding only :model
    # double checked and added :wheels and :current_speed
    # nitialize the Bike with a model, 2 wheels, and zero speed
    def initialize(model)
      @model = model
      @wheels = 2
      @current_speed = 0
    end
  
    # increase the current speed by adding += amount which would increase current speed.
    def pedal_faster(amount)
      @current_speed += amount
    end
  
    # decrease the current speed by a given amount, but not below zero
    def brake(amount)
      @current_speed = [0, @current_speed - amount].max
    end
  
    # made a return that has the bike information
    # code was able to pass
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
  end