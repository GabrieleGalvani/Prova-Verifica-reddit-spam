import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles = new Array<string>();
  spam(num:HTMLInputElement,testo:HTMLInputElement): boolean{

    let cont = Number(num.value);
    for(let i:number =0; i< cont; i++)  //Ciclo For in typescript
    {
      this.articles.push(testo.value);
    }
    return false;
   


  }
}
