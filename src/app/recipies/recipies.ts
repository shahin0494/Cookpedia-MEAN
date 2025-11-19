import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-recipies',
  imports: [Header, Footer],
  templateUrl: './recipies.html',
  styleUrl: './recipies.css',
})
export class Recipies {

}
