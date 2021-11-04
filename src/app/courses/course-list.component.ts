import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.compnent.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
            id: 1,
            name: 'angular forms',
            imageUrl: '',
            price: 99.99,
            code: 'xps-8796',
            duration: 120,
            rating: 5.4, 
            releaseDate: 'December, 2, 2019'
            },
            {
                id: 1,
                name: 'angular http',
                imageUrl: '',
                price: 49.99,
                code: 'xpz-8096',
                duration: 80,
                rating: 4,
                releaseDate: 'Octuber, 18, 2020'        
                }
        ]
    }
}