import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { HackerNewsAPIService } from '../hackernews-api.service';


@Component ({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})

export class  ItemComponent implements OnInit {
	
	@Input() itemID:number;
	item:any;
	

	constructor(private hackerNews: HackerNewsAPIService) {}

	ngOnInit() {
		this.hackerNews.fetchItem(this.itemID).subscribe(
			data =>{
				this.item = data;
		},error => console.log("Could not load item" + this.itemID));
	}	
}