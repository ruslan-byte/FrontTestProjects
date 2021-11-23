o2.pageSelect =
{
	isOpen: false,
	open()
	{
		if(!this.isOpen)
		{
			$('._page-select').addClass('page-select--open');
			setTimeout(function()
			{
				o2.clickOutside($('._page-select__list'),()=>
				{
					$('._page-select').removeClass('page-select--open');
				});
			},10);
			this.isOpen = true;
		}
		else
		{
			this.isOpen = false;
		}
	},

};