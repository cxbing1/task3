module.exports = function main(s) {
  	var num=parseInt(s);
	var sum=0;
	while(true)
	{
		a=num%10;
		b=num/10;
		sum+=a;
	
		if(b==0)
		break;
	}


		return sum;
};
