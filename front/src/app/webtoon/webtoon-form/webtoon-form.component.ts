import { Component, OnInit } from '@angular/core';
import { Webtoon } from '../webtoon';
import { WebtoonService } from 'src/app/services/webtoon.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-webtoon-form',
  templateUrl: './webtoon-form.component.html',
  styleUrls: ['./webtoon-form.component.css']
})
export class WebtoonFormComponent implements OnInit {

  webtoon: Webtoon;
  success: boolean = false;
  id: number;

  constructor(
    private service: WebtoonService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.webtoon = new Webtoon();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getWebtoonById(this.id)
          .subscribe(resp => {
            this.webtoon = resp;
          });
      }
    });
  }


  onSubmit() {
    if (this.id) {
      this.service
        .atualizar(this.webtoon)
        .subscribe(resp => {
          this.success = true;
          this.webtoon = resp;
        })
    } else {
      this.service
        .salvar(this.webtoon)
        .subscribe(resp => {
          this.success = true;
          this.webtoon = resp;
        })
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/webtoon-list'])
  }

}
