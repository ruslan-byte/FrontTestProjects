o2.gInput =
{
	init()
	{
		this.changeAllPlaceHolder();
	},
	changeAllPlaceHolder()
	{
		$('.g-input__input').each(function(index,field)
		{
			o2.gInput.onChange(field);
		});
	},
	onChange(instance)
	{
		if(instance.value != '')
			instance.classList.add('g-input__input--active');
		else
			instance.classList.remove('g-input__input--active');
	},
};