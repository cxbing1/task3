module.exports = function main(s) {
  	var num=parseInt(s);
	var sum=0;
	while(true)
	{
		var a=num%10;
		var b=num/10;
		sum+=a;
	
		if(b==0)
		break;
	}


		return sum;
};
