import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'vue'];
  

  userModel = new User('Rob', 'rob@test.com', 555555555, '', 'morning', true);
}
