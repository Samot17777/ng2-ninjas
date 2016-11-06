import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    //check if search term is undefined
    if(term === undefined){
      return ninjas;
    } 
    //return filtered
    return ninjas.filter((ninja) => ninja.name.toLowerCase().includes(term.toLowerCase()));
  }

}
