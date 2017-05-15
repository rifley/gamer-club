import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'division',
  pure: false
})
export class DivisionPipe implements PipeTransform {

  transform(input: Player[], desiredDevision){
    var output: Player[] = [];
    if(desiredDevision === "Wood") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].division === "Wood") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDevision === "Bronze") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].division === "Bronze") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDevision === "Silver") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].division === "Silver") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDevision === "Gold") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].division === "Gold") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDevision === "Platinum") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].division === "Platinum") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDevision === "Diamond") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].division === "Diamond") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
