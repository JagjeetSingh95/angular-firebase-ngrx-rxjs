import { Action } from "@ngrx/store";

 export const START_LOADING = '[UI] Start Loading'; //'In this you can you use any name'
 export const STOP_LOADING = '[UI] Stop Loading';

export class StartLoading implements Action {
    readonly type = START_LOADING;
}

export class StopLoading implements Action {
    readonly type = STOP_LOADING;
}

export type UIActions = StartLoading | StopLoading;