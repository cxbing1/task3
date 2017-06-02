module.exports =function main(s) {
	
  	var num=parseInt(s);
	var sum=0;
	while(true)
	{
		var a=num%10;
		num=Math.floor(num/10);
		
		sum+=a;
	
		if(num==0)
		break;
	}
		//sum=parseInt(sum);
		//console.log(sum);
		return sum;
	
};
