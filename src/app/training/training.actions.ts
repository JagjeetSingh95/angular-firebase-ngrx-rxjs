import { Action } from "@ngrx/store";
import { Exercise } from "./exercise.model";

 export const SET_AVAILABLE_TRAINING = '[Training] Set Available Training';
 export const SET_FINISH_TRAINING = '[Training] Set Finished Training ';
 export const START_TRAINING = '[Training] Start Training ';
 export const STOP_TRAINING = '[Training] Stop Training ';

export class SetAvailableTraings implements Action {
    readonly type = SET_AVAILABLE_TRAINING;

    constructor(public payload: Exercise[]) {}
}

export class SetFinishedTrainings implements Action {
    readonly type = SET_FINISH_TRAINING;
    constructor(public payload: Exercise[]) {}
}

export class StartTraings implements Action {
    readonly type = START_TRAINING;
    constructor(public payload: string) {}
}

export class StopTrainings implements Action {
    readonly type = STOP_TRAINING;

}

export type TrainingActions = SetAvailableTraings | SetFinishedTrainings | StartTraings | StopTrainings; 