 function main() {
	var s="123";
  	var num=parseInt(s);
	var sum=0;
	while(true)
	{
		var a=num%10;
		num=parseInt（num/10）;
		sum+=a;
	
		if(num==0)
		break;
	}

		console.log(sum);
		return sum;
	
};
