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
import { ImmutableContext, ImmutableSelector } from '@ngxs-labs/immer-adapter';


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
    @ImmutableSelector()
    static getTutorials(state: TutorialStateModel) {
        return state.tutorials.reverse();
    }

    @Action(TutorialAction.Add)
    @ImmutableContext()
    add({ setState }: StateContext<TutorialStateModel>, 
        { payload }: TutorialAction.Add) {
        setState((state: TutorialStateModel) => {
            state.tutorials.push(payload);
            return state;
        });
    }

    @Action(TutorialAction.Remove)
    @ImmutableContext()
    remove({ setState }: StateContext<TutorialStateModel>, 
        { payload }: TutorialAction.Remove) {
        setState((state: TutorialStateModel) => {
            state.tutorials.filter(aTutorial =>
                aTutorial.name != payload);
            return state;
        });
    }
}