Feature: validate caluctor sample app.

  @androidAppK
  Scenario: Verify elements present on calculator app.
    Given I launch the app
    Then Verify the elemnts present on home screen.


  @androidAppK
  Scenario Outline: Verify addition functionality on calculator app
  Given I launch the app
  When I take input as "<Input1>"
  And I perform operation "<operation>"
  And I take input as "<Input2>"
  Then I verify result with "<ExpectedValue>"

  Examples:
  | Input1 | Input2 | operation | ExpectedValue |
  | 5      | 7      | addition  | 12            |



    @androidAppK
  Scenario: Verify substraction functionality on calculator app.
    Given I launch the app
    When I take input as "<Input1>"
    And I perform operation "<operation>"
    And I take input as "<Input2>"
    Then I verify result with "<ExpectedValue>"

  Examples:
  | Input1 | Input2 | operation | ExpectedValue |
  | 7      | 4      | subtract  | 3         |


      @androidAppK
  Scenario: Verify multiplication functionality on calculator app.
    Given I launch the app
    When I take input as "<Input1>"
    And I perform operation "<operation>"
    And I take input as "<Input2>"
    Then I verify result with "<ExpectedValue>"

  Examples:
  | Input1 | Input2 | operation | ExpectedValue |
  | 7      | 4      | multiply  | 28        |


     @androidAppK
  Scenario: Verify division functionality on calculator app.
    Given I launch the app
    When I take input as "<Input1>"
    And I perform operation "<operation>"
    And I take input as "<Input2>"
    Then I verify result with "<ExpectedValue>"

  Examples:
  | Input1 | Input2 | operation | ExpectedValue |
  | 7      | 4      | divide  | 28      |