function regex_calc()
{
    var str = "ssid=JC-GROUP&password=jcgroup!@#";
    var patter = /([^&=]*)/g;
    // console.log(patter.exec("=JC-GROUP&password=jcgroup!@#"));
    console.log(str.match(patter));
}
