package logInia;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public abstract class IniaRemainder {

	public static void main(String[] args) {
		
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Aravinth sankar\\Desktop\\geckodriver\\geckodriver.exe");
		
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.google.com");
		
		driver.quit();
	}
}
