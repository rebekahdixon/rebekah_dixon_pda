require('minitest/autorun')
require('minitest/rg')
require_relative('card')
require_relative('testing_task_2')

class CardGameTest < MiniTest::Test

def setup

  @card1 = Card.new("hearts", 9)
  @card2 = Card.new("diamonds", 3)
  @card3 = Card.new("spades", 9)
  @card4 = Card.new( "clubs", 1)

  @cards1 = [@card1, @card2, @card3, @card4]
  @cards2 = []

  @cardgame1 = CardGame.new()
end

def test_checkforace__true
  expected = false
  actual = @cardgame1.checkforace(@card4)
  assert_equal(expected, actual)
end

def test_checkforace__false
  expected = true
  actual = @cardgame1.checkforace(@card3)
  assert_equal(expected, actual)
end

def test_highest_card
  expected = @card2
  actual =  @cardgame1.highest_card(@card1, @card2)
  assert_equal(expected, actual)
end

def test_cards_total__array_with_cards
  expected = "You have a total of 21"
  actual = CardGame.cards_total(@cards1)
  assert_equal(expected, actual)
end

def test_cards_total__array_empty
  expected = "You have a total of 2"
  actual = CardGame.cards_total(@cards2)
  assert_equal(expected, actual)
end

end
