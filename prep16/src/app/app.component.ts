import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles = new Array<string>();
  spam(num: HTMLInputElement, testo: HTMLInputElement): boolean {

    let cont = Number(num.value);
    for (let i: number = 0; i < cont; i++)  //Ciclo For in typescript
    {
      this.articles.push(testo.value);
    }
    return false;



  }
}
