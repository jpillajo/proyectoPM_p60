import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosPuestoAdopcionPersonaPage } from './datos-puesto-adopcion-persona.page';

describe('DatosPuestoAdopcionPersonaPage', () => {
  let component: DatosPuestoAdopcionPersonaPage;
  let fixture: ComponentFixture<DatosPuestoAdopcionPersonaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPuestoAdopcionPersonaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosPuestoAdopcionPersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
