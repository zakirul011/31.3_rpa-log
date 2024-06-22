(function ($) {
	"use strict";
	
   // niceSelect
   $("select").niceSelect();	

	
	// TABLE ANALIZE
	const mainSelects = document.querySelectorAll('.main-filter .nice-select.filter')
	const subSelects = document.querySelectorAll('.sub-filter .nice-select.filter')
	const anaLizerTables = document.querySelectorAll('.analizer-table-inner')
	const filterBnt = document.querySelectorAll('.filter-btn')

	mainSelects.forEach(select => {
		let opts = select.querySelectorAll('.option')
		opts.forEach((opt, index) => {
			opt.addEventListener('click', ()=>{
				for (let i = 0; i < subSelects.length; i++) {
					subSelects[i].classList.remove('active')
				}
				subSelects[index].classList.add('active')
			})

		});
	});

	filterBnt.forEach(btn => {
		btn.addEventListener('click', ()=>{
			let indexSubFilter;
			subSelects.forEach(filter => {
				if (filter.classList.contains('active')) {
					indexSubFilter = filter
				}
			});
			let selectedOpt = indexSubFilter.querySelector('.option.selected')
			let optIndex = Array.from(selectedOpt.parentElement.children).indexOf(selectedOpt)
			
			let selectWrap = indexSubFilter.closest('.sub-filter')
			let parentIndex = Array.from(selectWrap.querySelectorAll('.nice-select.filter')).indexOf(indexSubFilter)

			let table = anaLizerTables[parentIndex].querySelectorAll('.analizer-table')
			let AllTable = document.querySelectorAll('.analizer-table')

			for (let i = 0; i < AllTable.length; i++) {
				AllTable[i].classList.remove('active')
			}
			table[optIndex].classList.add('active')

		})
	});

	
})(jQuery);