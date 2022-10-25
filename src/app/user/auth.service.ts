import { Injectable } from "@angular/core";
import { last } from "rxjs";
import { IUser } from "./user.model";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
    currentUser!: IUser;
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: 'enrique',
            lastName: 'Pastrana',
            firstName: 'Enrique'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}