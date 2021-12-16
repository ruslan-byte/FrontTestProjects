o2.gFrom =
{
	submit(instance)
	{
		let validator = new O2Validator(instance);
		if(!validator.validate())
			return false;
	},
};