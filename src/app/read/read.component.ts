import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Store, 
  Select,
} from '@ngxs/store';
import { Tutorial } from './../models/tutorial.model';
import { TutorialState } from './../state/tutorial.state';
import { Observable } from 'rxjs';
import { TutorialAction } from './../actions/tutorial.actions';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Select(TutorialState.getTutorials) 
  tutorials$: Observable<Tutorial>

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  deleteTutorial(name: string) {
    this.store.dispatch(new TutorialAction.Remove(name));
  }
}
