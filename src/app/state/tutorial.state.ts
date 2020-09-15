import {
    State,
    Action,
    StateContext,
    Selector,
} from '@ngxs/store';
import { Tutorial, } from './../models/tutorial.model'
import {
    TutorialAction,
} from './../actions/tutorial.actions'


export class TutorialStateModel {
    tutorials: Tutorial[];
}

@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})
export class TutorialState {

    @Selector()
    static getTutorials(state: TutorialStateModel) {
        return state.tutorials;
    }

    @Action(TutorialAction.Add)
    add({ getState, patchState }: StateContext<TutorialStateModel>, 
        { payload }: TutorialAction.Add) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, payload],
        })
    }

    @Action(TutorialAction.Remove)
    remove({ getState, patchState }: StateContext<TutorialStateModel>, 
        { payload }: TutorialAction.Remove) {
        patchState({
            tutorials: getState().tutorials.filter(a => a.name != payload),
        })
    }
}