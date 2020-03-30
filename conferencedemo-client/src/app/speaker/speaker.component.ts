import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from '../services/speaker.service';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html'
})

export class SpeakerComponent implements OnInit, OnDestroy {
  speaker: Speaker;
  speakerId: number;
  imgSpeaker: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private speakerService: SpeakerService, private _sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: { speakerId: string }) => {
      this.speakerId = +params.speakerId;
    })

    this.speakerService.getSpeaker(this.speakerId).subscribe(data => {
      this.speaker = data;
      this.imgSpeaker = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + data.speakerPic);
    });
  }

  ngOnDestroy(): void {
  }
}
