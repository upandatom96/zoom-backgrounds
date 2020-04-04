import { Injectable } from "@angular/core";
import { Background } from "../models/Background.model";
import { BACKGROUNDS } from "../constants/background.constants";

@Injectable({
  providedIn: "root"
})
export class BackgroundService {
  private get allBackgrounds(): Background[] {
    return BACKGROUNDS;
  }

  public get featuredBackgrounds(): Background[] {
    return this.allBackgrounds.filter((background) => {
      return !background.archived;
    });
  }

  public get archivedBackgrounds(): Background[] {
    return this.allBackgrounds.filter((background) => {
      return !background.archived;
    });
  }
}
