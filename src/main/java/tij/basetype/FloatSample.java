package tij.basetype;

public class FloatSample {
	public static void main(String[] args) {
		float f=-0.4f;
		float zero=0f;
		System.out.println(f/0);
		System.out.println(zero/0);
		//System.out.println(0/0); //java.lang.ArithmeticException: / by zero
		System.out.println(Double.isNaN(4));//check whether x is a number
		System.out.println(2.0-1.1);
		System.out.println(2.0-1.3);
		//System.out.println((int)true);
		byte b=1;
		char c=2;
		//c=b+c;//cannot convert from int to char
		String s1="abc";
		String s2="abcd";
		String s3=s1+"d";
		System.out.println(s3.equals(s2));
		System.out.println(s3==s2);
	}
}
