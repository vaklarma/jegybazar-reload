import {Component} from '@angular/core';
import {split} from 'ts-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jegybazar-reload ez egy újrakezdés megint';
  convertedArray = [];
  sumResult;


  getSum(value) {

    //  const fg = (accu, curr) => accu + curr;
    //  this.disp = this.tomb.reduce((accu, curr) => accu + curr);

    this.convertedArray = this.convertInput(value);
    this.sumResult = this.convertedArray.reduce(function (accu, curr) {
      return (accu + curr);
    });

  }

  convertInput(value: string) {
    return value.split(',')
      .map(Number)
      .filter(x => !isNaN(x));
  }
  onKey(value: string) {
this.getSum(value);
  }
}
