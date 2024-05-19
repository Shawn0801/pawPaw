import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import e from 'express';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { pet } from '../interfaces/pet';
import { DataService } from '../services/data.service';
import { gsap } from "gsap";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
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
      this.data = this.data.slice(0, 12);
    })



    // gsap.fromTo(".bn1", { opacity: 0 }, { opacity: 0.5, duration: 6, ease: "elastic" });
    // gsap.to('.btn', {
    //   scrollTrigger: {
    //     trigger: '.btn', // 觸發動畫的元素
    //     start: 'top center', // 當 ".btn" 元素的頂部到達視口中間時觸發動畫
    //     end: 'top 50px', // 當 ".btn" 元素的頂部到達視口 100px 時結束動畫
    //     scrub: true, // 同步滾動動畫
    //     markers: true // 顯示開始和結束標記（僅用於調試）
    //   },
    //   x: 500,
    //   duration: 4
    // });
  }


  /** 轉導 */
  goToGame() {
    this.router.navigate(['event'])
  }


  /** 詳細資訊 */
  goDetil() {

  }
}
