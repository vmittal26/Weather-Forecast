import { FETCH_WEATHER } from '../actions/action_weather';

export default function(state = [] , action){
   switch(action.type) {
   case FETCH_WEATHER:
       console.log(action);
       return [action.payload.data,...state];
   }
   return state;
}