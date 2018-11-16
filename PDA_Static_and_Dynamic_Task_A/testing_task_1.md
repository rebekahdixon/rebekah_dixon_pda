### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out static testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

#no def initialize to get info to use  
#no attr reader/writers

  def checkforAce(card)
    #use of captial in Ace should be checkforace
    if card.value = 1
      #needs == not =
      return true
    else
      return false
    end
  end


  dif highest_card(card1 card2)
  #should be def not dif
  #missing comma between card1 and card 2
  if card1.value > card2.value
    return card.name
    #no method for name
    #should be card1 not card.name
  else
    card2
  end
end
end
#last end should be at bottom to end class

def self.cards_total(cards)
  total
  #no value for total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
