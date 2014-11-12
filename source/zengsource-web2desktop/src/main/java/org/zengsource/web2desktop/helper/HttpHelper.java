/**
 * 
 */
package org.zengsource.web2desktop.helper;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

/**
 * @author zengsn
 *
 */
public abstract class HttpHelper {

	public static final int UNREACHABLE = -999;

	public static boolean isUnreachable(String url) {
		return getStatusCode(url) == UNREACHABLE;
	}

	public static boolean is404(String url) {
		return 404 == getStatusCode(url);
	}

	public static int getStatusCode(String url) {
		CloseableHttpClient httpclient = HttpClients.createDefault();
		HttpGet httpGet = new HttpGet(url);
		int status = UNREACHABLE;
		try {
			CloseableHttpResponse response = httpclient.execute(httpGet);
			status = response.getStatusLine().getStatusCode();
		} catch (ClientProtocolException e) {
			// e.printStackTrace();
		} catch (IOException e) {
			// e.printStackTrace();
		}
		// System.out.println(url + " GET " + status);
		return status;
	}

}
