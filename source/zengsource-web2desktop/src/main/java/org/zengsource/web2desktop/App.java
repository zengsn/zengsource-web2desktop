package org.zengsource.web2desktop;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.lang.StringUtils;
import org.zengsource.web2desktop.browser.Browser;
import org.zengsource.web2desktop.server.Server;

/**
 * Run Java Web Application as a Desktop Application.
 */
public class App {

	public static void main(String[] args) {
		System.out.println("Starting ...");

		// Find root directory
		String rootPath = "./";
		if (args != null) {
			for (String arg : args) {
				if (arg.startsWith("-home=")) {
					rootPath = arg.replace("-home=", "");
				}
			}
		}

		Properties properties = new Properties();
		try {
			properties.load( // 加载程序配置
					new FileReader(rootPath + "app.properties"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		String appName = properties.getProperty("app.name");

		// 1. Preparing database

		// 2. Preparing server
		String serverName = properties.getProperty("server.name");
		String serverPath = properties.getProperty("server.path", "tomcat");
		String serverPort = properties.getProperty("server.port", "8080");
		if (StringUtils.isNotEmpty(serverPath)) {
			Server server = new Server();
			if ("Apache Tomcat".equals(serverName)) {
				server.start( // 启动服务器
						rootPath + serverPath, serverPort, appName);
			}
		}

		// 3. Opening browser to access application
		String serverUrl = "http://localhost:" + serverPort + "/";
		String browserName = properties.getProperty("browser.name");
		if (StringUtils.isNotEmpty(browserName)) {
			String browserPath = properties.getProperty("browser.path");
			Browser browser = new Browser();
			browser.start( // 启动浏览器
					browserName, browserPath, serverUrl, appName);
		}

		System.out.println("App is running.");

		System.exit(0);
	}
}
