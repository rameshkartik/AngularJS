function Utility()
{
    this.ApplicationName = "Employee App"
    this.AppVersion = "4.8.0"
    this.getDate = function ()
    {
        var dat = new Date();
        return dat.toDateString();
    }
    this.isEmpty = function (value)
    {
        if(value.length == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

}