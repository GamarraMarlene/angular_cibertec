import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shortText'
})
export class ShortTextPipe implements PipeTransform{
    transform(text: string, len: number, otroParametro): string{
        // Producto d...,10
        console.log(otroParametro);
        return text.length > len ? text.substr(0, len) +'...' : text;
    }
}