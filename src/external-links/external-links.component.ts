import {Component, OnInit} from '@angular/core';
import {max} from "rxjs";
import {ExternalLinksServiceService} from "../app/services/external-links-services/external-links-service.service";

@Component({
  selector: 'app-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.css']
})
export class ExternalLinksComponent implements OnInit{
    constructor(private externalLinks:ExternalLinksServiceService) {}

    extLinks:[site:String ,link:String, img:String][] = [];
    ngOnInit() {

        this.extLinks = this.externalLinks.getAll();
        /*
        var sites: string[] = ["LinkedIn", "GitHub"];
        var imageUrl: String[] = ["../assets/instagram.png", "../assets/github.png"];
        site.foreach site{ image to column +1 canvas
        [sites][image]
        [sites][image]**/

    }


    /*
    addItem(sites: string[], imageUr: string[]) {
        // Add an item to the array
        var amount: number = max(len(this.sites), len(image));
        for (var i = 0; i<amount; i++) {
            this.items.push({ title: 'New Item' });
        }
    }*/
}
