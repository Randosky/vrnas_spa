import {makeAutoObservable, toJS} from "mobx";

class StateManager {
    constructor() {
        makeAutoObservable(this)
    }
}

export default new StateManager()