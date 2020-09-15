$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/SearchProduct.feature");
formatter.feature({
  "name": "verifying the FacebookPage functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying the FacebookPage details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the FacebookPage page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should \"\u003cemail\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User verify msg",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "pass"
      ]
    },
    {
      "cells": [
        "kollilatha123",
        "kolli123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying the FacebookPage details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the FacebookPage page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step.userIsOnTheFacebookPagePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should \"kollilatha123\" and \"kolli123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step.userShouldAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step.userShouldClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify msg",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.userVerifyMsg()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});