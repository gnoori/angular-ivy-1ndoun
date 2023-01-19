import { Component, VERSION, OnInit } from '@angular/core';
import { of, from, map, tap, take } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    from(['Lucy', 'Safedak', 'Pashmak', '0'])
      .pipe(
        tap((item) => {
          if (item === '0') {
            throw new Error('Not a cat');
          }
          console.log(item);
        }),
        map((item) => `${item} Noori`),
        map((item) => `Cat  ${item}`)
      )
      .subscribe({
        next: (name) => console.log(`Full Name: ${name}`),
        error: (err) => console.log(`Error ${err}`),
        complete: () => console.log('Completed'),
      });
  }
}
