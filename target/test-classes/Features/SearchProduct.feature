Feature: verifying the FacebookPage functionalities


	Background:
	 Given User should be in login page 
	 
	 Scenario: verifying the FacebookPage  with valid details
	 	When User should enter username and password with valid details
		Then User should navigate to next page
		
	 Scenario: verifying the FacebookPage  with invalid details
		 When  User should enter username and password with in valid details
			Then User unable to navigate to next page
			