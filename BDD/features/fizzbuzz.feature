Feature: Create function to make a fizzbuzz algorithm

  Background: Preconditions
    Given We have numbers 1 to 100

  Scenario Outline: Check if the number is multiple of 3
    When '<number>' is multiple of 3
    Then Show the word of multiple 3 "Fizz"
    Examples:
      | number |
      | 3      |
      | 6      |
      | 9      |

  Scenario Outline: Check if the number is multiple of 5
    When '<number>' is multiple of 5
    Then Show the word of multiple 5 "Buzz"
    Examples:
      | number |
      | 5      |
      | 10     |

  Scenario Outline: Check if the number is multiple of 3 and 5
    When '<number>' is multiple of 3 and 5
    Then Show the word of multiple of 3 and 5 "FizzBuzz"
    Examples:
      | number |
      | 15     |

  Scenario Outline: When the not accomplish the conditions
    When '<number>' is not multiple 3 or 5
    Then Show nothin ""
    Example: 
      | number |
      | 1      |
      | 4      |
      | 2      |