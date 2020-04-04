import { Component } from "@angular/core";
import { Background } from "src/app/models/Background.model";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent {
  public backgrounds: Background[] = [
    {
      url: "http://google.com",
      name: "google",
      archived: false,
    },
    {
      url: "http://google.com",
      name: "google",
      archived: false,
    },
    {
      url: "http://google.com",
      name: "google",
      archived: false,
    },
    {
      url: "http://google.com",
      name: "google",
      archived: false,
    },
    {
      url: "http://google.com",
      name: "google",
      archived: false,
    },
    {
      url: "http://google.com",
      name: "google",
      archived: false,
    },
    {
      url: "http://google.com",
      name: "google hide",
      archived: true,
    },
  ];
}
