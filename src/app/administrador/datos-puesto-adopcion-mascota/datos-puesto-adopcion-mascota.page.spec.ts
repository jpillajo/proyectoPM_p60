import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosPuestoAdopcionMascotaPage } from './datos-puesto-adopcion-mascota.page';

describe('DatosPuestoAdopcionMascotaPage', () => {
  let component: DatosPuestoAdopcionMascotaPage;
  let fixture: ComponentFixture<DatosPuestoAdopcionMascotaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPuestoAdopcionMascotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosPuestoAdopcionMascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
