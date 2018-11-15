import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitMyNameService {

  constructor() { }

  currentParticipant: string = undefined;

  @Output() emitParticipant: EventEmitter<string> = new EventEmitter();

  /*
   * Name: emitComponentName
   * Purpose: This function is used by other components to emit their 'name'. This allows other helper components to change their
   *  appearance accordingly, like the main menu component. This function also saves what the current component is.
   * @PARAM: componentName [string] The component currently being displayed
   * @RETURN: void
  */
  emitComponentName( componentName: string ): void {
    this.emitParticipant.emit( componentName );
    this.currentParticipant = componentName;
  }
}
