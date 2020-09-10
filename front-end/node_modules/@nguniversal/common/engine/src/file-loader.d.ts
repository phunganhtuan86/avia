import { ResourceLoader } from '@angular/compiler';
/** ResourceLoader implementation for loading files */
export declare class FileLoader implements ResourceLoader {
    get(url: string): Promise<string>;
}
