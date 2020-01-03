import { Component, OnInit } from "@angular/core";
import * as email from 'nativescript-email';


@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
 composeOptions: email.ComposeOptions;
 toModel;
 ccModel;
 subjectModel;
 bodyModel;

    constructor() {
	
	}

    ngOnInit(): void {
        // this.sendEmail();
		
    }

    sendEmail() {
		const toArray: any = this.toModel.split(',');
		console.log('values', toArray);
		const ccArray: any = this.ccModel.split(',');
		
		 this.composeOptions = {
            to: toArray,
            cc: ccArray,
            subject: this.subjectModel,
            body: this.bodyModel
        }
		
		
        email.available().then(available => {
            console.log(`The device email status is ${available}`);
            if(available){
                email.compose(this.composeOptions).then(result => {
                    console.log(result);
					console.log(this.composeOptions);
                    if(result) {
                        console.log(`The email was sent! ${result}`);
                    } else {
                        console.log(`The email may not have been sent`);
                    }
                }).catch(error => console.error(error));
            }
        }).catch(error => console.error(error));
    }



}
