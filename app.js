const userName=document.querySelector("#user-name");
const dob=document.querySelector("#dob");
const btn=document.querySelector("#btn");
const userNameError=document.querySelector("#username-error");
const dobError=document.querySelector("#dob-error");
const result=document.querySelector("#result");

// Checking if birth year is leap year
function isLeapYear(year)
{
    if(year%4==0 && year%100==0 && year%400==0)
    return true;
    else if(year%4==0 && year%100!=0)
    return true;
    else
    return false;
}


// Validating input
function inputValidation(userName,year)
{
    if(userName=="")
    userNameError.innerHTML="An user name is required";
    else if(year=="")
    dobError.innerHTML="Date of birth is required";
    else
    {
        userNameError.innerHTML="";
        dobError.innerHTML="";
        return true;
    }
    return false;
}


btn.addEventListener("click",function()
{
    userNameError.innerHTML="";
    dobError.innerHTML="";
    const year=dob.value.split("-")[0];
    const name=userName.value;
    if(inputValidation(name,year))
    {
        if(isLeapYear(year))
        result.innerHTML="Horray "+name+" is born on a leap year";
        else 
        result.innerHTML=name+" is not born on a leap year";
    }
})