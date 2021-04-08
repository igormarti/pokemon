import {Injectable} from '@angular/core';
import { Action } from '@ngrx/store';
import Favorite from 'src/app/interfaces/favorite.interface';

export const ADD_FAVORITE = '[FAVORITE] Add';
export const REMOVE_FAVORITE = '[FAVORITE] remove';
export const RECOVERY_FAVORITES = '[FAVORITES] recovery';

export class AddFavorite implements Action {
    readonly type =  ADD_FAVORITE;

    constructor(public payload:Favorite){}
}

export class RemoveFavorite implements Action {
    readonly type =  REMOVE_FAVORITE;

    constructor(public payload:number){}
}

export class RecoveryFavorites implements Action {
    readonly type =  RECOVERY_FAVORITES;

    constructor(public payload:Array<Favorite>){}
}

export type Actions = AddFavorite | RemoveFavorite | RecoveryFavorites;