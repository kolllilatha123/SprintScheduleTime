package com.PageObject;

import com.base.LibGlobal;
import com.pages.LoginsPage;

public class PageObjectManager extends LibGlobal {
	private static PageObjectManager PageObjectManager = null;
	private LoginsPage LoginsPage;

	private PageObjectManager() {

	}

	public static PageObjectManager getInstance() {
		if (PageObjectManager == null) {
			PageObjectManager = new PageObjectManager();
		}
		return PageObjectManager;

	}

	public LoginsPage getLoginsPage() {
		if (driver.getCurrentUrl().contains("facebook")) {
			PageObjectManager = null;
			LoginsPage = null;
			if (LoginsPage == null) {
				LoginsPage = new LoginsPage();
			}
		}

		return LoginsPage;
	}
}
