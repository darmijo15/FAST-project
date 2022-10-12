import { FASTElement, customElement, html, css, attr } from "@microsoft/fast-element";

@customElement({
    name: 'user-card',
    template: html<UserCard>`
        <div class="user-card">
            <img src="${x => x.avatar}" />
            <div>
                <h3>${x => x.name}</h3>
                <div class="info">
                    <slot name="email"></slot>
                    <slot name="phone"></slot>
                </div>
                <button @click="${x => x.buttonClickHandler()}">
                    Hide Info
                </button>
            </div>
        </div>
    `,
    styles: css`
        .user-card {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }

        .user-card img {
            width: 100%;
        }

        .user-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    `
})
export class UserCard extends FASTElement {
    @attr avatar:string = '';
    @attr name:string = 'Name';

    showInfo = true;

    private buttonClickHandler() {
        this.showInfo = !this.showInfo;

        const info = <HTMLElement>this.shadowRoot?.querySelector('.info');;
        const toggleBtn = <HTMLElement>this.shadowRoot?.querySelector('button');

        if (this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info';
        }
    }
}