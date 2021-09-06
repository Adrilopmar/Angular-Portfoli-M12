import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private router:Router,
      private activatedRoute:ActivatedRoute,
      private titleService:Title,
      private metaService:Meta){}

  title = 'portfolio';
getChild(activatedRoute:ActivatedRoute){
  if(activatedRoute.firstChild){
    return this.getChild(activatedRoute.firstChild);
  }
  else{
    return activatedRoute;
  }
}
  ngOnInit(){
    this.router.events.pipe(
        filter(event =>event instanceof NavigationEnd),).subscribe(()=>{
            var rt = this.getChild(this.activatedRoute)
            rt.data.subscribe(data=>{console.log(data)
            this.titleService.setTitle(data.title)
          
            if(data.description){
              this.metaService.updateTag({name:'description', content: data.description})}
              else{
                this.metaService.removeTag("name='description'")
              }
            if(data.ogTitle){
              this.metaService.updateTag({property:'ogTitle', content: data.ogTitle})
            }
            else{
              this.metaService.removeTag("property='og:title'")
            }
        })
      })
  }
  
}
