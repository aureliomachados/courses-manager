import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { ReplaceModule } from "../shared/pipe/replace.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        //CommonModule é necessário para importar recursos que são carregados automaticamente no 
        //app module mas não é carregado nos módulos customizados.
        CommonModule,
        FormsModule,
        StarModule,
        ReplaceModule,
        RouterModule.forChild([
             {
                path: 'courses', component: CourseListComponent
              },
              {
                path: 'courses/info/:id', component: CourseInfoComponent
              }
        ])
    ]
})
export class CourseModule{

}