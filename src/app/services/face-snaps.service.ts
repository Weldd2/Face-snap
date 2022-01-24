import {Injectable} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 0,
      title: 'Antoine',
      description: 'Un gros bg avec de grosses fesses !',
      imageUrl: 'https://profile-images.xing.com/images/73c18beb6d87c6bcc208b85465857015-1/antoine-mura.256x256.jpg',
      createdDate: new Date(),
      snaps: 190
    },
    {
      id: 1,
      title: 'Adeline',
      description: 'Un gros bg avec de grosses fesses !',
      imageUrl: 'https://profile-images.xing.com/images/73c18beb6d87c6bcc208b85465857015-1/antoine-mura.256x256.jpg',
      createdDate: new Date(),
      snaps: 140,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Benjamin',
      description: 'Un gros bg avec de grosses fesses !',
      imageUrl: 'https://profile-images.xing.com/images/73c18beb6d87c6bcc208b85465857015-1/antoine-mura.256x256.jpg',
      createdDate: new Date(),
      snaps: 0
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error('FaceSnap not found!');
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const snap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? snap.snaps++ : snap.snaps--;
  }


}

