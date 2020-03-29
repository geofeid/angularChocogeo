import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../shared/feedback';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  feedbacks: Feedback[];
  feedbackForm: FormGroup;
  fb: Feedback;

  pipe = new DatePipe("en-us");
  date = Date.now();
  mySimpleFormat = this.pipe.transform(this.date, 'MMM - dd - yyyy');
  
  
  constructor(private feedBackService: FeedbackService,
    @Inject('BaseURL') public  BaseURL,
    private fbformbuilding: FormBuilder) {this.createForm(); }
    
    ngOnInit() {
     this.feedBackService.getFeedbacks().subscribe(feedbacks => this.feedbacks = feedbacks);
     
     
    }
    createForm() {
      this.feedbackForm = this.fbformbuilding.group({
      firstname: '',
      lastname: '',
      message: ''
      
        
        
      });
    }
    
    onSubmitFeedback() {
      
      
      this.fb = this.feedbackForm.value 
      this.fb.date = this.mySimpleFormat
      console.log(this.fb,);
      
      // this.feedbacks.push(this.fb);
      
      this.feedBackService.addFeedbacks(this.fb).subscribe(fb => this.feedbacks.push(this.fb));
      

      this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        message: ''
        
        
      });

    }

}
