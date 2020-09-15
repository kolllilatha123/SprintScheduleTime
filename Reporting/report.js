$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/SearchProduct.feature");
formatter.feature({
  "name": "verifying the FacebookPage functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step.userShouldBeInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying the FacebookPage  with valid details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should enter username and password with valid details",
  "keyword": "When "
});
formatter.match({
  "location": "Step.userShouldEnterUsernameAndPasswordWithValidDetails()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdefinition.Step.userShouldEnterUsernameAndPasswordWithValidDetails(Step.java:25)\r\n\tat ✽.User should enter username and password with valid details(src/test/resources/Features/SearchProduct.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.userShouldNavigateToNextPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step.userShouldBeInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying the FacebookPage  with invalid details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should enter username and password with in valid details",
  "keyword": "When "
});
formatter.match({
  "location": "Step.userShouldEnterUsernameAndPasswordWithInValidDetails()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdefinition.Step.userShouldEnterUsernameAndPasswordWithInValidDetails(Step.java:39)\r\n\tat ✽.User should enter username and password with in valid details(src/test/resources/Features/SearchProduct.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User unable to navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.userUnableToNavigateToNextPage()"
});
formatter.result({
  "status": "skipped"
});
});