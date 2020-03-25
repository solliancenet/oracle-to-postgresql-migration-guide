import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from '../services/speaker.service';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.sass']
})


export class SpeakerComponent implements OnInit, OnDestroy {

  dtSpeaker: Speaker;
  speakerId: any;

  constructor(private route: ActivatedRoute, private speakerService: SpeakerService) { }

  ngOnInit(): void {
    // Getting Speakerid from URL
    this.route.params.subscribe(params => {
      this.speakerId = +params['speakerId'];
    });

    // Get Speaker Detail on SpeakerID
    this.speakerService.getSpeaker(this.speakerId).subscribe(data => {
      this.dtSpeaker = data;
    });
  }

  ngOnDestroy(): void { }

}
