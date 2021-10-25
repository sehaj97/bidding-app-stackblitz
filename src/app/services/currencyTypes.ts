import {BehaviorSubject} from "rxjs"
import { Injectable } from "@angular/core";
@Injectable({
providedIn: "root",
})
export class CurrencyTypes {
    public types = new BehaviorSubject<string[]>(["EUR","USD"]);
    changeState(type: string[]) {
        this.types.next(type);
    }

    getTypes() {
        return this.types;
    }
}