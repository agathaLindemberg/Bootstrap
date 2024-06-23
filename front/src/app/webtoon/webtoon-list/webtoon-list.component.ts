import { Component, OnInit } from '@angular/core';
import { Webtoon } from '../webtoon';
import { WebtoonService } from 'src/app/services/webtoon.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-webtoon-list',
  templateUrl: './webtoon-list.component.html',
  styleUrls: ['./webtoon-list.component.css']
})
export class WebtoonListComponent implements OnInit {

  webtoons: Webtoon[] = [];
  webtoonSelecionado: Webtoon;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: WebtoonService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getWebtoon().subscribe(resp =>
      this.webtoons = resp
    );
  }

  novoCadastro() {
    this.router.navigate(['/webtoon-form'])
  }

  preparaDelecao(webtoon: Webtoon) {
    this.webtoonSelecionado = webtoon;
  }

  deletarWebtoon(webtoon: Webtoon) {
    this.service.deletar(this.webtoonSelecionado).subscribe(
      response => {
        this.mensagemSucesso = 'Webtoon deletado com sucesso!'
        this.ngOnInit();
      },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar a webtoon');
  }
}
