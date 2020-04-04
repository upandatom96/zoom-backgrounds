import { Component, Input } from "@angular/core";
import { Background } from "src/app/models/Background.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-background-card",
  templateUrl: "./background-card.component.html",
  styleUrls: ["./background-card.component.scss"]
})
export class BackgroundCardComponent {
  @Input() public background: Background = null;

  public get show(): boolean {
    return BooleanHelper.hasValue(this.background);
  }
}
