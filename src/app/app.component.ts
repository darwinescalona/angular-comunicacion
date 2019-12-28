import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppStore{
  contador: number
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angularer';
  contador: number;

  constructor(
    //private store: Store<AppStore>
    ){
    //this.contador = 10;
    /*this.store.subscribe(state =>{
      console.log('state', state);
    });*/
  }

  incrementar(){
    const action: Action = {
      type: 'INCREMENTAR'
    }
    //this.store.dispatch(action);
    //this.contador++;
  }

  decrementar(){
    //this.contador--;
  }
}
