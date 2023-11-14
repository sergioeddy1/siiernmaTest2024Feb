import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/product.interface';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsTreeMap from 'highcharts/modules/treemap';
import HighchartsTreeGraph from 'highcharts/modules/treegraph';
import HighchartsTreeGrid from 'highcharts/modules/treegrid';
import { MetaODS, Ods, SecuenciaOds } from '../../interfaces/ods.interface';
import { DGService } from '../../services/dg.service';

@Component({
  selector: 'app-ods-page',
  templateUrl: './ods-page.component.html',
  styleUrls: ['./ods-page.component.css']
})
export class OdsPageComponent implements OnInit{

  public OdsArray: any[]=[]
  public MetaArray: any[]=[]

  public products: Products[] = [];
  public ods?: SecuenciaOds[]=[];
  public objetivods: Ods[]=[];
  public metaods: MetaODS[]=[];
  objetivo: Ods[] = [];
  meta: MetaODS []= [];

  filteredProducts: Products[] = [];
  noProductsFound: boolean = false;
  odsImg: boolean = false;
  showFilteredProducts = false;

  longitudesPorIdObj: { [key: number]: number } = {};

  longitudesPorIdMeta: { [key: number]: number } = {};

  iconosObj: { [key: number]: string } = {
    1: 'bi-people',
    2: 'bi-egg',
    3: 'bi-heart-pulse',
    4: 'bi-book',
    5: 'bi-gender-ambiguous',
    6: 'bi-moisture',
    7: 'bi-power',
    8: 'bi-graph-up-arrow',
    9: 'bi-boxes',
    10: 'bi-list-nested',
    11: 'bi-building',
    12: 'bi-infinity',
    13: 'bi-globe-americas',
    14: 'bi-water',
    15: 'bi-tree',
    16: 'bi-diagram-2',
    17: 'bi-flower2',
  };

