declare const CLASSNAMES_CONTAINER_SELECTOR = ".n-hopin-styleguide-js-classnames";
declare class ClassName {
    generateReport(): ClassNameReport;
    render(): void;
    renderNamespaces(report: ClassNameReport): HTMLDivElement;
    renderBEMList(bemElements: {
        [key: string]: BEMBody;
    }): HTMLElement;
    renderElements(elements: {
        [key: string]: BEMElement;
    }): HTMLElement;
    renderModifiers(modifiers: string[]): HTMLElement;
    splitSelectors(selector: string): string[];
}
interface Selector {
    rawSelector: string;
    currentSelector: string;
}
interface BEMElement {
    name: string;
    modifiers: string[];
}
interface BEMBody {
    name: string;
    elements: {
        [key: string]: BEMElement;
    };
    modifiers: string[];
}
interface Namespace {
    name: string;
    types: {
        [key: string]: {
            [key: string]: BEMBody;
        };
    };
}
interface ClassNameReport {
    idSelectors: Selector[];
    ignoredSelectors: Selector[];
    elementSelectors: Selector[];
    validSelectors: Selector[];
    invalidSelectors: Selector[];
    namespaces: {
        [key: string]: Namespace;
    };
}
