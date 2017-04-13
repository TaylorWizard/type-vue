import Vue from 'vue';
export default class MyComponent extends Vue {
    message: string;
    helloMsg: string;
    onClick(event: any): void;
    readonly computedMsg: string;
}
