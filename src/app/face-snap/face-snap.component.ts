import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snappedButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit() {
    this.snappedButtonText = "Oh Snap !";
  }

  onSnap() {
    if (this.snappedButtonText == "Oh Snap !") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snappedButtonText = "Snapped !";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snappedButtonText = "Oh Snap !";
    }
  }


}
