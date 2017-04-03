import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: any = [];

  constructor(private projectService: ProjectService) { }

  getProject(): void {
    this.projectService.getAllProjects().subscribe(projects => {
      this.projects = projects;
    })  }

  ngOnInit(): void {
    this.getProject()
  }

}