  iconosMeta: { [key: number]: string } = {
    1: 'bi-people',
    2: 'bi-people',
    3: 'bi-people',
    4: 'bi-people',
    5: 'bi-people',
    6: 'bi-people',
    7: 'bi-people',
    8: 'bi-egg',
    9: 'bi-egg',
    10:'bi-egg',
    11:'bi-egg',
    12:'bi-egg',
    13:'bi-egg',
    14:'bi-egg',
    15:'bi-egg',
    16:'bi-heart-pulse',
    17:'bi-heart-pulse',
    18:'bi-heart-pulse',
    19:'bi-heart-pulse',
    20:'bi-heart-pulse',
    21:'bi-heart-pulse',
    22:'bi-heart-pulse',
    23:'bi-heart-pulse',
    24:'bi-heart-pulse',
    25:'bi-heart-pulse',
    26:'bi-heart-pulse',
    27:'bi-heart-pulse',
    28:'bi-heart-pulse',
    29:'bi-book',
    30:'bi-book',
    31:'bi-book',
    32:'bi-book',
    33:'bi-book',
    34:'bi-book',
    35:'bi-book',
    36:'bi-book',
    37:'bi-book',
    38:'bi-book',
    39:'bi-gender-ambiguous',
    40:'bi-gender-ambiguous',
    41:'bi-gender-ambiguous',
    42:'bi-gender-ambiguous',
    43:'bi-gender-ambiguous',
    44:'bi-gender-ambiguous',
    45:'bi-gender-ambiguous',
    46:'bi-gender-ambiguous',
    47:'bi-gender-ambiguous',
    48:'bi-moisture',
    49:'bi-moisture',
    50:'bi-moisture',
    51:'bi-moisture',
    52:'bi-moisture',
    53:'bi-moisture',
    54:'bi-moisture',
    55:'bi-moisture',
    56:'bi-power',
    57:'bi-power',
    58:'bi-power',
    59:'bi-power',
    60:'bi-power',
    61:'bi-graph-up-arrow',
    62:'bi-graph-up-arrow',
    63:'bi-graph-up-arrow',
    64:'bi-graph-up-arrow',
    65:'bi-graph-up-arrow',
    66:'bi-graph-up-arrow', 
    67:'bi-graph-up-arrow', 
    68:'bi-graph-up-arrow', 
    69:'bi-graph-up-arrow', 
    70:'bi-graph-up-arrow', 
    71:'bi-graph-up-arrow', 
    72:'bi-graph-up-arrow', 
    73:'bi-boxes',
    74:'bi-boxes',
    75:'bi-boxes',
    76:'bi-boxes',
    77:'bi-boxes',
    78:'bi-boxes',
    79:'bi-boxes',
    80:'bi-boxes',
    81: 'bi-list-nested', 
    82: 'bi-list-nested', 
    83: 'bi-list-nested', 
    84: 'bi-list-nested', 
    85: 'bi-list-nested', 
    86: 'bi-list-nested', 
    87: 'bi-list-nested', 
    88: 'bi-list-nested', 
    89: 'bi-list-nested', 
    90: 'bi-list-nested', 
    91: 'bi-building',
    92: 'bi-building',
    93: 'bi-building',
    94: 'bi-building',
    95: 'bi-building',
    96: 'bi-building',
    97: 'bi-building',
    98: 'bi-building',
    99: 'bi-building',
    100:'bi-building',
    101:'bi-infinity',
    102:'bi-infinity',
    103:'bi-infinity',
    104:'bi-infinity',
    105:'bi-infinity',
    106:'bi-infinity',
    107:'bi-infinity',
    108:'bi-infinity',
    109:'bi-infinity',
    110:'bi-infinity',
    111:'bi-infinity',
    112:'bi-globe-americas',
    113:'bi-globe-americas',
    114:'bi-globe-americas',
    115:'bi-globe-americas',
    116:'bi-globe-americas',
    117:'bi-water',
    118:'bi-water',
    119:'bi-water',
    120:'bi-water',
    121:'bi-water',
    122:'bi-water',
    123:'bi-water',
    124:'bi-water',
    125:'bi-water',
    126:'bi-water',
    127:'bi-tree',
    128:'bi-tree',
    129:'bi-tree',
    130:'bi-tree',
    131:'bi-tree',
    132:'bi-tree',
    133:'bi-tree',
    134:'bi-tree',
    135:'bi-tree',
    136:'bi-tree',
    137:'bi-tree',
    138:'bi-tree',
    139:'bi-diagram-2',
    140:'bi-diagram-2',
    141:'bi-diagram-2',
    142:'bi-diagram-2',
    143:'bi-diagram-2',
    144:'bi-diagram-2',
    145:'bi-diagram-2',
    146:'bi-diagram-2',
    147:'bi-diagram-2',
    148:'bi-diagram-2',
    149:'bi-diagram-2',
    150:'bi-diagram-2',
    151:'bi-flower2',
    152:'bi-flower2',
    153:'bi-flower2',
    154:'bi-flower2',
    155:'bi-flower2',
    156:'bi-flower2',
    157:'bi-flower2',
    158:'bi-flower2',
    159:'bi-flower2',
    160:'bi-flower2',
    161:'bi-flower2',
    162:'bi-flower2',
    163:'bi-flower2',
    164:'bi-flower2',
    165:'bi-flower2',
    166:'bi-flower2',
    167:'bi-flower2',
    168:'bi-flower2',
    169:'bi-flower2',
  };
  

  coloresHexadecimales: { [key: number]: string } = {
    1: '#dc1e39',  
    2: '#d8a72c',  
    3: '#57a141',  
    4: '#bf1d2b',
    5: '#e53d24',  
    6: '#4cbfe8',  
    7: '#f6c300',
    8: '#9c1a43',  
    9: '#e96922',  
    10: '#d41067',
    11: '#f19c10',  
    12: '#bb8c1f',  
    13: '#488043',
    14: '#3d98d7',  
    15: '#66ba3f',  
    16: '#296ba0',
    17: '#1f496c',
  }


  constructor(
    private _direServices: DGService
    )
    {}


    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    filterProductsByObjetivo(objetivo: any[]): any[] {
      return this.products.filter(data => objetivo.some(obj => obj.interview__id === data.interview__id));
    }
  
    filterProductsByMeta(meta: any[]): any[] {
      return this.products.filter(data => meta.some(meta => meta.interview__id === data.interview__id));
    }
  

