o2.search =
{
	onChange(field)
	{
		if(field.value != '')
			field.classList.add('search__field--active');
		else
			field.classList.remove('search__field--active');
	},
	clearSearchField(crossButton)
	{
		let searchField = $(crossButton).parent()[0].children[0];
		$(searchField).val('');
		this.onChange(searchField);
	}
};
