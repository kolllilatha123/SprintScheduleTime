package com.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport extends LibGlobal {
	public static void generateJVMReport(String jsonFile) {

		File loc = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\Reporting");
		Configuration config = new Configuration(loc, "facebook");
		config.addClassifications("sprint", "10");
		config.addClassifications("browser", "chrome");
		config.addClassifications("ENV", "UAT");
		config.addClassifications("platform", "windows-10");

		List<String> jsonFile1 = new ArrayList<String>();
		jsonFile1.add(jsonFile);

		ReportBuilder br = new ReportBuilder(jsonFile1, config);
		br.generateReports();
	}

}
