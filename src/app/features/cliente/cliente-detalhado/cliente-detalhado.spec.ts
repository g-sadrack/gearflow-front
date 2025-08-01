import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDetalhado } from './cliente-detalhado';

describe('ClienteDetalhado', () => {
  let component: ClienteDetalhado;
  let fixture: ComponentFixture<ClienteDetalhado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteDetalhado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteDetalhado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
