declare const CONTAINER_SELECTOR = ".n-hopin-styleguide-js-typography";
declare const ORIG_TEXT_ATTRIB = "n-hopin-styleguide-typograhy_orig_text";
declare const DETAILS_CLASS_SELECTOR = "n-hopin-styleguide-js-font-details";
declare class Typography {
    container: HTMLElement;
    canvas1: HTMLCanvasElement;
    canvas2: HTMLCanvasElement;
    constructor();
    createCanvas(): HTMLCanvasElement;
    updateTypeInfo(): void;
    getCurrentFont(fontFamily: string): string;
    isfontUsed(f: string): boolean;
    isImgDataMatching(data1: ImageData, data2: ImageData): boolean;
    printText(canvas: HTMLCanvasElement, text: string, fonts: string[]): ImageData;
}
