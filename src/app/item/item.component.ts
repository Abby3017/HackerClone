import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { HackerNewsAPIService } from '../hackernews-api.service';


import * as _ from 'underscore';
import { PagerService } from '../pager.service';

@Component ({
	moduleId: module.id,
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})

export class  ItemComponent implements OnInit {
	
	@Input() itemID:number;
	item:any;
	private allItems: any[];
	pagedItems: any[];

	constructor(private hackerNews: HackerNewsAPIService,private pagerService: PagerService) {}

	ngOnInit() {
		this.hackerNews.fetchItem(this.itemID).subscribe(
			data =>{
				this.item = data;
		//	this.allItems = data;
		//	this.setPage(1);
			},error => console.log("Could not load item" + this.itemID));
	}


	//setPage(page: number) {
	//	if (page < 1 || page > this.item.totalPages)
	//		return;
//
//		this.item = this.pagerService.getPager(this.allItems.length,page);
//		console.log(this.item);
//		this.pagedItems = this.allItems.slice(this.item.startIndex,this.item.endIndex +1);
//	}
	
}