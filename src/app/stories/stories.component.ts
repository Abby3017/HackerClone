import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackerNewsAPIService } from '../hackernews-api.service';


import * as _ from 'underscore';
import { PagerService } from '../pager.service';

@Component ({
	moduleId: module.id,
	selector:'app-stories',
	templateUrl:'./stories.component.html',
	styleUrls:['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
	items:any;
	private allItems: any[];
	item:any = {}
	pagedItems: any[];

	constructor(private _hackerNews: HackerNewsAPIService,private pagerService: PagerService) {
	}

/*
	ngOnInit() {
		this._hackerNews.fetchStories()
			.subscribe(
				items => this.items = items,
				error => console.log('Error fetch'));
	}
	*/

		ngOnInit() {
		this._hackerNews.fetchStories()
			.subscribe(data => {
				 this.allItems = data;
				this.setPage(1);
			},error => console.log('Error fetch')
				);
	}


	setPage(page: number) {
		if (page < 1 || page > this.item.totalPages)
			return;
		this.item = this.pagerService.getPager(this.allItems.length,page);
		console.log(this.item);
		this.pagedItems = this.allItems.slice(this.item.startIndex,this.item.endIndex +1);
	}
}