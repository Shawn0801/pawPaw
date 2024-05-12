import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import e from 'express';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { pet } from '../interfaces/pet';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  data: pet[] = [];
  k: string | undefined;

  constructor(
    private router: Router,
    private service: DataService,
  ) { }
  ngOnInit(): void {
    this.service.getData().subscribe(e => {
      this.data = e;
    })
    this.k = this.data[0].PICTURE;
  }


  /** 轉導 */
  goToGame() {
    this.router.navigate(['event'])
  }
}
