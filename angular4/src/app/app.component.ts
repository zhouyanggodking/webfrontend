import { Component, OnInit } from "@angular/core";
import { RxjsDemoService } from "./rxjs-demo.service";

@Component({
  selector: "gk-app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private rxjsDemo: RxjsDemoService){}

  ngOnInit(): void {
    this.rxjsDemo.creation();
    this.rxjsDemo.commonOperators();
  }
  title = "app";
}
