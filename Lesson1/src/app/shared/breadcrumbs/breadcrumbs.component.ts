import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../core/auth-service.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from '@angular/router';
import { CoursesService } from '../../core/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: {
    name: string;
    url: string
  }[] = [];

  constructor(private authService: AuthServiceService, private router: Router, private activatedRoute: ActivatedRoute, private courseSrvice: CoursesService) { }

  ngOnInit() {
   this.breadcrumbs.push({name:"Courses List", url:"/"}); 
    this.activatedRoute.params.subscribe((data) => {
      if (!isNaN(Number(data['id'])))
      {
        this.breadcrumbs.push({name:this.courseSrvice.GetCourseById(data['id']).title, url:""}); 
      }
      else if (data['id'] == "new")
      {
        this.breadcrumbs.push({name:"New page", url:""}); 
      }
    })
  }

  public isAuth()
  {
    return this.authService.IsAuthenticated();
  }

}
