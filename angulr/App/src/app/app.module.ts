import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AttributeDirective } from './attribute.directive';
import { CustomsDirective } from './customs.directive';
import { LaptopComponent } from './laptop/laptop.component';
import { BookComponent } from './book/book.component';
import { ThirdComponent } from './third/third.component';
import { RouterModule, Routes } from '@angular/router';
import { Children1Component } from './laptop/children1/children1.component';
import { Children2Component } from './laptop/children2/children2.component';
import { Children3Component } from './laptop/children3/children3.component';
// routing for pages
const approutes=[
  {path:'child/:st',component:ChildComponent},
  {path:'book/:id',component:BookComponent},
  {path:'laptop', component:LaptopComponent, children:[
    {path:'children1',component:Children1Component},
    {path:'children2',component:Children2Component},
    {path:'children3',component:Children3Component},
    {path:'',pathMatch:'full', redirectTo:'children1'}
  ]},
  {path:'third',component:ThirdComponent},
  {path:'',pathMatch:'full',redirectTo:'/child'}
]
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AttributeDirective,
    CustomsDirective,
    LaptopComponent,
    BookComponent,
    ThirdComponent,
    Children1Component,
    Children2Component,
    Children3Component,
   
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
