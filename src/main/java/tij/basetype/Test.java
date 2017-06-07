package tij.basetype;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Test {
	public static void main(String[] args) throws ParseException {
		SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd");
		System.out.println(s.parse("2017-06-19"));
		System.out.println(new SimpleDateFormat("yyyy-MM-dd").parse("2017-06-19"));
		
	}
}
