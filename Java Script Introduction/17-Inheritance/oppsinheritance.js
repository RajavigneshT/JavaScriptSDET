//Method overring it's only using inheritance

class Bank
{
    roi()
    {
        return 0;
    }
}

class AXIS extends Bank
{
    roi()
    {
        return 12.5;
    }

}

class HDFC extends Bank
{
    roi()
    {
        return 10.5;

    }
}

hdfc=new HDFC();
console.log(hdfc.roi())

ax=new AXIS();
console.log(ax.roi());




