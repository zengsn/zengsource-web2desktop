/**
 * 
 */
package org.zengsource.web2desktop.helper;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * @author zengsn
 *
 */
public abstract class CmdHelper {

	public static void exec(String... args) {

		String result = null;

		try {
			Process process = Runtime.getRuntime().exec(args);

			BufferedReader stdInput = new BufferedReader( //
					new InputStreamReader(process.getInputStream()));

			BufferedReader stdError = new BufferedReader( //
					new InputStreamReader(process.getErrorStream()));

			// read the output from the command
			// System.out.println("Here is the standard output of the command:\n");
			while ((result = stdInput.readLine()) != null) {
				System.out.println(result);
			}

			// read any errors from the attempted command
			// System.out.println("Here is the standard error of the command:\n");
			while ((result = stdError.readLine()) != null) {
				System.out.println(result);
			}
		} catch (IOException e) {
			//e.printStackTrace();
		}
	}

}
