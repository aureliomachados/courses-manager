import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    courseId: number;

    constructor(private route: ActivatedRoute){

    }

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        if(id){
            this.courseId = + id;
        }
    }
}