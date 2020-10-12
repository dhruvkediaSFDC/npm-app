import { LightningElement, api } from 'lwc';
import { getSession } from 'data/sessionService';
export default class sessionDetails extends LightningElement {
    session;
    clickedButtonLabel;
    @api
    set sessionId(id) {
        this._sessionId = id;
        this.session = getSession(id);
    }
    get sessionId() {
        return this._sessionId;
    }

    handleSessionsClick() {
        const navigateEvent = new CustomEvent('navigate', {
            detail: {
                state: 'list'
            }
        });
        this.dispatchEvent(navigateEvent);
    }

    handleClick() {
        this.clickedButtonLabel =
            'You have successfully registered for the event.';
    }

    get options() {
        return [
            { label: 'Product Manager', value: 'product manager' },
            { label: 'Software Engineer', value: 'software engineer' },
            { label: 'Data Scientist', value: 'data scientist' },
            { label: 'UX', value: 'ux' },
            { label: 'Marketing', value: 'marketing' },
            { label: 'Other', value: 'other' }
        ];
    }
}
