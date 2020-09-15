package com.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.base.LibGlobal;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step extends LibGlobal {

	WebDriver driver;

	@Given("User should be in login page")
	public void userShouldBeInLoginPage() {
		getDriver();
		loadUrl("https://www.facebook.com/");
	}

	@When("User should enter username and password with valid details")
	public void userShouldEnterUsernameAndPasswordWithValidDetails() {
		WebElement user = driver.findElement(By.id("email"));
		user.sendKeys("kollilatha123");
		WebElement pass1 = driver.findElement(By.id("pass"));
		pass1.sendKeys("Neelsai@123");
	}

	@Then("User should navigate to next page")
	public void userShouldNavigateToNextPage() {
		WebElement submit = driver.findElement(By.id("u_0_c"));
		submit.submit();
	}

	@When("User should enter username and password with in valid details")
	public void userShouldEnterUsernameAndPasswordWithInValidDetails() {
		WebElement user = driver.findElement(By.id("email"));
		user.sendKeys("kollilatha");
		WebElement pass1 = driver.findElement(By.id("pass"));
		pass1.sendKeys("Neelsai@123");
	}

	@Then("User unable to navigate to next page")
	public void userUnableToNavigateToNextPage() {

	}
}