import { FASTElement, customElement, html, attr, ref, css } from "@microsoft/fast-element";

@customElement({
    name: 'my-search',
    template: html<MySearch>`
        <label>
            ${x => x.label}
            <input type="search" ${ref('searchInput')} @search="${x => x.searchHandler()}" />
        </label>
        <button @click="${x => x.buttonClickHandler()}"> 
            <slot>Search</slot>
        </button>
    `,
    styles: css`
        :host {
            --font-size: 1rem;
            --padding: 0.25rem;

            font-size: var(--font-size);
            display: block; 
        }

        input {
            font-size: var(--font-size);
            padding: var(--padding);
        }

        button {
            cursor: pointer;
            font-size: var(--font-size);
            padding: var(--padding);
        }
    `
})
export class MySearch extends FASTElement {
    @attr label:string = 'My Search';
    searchInput!: HTMLInputElement;

    private searchHandler() {
        this.$emit('find', this.searchInput.value);
    }

    private buttonClickHandler() {
        this.$emit('find', this.searchInput.value);
    }
}