    odsByProducts(){

      this.filteredProducts = this.products.filter(data => this.ods?.some(ods => ods.interview__id === data.interview__id))
       console.log(this.filteredProducts)

       if (this.filteredProducts.length === 0) {
        this.noProductsFound = true;
      } else {
        this.noProductsFound = false;
      }
   }

   
    SeleccionODS(event: any) {
      const id = event.target.value;
      this._direServices.metasByparentid(id)
        .subscribe(data => {
          this.meta = data;
          console.log(id);

        if (id >= 1) {
          this.odsImg = true;
        }
      });
    }

  ngOnInit(): void{

    this._direServices.productos()
    .subscribe(data => this.products = data )

    this._direServices.objetivos()
  .subscribe( objetivoOds => this.objetivods = objetivoOds)

  this._direServices.metas()
  .subscribe( metaOds => this.metaods = metaOds)
  
  
  this._direServices.ods()
      .subscribe(dato => {
        this.ods = dato;
        console.log( this.ods);
      
        this.OdsArray = [];
        this.MetaArray = [];

        for (let i = 1; i <= 17; i++) {
          const objetivo = this.ods.filter(data => data.obj_ods === i);
          this.OdsArray[i] = this.filterProductsByObjetivo(objetivo);
        }
      
        for (let i = 1; i <= 17; i++) {
          this.longitudesPorIdObj[i] = this.OdsArray[i].length || 0;
        }

        for (let i = 1; i <= 169; i++) {
          const meta = this.ods.filter(data => data.meta_ods === i);
          this.MetaArray[i] = this.filterProductsByMeta(meta);
        }
      
        for (let i = 1; i <= 169; i++) {
          this.longitudesPorIdMeta[i] = this.MetaArray[i].length || 0;
        }


    var Highcharts = require('highcharts');
  
      
  
      HighchartsAccessibility(Highcharts);
      HighchartsExporting(Highcharts);
      HighchartsTreeMap(Highcharts);
      HighchartsTreeGraph(Highcharts);
      HighchartsTreeGrid(Highcharts);
      HighchartsTreeGraph(Highcharts);

  

    var colors = Highcharts.getOptions().colors
    const objetivosData = [];
     for (let i = 1; i <= 17; i++) {
      objetivosData.push({
         name: `Objetivo ${i}`,
         y: this.OdsArray[i]?.length || 0,
         color: colors[i + 1] 
       });
    }


  Highcharts.chart('container-pie-obj', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Productos del INEGI que se apegan determinados Componentes',
        align: 'center'
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: ' productos'
    },
    series: [{
        name: 'Objetivo',
        data: objetivosData,
        size: '100%',
        dataLabels: {
            color: '#113250',
            distance: 10,
            format: '<b>{point.name}:</b><br><span style="text-allign: center;">{point.y} Productos</span>',
            filter: {
                property: 'y',
                operator: '>',
                value: 1
            },
            style: {
                fontWeight: 'normal'
            }
        }
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                series: [{
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }]
    }
  });

  // Grafico para meta

  var colors = Highcharts.getOptions().colors
  const metaData = [];
  for (let i = 1; i <= 169; i++) {
    metaData.push({
      name: `Meta ${i}`,
      y: this.MetaArray[i]?.length || 0,
      color: colors[i + 1] 
    });
  }

  // Create the chart
  Highcharts.chart('container-pie-meta', {
  chart: {
      type: 'pie'
  },
  title: {
      text: 'Productos del INEGI que se apegan determinados Componentes',
      align: 'center'
  },
  plotOptions: {
      pie: {
          shadow: false,
          center: ['50%', '50%']
      }
  },
  tooltip: {
      valueSuffix: ' productos'
  },
  series: [{
      name: 'Meta',
      data: metaData,
      size: '100%',
      dataLabels: {
          color: '#113250',
          format: '<b>{point.name}:</b><br><span style="text-allign: center;">{point.y} Productos</span>',
          filter: {
              property: 'y',
              operator: '>',
              value: 1
          },
          style: {
              fontWeight: 'normal'
          }
      }
  }],
  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              series: [{
                  dataLabels: {
                      enabled: false
                  }
              }]
          }
      }]
  }
  });

     }
  )}
}
