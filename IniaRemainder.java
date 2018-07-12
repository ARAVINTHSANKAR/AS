package logInia;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class IniaRemainder {

	public static void main(String[] args) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Aravinth sankar\\Desktop\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		driver.get("https://sangam.objectfrontier.com/login?service=https%3A%2F%2Finia.objectfrontier.com%2F");
		
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//*[@id=\"username\"]")).sendKeys("aravinth.ba");
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("qwertyuiop12AS");
		
		driver.findElement(By.xpath("//*[@id=\"fm1\"]/button")).click();
		
		driver.findElement(By.xpath("//*[@id=\"top-menu\"]/ul/li[4]/a")).click();
		
		driver.findElement(By.xpath("//*[@id=\"content\"]/table/tbody/tr[1]/td[5]/a/img")).click();
		
		driver.findElement(By.xpath("//*[@id=\"wktime_edit\"]/div[2]/a")).click();
		
		driver.findElement(By.xpath("//*[@id=\"hours4_\"]")).sendKeys("8.00");
		
		driver.findElement(By.xpath("//*[@id=\"wktime_save\"]")).click();
		
		driver.quit();
	}
}
