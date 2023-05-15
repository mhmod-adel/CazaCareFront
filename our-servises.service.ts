import { Injectable } from '@angular/core';
import { Service } from '../ViewModels/service';

@Injectable({
  providedIn: 'root'
})
export class OurServisesService {
  items:Service[]=[];
  constructor(  ) { 
    this.items = [
      {
        imgUrl: "assets/gardenWork.png",
        title: 'اعمال الحدائق',
        description: ' تصميم الحدائق والمساحات الخضراء والاهتمام بالأشجار والأزهار والعشب'
      },
      {
        imgUrl: 'assets/elderHelp.png',
        title: 'رعاية كبار السن',
        description: 'توفير الرعاية الصحية والشخصية والاجتماعية اللازمة لهم وتوفير الدعم النفسي'
      },
      {
        imgUrl: 'assets/HospIcon.png',
        title:'أعمال الضيافه',
        description: 'تقدم الشركة خدمات الضيافة في المنزل وتنظيم الحفلات والمناسبات الخاصة'
      },
      {
        imgUrl: "assets/cleanIcon.png",
        title: 'اعمال النظافة',
        description: 'تقدم الشركة خدمات النظافة للمنازل والمكاتب والمنشآت التجارية والفنادق'
      },
      {
        imgUrl: 'assets/travelIcon.png',
        title: 'خدمات انتقال',
        description: 'تقدم خدمات نقل البضائع أو الأشخاص من مكان إلى آخر'
      },
      {
        imgUrl: 'assets/worker.png',
        title:'اعمال الصيانة',
        description: 'تشمل إصلاح الأجهزة المنزلية والتمديدات الكهربائية والسباكة والتكييف والدهان والترميم'
      }
    ];}



   getOurServices(){
    return this.items;
   }
}
