import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    clickedButtonLabel;
    sessionId;
    state = 'list';

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }

    handleNavigate(event) {
        this.state = event.detail.state;
        this.sessionId = event.detail.sessionId;
    }

    get isStateList() {
        return this.state === 'list';
    }

    get isStateDetails() {
        return this.state === 'details';
    }
}
