import { Tutorial } from './../models/tutorial.model'

export namespace TutorialAction {
    export class Add {
        static readonly type = '[TUTORIAL] Add'

        constructor(public payload: Tutorial) { }
    }

    export class Remove {
        static readonly type = '[TUTORIAL] Remove'

        constructor(public payload: string) { }
    }
}
