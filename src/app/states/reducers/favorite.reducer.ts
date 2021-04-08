      
import { Action } from '@ngrx/store';
import * as FavoriteActions from '../actions/favorite.action';
import Favorite from 'src/app/interfaces/favorite.interface';

     
    const InitialState:Array<Favorite> = [];
    export function reducerFavorite(state:Favorite[] = InitialState,action:FavoriteActions.Actions){
        switch(action.type){
            case FavoriteActions.ADD_FAVORITE:
                return [...state,action.payload];
            case FavoriteActions.REMOVE_FAVORITE:
                return state.filter((favorite:Favorite) => favorite.id!==action.payload)    
            case FavoriteActions.RECOVERY_FAVORITES:
                    return [...action.payload];    
            default:
                return state;    
        }
    }