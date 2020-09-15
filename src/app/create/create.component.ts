import {
  Component, 
  OnInit,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { TutorialAction } from './../actions/tutorial.actions'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addTutorial(name: any, url: any) {
    this.store.dispatch(new TutorialAction.Add({name: name, url: url}))
  }
}
