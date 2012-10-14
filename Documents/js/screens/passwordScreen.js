/**
author - deviator
*/


function PasswordScreen (app)
{
	this.mApplication = app;
	this.mDivName ="passwordScreen";
	this.setUp();
	
}


PasswordScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	var sContent = '<div  id="login-form" align="center" style=" margin-top:100px; "><font color="black">Enter Password : </font><input type="password"   id="password_input" size="10"></input><button id="submit_passwd"> LOAD THE ASSETs </button></div>'			

	document.getElementById(this.mDivName).innerHTML =sContent;
	document.getElementById('submit_passwd').onclick= function()
	{
		if(document.getElementById('password_input') != null)
			{
				if(document.getElementById('password_input').value == 'Code@1234')
				{
					that.mApplication.nextTransition();
				}
				else
				{
					alert(' WRONG PASSWORD! TRY AGAIN');
				}
			}
	};
	
	
	
}
