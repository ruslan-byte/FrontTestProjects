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
	showOrHidePageSublist(pageItem)
	{
		$(pageItem).toggleClass("page-select__item-title--active");
		$(pageItem).parent().find('._page-sublist').toggleClass('page-select__sublist--active');
	},

};