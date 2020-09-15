package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src/test/resources/failedscenarios.txt", glue = {
		"com.stepdefinition" }, dryRun = true, monochrome = true, plugin = { "pretty", "html:target",
				"json:target/cucum.json",
				"rerun:src/test/resources/Features/failedscenarios.txt" }, snippets = SnippetType.CAMELCASE, strict = true)
public class TestRerunnerClass {

}
