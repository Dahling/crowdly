import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent {

  constructor(private projectService: ProjectService) { }

  // ngOnInit() {
  // }

  submitForm(name: string, manager: string, type: string, description: string, amount: number) {
    var newProject: Project = new Project(name, manager, type, description, amount);
    this.projectService.addProject(newProject);
  }

}
