module.exports = function main(s) {
  	var num=parseInt(s);
	var sum=0;
	while(true)
	{
		var a=num%10;
		num=num/10;
		sum+=a;
	
		if(num==0)
		break;
	}


		return sum;
};
