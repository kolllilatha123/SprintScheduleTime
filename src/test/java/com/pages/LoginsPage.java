package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.LibGlobal;

public class LoginsPage extends LibGlobal {

	public LoginsPage() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(id = "email")
	private WebElement email;
	@FindBy(id = "pass")
	private WebElement pass;
	@FindBy(name = "login")
	private WebElement login;

	public WebElement getEmail() {
		return email;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getLogin() {
		return login;
	}

	public void login(String email, String pass) {
		type(getEmail(), email);
		type(getPass(), pass);
		btnClick(getLogin());
	}

}
