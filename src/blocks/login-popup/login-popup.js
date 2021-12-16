o2.loginPopupForm =
{
	submit(instance)
	{
		let validator = new O2Validator(instance);
		if(!validator.validate())
			return false;
	},
};