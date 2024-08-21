import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { from, map, merge, Observable, of, switchMap } from 'rxjs';
import { ProductsNs } from '../../namespaces/products/products.ns';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-operadores',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './operadores.component.html',
  styleUrl: './operadores.component.css',
})
export class OperadoresComponent implements OnInit {
  public $resultProduct!: Observable<ProductsNs.Detail[]>;
  public $sumaProducts!: Observable<number>;
  public $sumaProducts_Menor10!: Observable<number>;
  public $sumaProducts_Mayor10!: Observable<number>;
  public $resultProductMenores10dolares!: Observable<ProductsNs.Detail[]>;
  productsService = inject(ProductsService);

  ngOnInit(): void {
    this.getData();
    this.getSumas();
    this.getMerge();
    this.createObservables();
    this.combinated();
  }

  getData() {
    // Obtener los productos
    this.$resultProduct = this.productsService.getAll().pipe(
      map((productos) => {
        return productos.map((product) => ({
          ...product,
          title: product.title.toUpperCase(),
        }));
      })
    );

    // Obtener los productos con precio menor a 10
    this.$resultProductMenores10dolares = this.productsService
      .getAll()
      .pipe(
        map((productos) => productos.filter((product) => product.price < 10))
      );
  }

  getSumas() {
    // Obtener la suma de todos los productos
    this.$sumaProducts = this.productsService.getAll().pipe(
      map((productos) => {
        return productos.reduce((acc, product) => acc + product.price, 0);
      })
    );

    // Obtener la suma de los productos con precio menor a 10
    this.$sumaProducts_Menor10 = this.productsService.getAll().pipe(
      map(
        (productos) =>
          productos
            .filter((product) => product.price < 10) // Filtra los productos con precio menor a 10
            .reduce((acc, product) => acc + product.price, 0) // Suma los precios de los productos filtrados
      )
    );

    // Obtener la suma de los productos con precio mayor a 10
    this.$sumaProducts_Mayor10 = this.productsService.getAll().pipe(
      map(
        (productos) =>
          productos
            .filter((product) => product.price >= 10) // Filtra los productos con precio mayor o igual a 10
            .reduce((acc, product) => acc + product.price, 0) // Suma los precios de los productos filtrados
      )
    );
  }

  getMerge() {
    merge(this.$sumaProducts_Menor10, this.$sumaProducts_Mayor10).subscribe(
      (suma) => {
        console.log('Suma de los precios:: ', suma);
      }
    );
  }

  createObservables() {
    // from
    const numeros = [10, 20, 30, 40, 50];
    const $numeros = from(numeros);
    $numeros.subscribe((n) => console.log('mis números observables:', n));

    // Of
    const valores = {param1: 'hola', param2: 'mundo'};
    const $valores = of(valores);
    $valores.subscribe((obj) => console.log('Objeto observable usando Of::', obj))
  }

  combinated() {
    const reglaNegocioMinAge = 18;
    const reglaBeneficioEspecial = 25;

    const datosPersona$ = of({
      name: 'Leonardo',
      apepat: 'Aquino',
      apemat: 'Carhuatocto',
      edad: 30
    });
    const flujoMayores$ = of('eres mayor de edad, aplica tal reglas');
    const flujoMenores$ = of('eres menor de edad, Mensaje de error');
    const flujoBeneficioEspecial$ = of('Tienes más de 25 años, aplican beneficios especiales');

    // datosPersona$.pipe(
    //   switchMap(
    //     (persona) => persona.edad >= reglaNegocioMinAge? flujoMayores$: flujoMenores$
    //   )
    // ).subscribe(mensaje => console.log('Resultado de la regla: ', mensaje))

    datosPersona$.pipe(
      switchMap(
        (persona) => persona.edad >= reglaNegocioMinAge? (
          of(persona).pipe(
            switchMap((p) => p.edad >= reglaBeneficioEspecial? flujoBeneficioEspecial$: flujoMayores$)
          )
        )
        : flujoMenores$
      )
    ).subscribe(mensaje => console.info('Resultado de la regla: ', mensaje))

  }
}
