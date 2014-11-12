/**
 * 
 */
package org.zengsource.web2desktop.browser;

import org.zengsource.web2desktop.Component;
import org.zengsource.web2desktop.helper.CmdHelper;
import org.zengsource.web2desktop.helper.HttpHelper;

/**
 * 浏览器。
 * 
 * @author zengsn
 * @since 7.0
 */
public class Browser extends Component {

	@Override
	public void start(String... args) {

		final String name = args[0];
		final String path = args[1];
		final String url = args[2];
		final String app = args[3];

		// 检查应用程序是否启动完成
		System.out.print("Checking app ...");
		while (HttpHelper.isUnreachable(url + app)) {
			try {
				System.out.print(" ...");
				Thread.sleep(5 * 1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.println(" OK!");

		// 创建线程
		Thread thread = new Thread(new Runnable() {
			public void run() {
				if ("Google Chrome".equals(name)) {
					System.out.println(path + " --app=" + url + app);
					CmdHelper.exec(path, "--app=" + url + app, "&");
				} else { // 其他浏览器
					System.out.println(path + " " + url + app);
					CmdHelper.exec(path, url + app, "&");
				}
				System.out.println("App stopped!");
			}
		});
		//thread.setDaemon(true);
		System.out.print("Starting browser ...");
		thread.start();
		System.out.println(" OK!");
	}
}
