import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinksServiceService {

  constructor() { }

    getAll():[site:String ,link:String, img:String][] {
      return  [
          ["GitHub", "https://github.com/Jovali99", '../../../assets/images-ext-links/GitHub.png',],
          ["LinkedIn", "https://www.linkedin.com/in/joakim-vadman-lidberg-8a4060267/", '../../../assets/images-ext-links/LinkedIn.png']]
    }
}
