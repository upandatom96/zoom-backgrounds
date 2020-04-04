import { Component } from "@angular/core";
import { Background } from "src/app/models/Background.model";
import { BackgroundService } from "src/app/services/background.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent {
  public get backgrounds(): Background[] {
    return this.backgroundService.featuredBackgrounds;
  }

  constructor(
    private backgroundService: BackgroundService,
  ) { }
}
