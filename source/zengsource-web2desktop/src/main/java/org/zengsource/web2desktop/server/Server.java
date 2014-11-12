/**
 * 
 */
package org.zengsource.web2desktop.server;

import org.zengsource.web2desktop.Component;
import org.zengsource.web2desktop.helper.CmdHelper;
import org.zengsource.web2desktop.helper.HttpHelper;

/**
 * 浏览器。
 * 
 * @author zengsn
 * @since 7.0
 */
public class Server extends Component {

	@Override
	public void start(String... args) {

		String path = args[0];
		String port = args[1];
		// String app = args[2];

		String rootUrl = "http://localhost:" + port + "/tomcat.gif";
		if (!HttpHelper.isUnreachable(rootUrl)) { // 服务器启动中
			stop(path, port); // 先关闭服务器
		}

		// 检查服务器是否已经启动
		if (HttpHelper.isUnreachable(rootUrl)) {
			// 修改配置
			// 启动服务器
			String command = path + "bin/startup.sh";
			System.out.print("Server starting ...");
			CmdHelper.exec("sh", command);
			while (HttpHelper.isUnreachable(rootUrl)) {
				try {
					System.out.print(" ...");
					Thread.sleep(5 * 1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			System.out.println(" OK!");
		}
	}

	@Override
	public void stop(String... args) {

		String path = args[0];
		String port = args[1];
		String command = path + "bin/shutdown.sh";

		String rootUrl = "http://localhost:" + port + "/tomcat.gif";
		System.out.println("Server shutting down ...");
		CmdHelper.exec("sh", command);
		while (!HttpHelper.isUnreachable(rootUrl)) {
			try {
				Thread.sleep(1 * 1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}System.out.println("Server shutting down ... OK!");
	}
}
