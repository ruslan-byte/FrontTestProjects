o2.pageSelect =
{
	isOpen: false,
	open()
	{
		if(!this.isOpen)
		{
			$('._g-page-select').addClass('g-page-select--open');
			setTimeout(function()
			{
				o2.clickOutside($('._g-page-select__list'),()=>
				{
					$('._g-page-select').removeClass('g-page-select--open');
				});
			},10);
			this.isOpen = true;
		}
		else
		{
			this.isOpen = false;
		}
	},
	showOrHidePageSublist(pageItem)
	{
		$(pageItem).toggleClass("g-page-select__item-title--active");
		$(pageItem).parent().find('._page-sublist').toggleClass('g-page-select__sublist--active');
	},

};