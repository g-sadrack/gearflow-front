import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteBusca } from './cliente-busca';

describe('ClienteBusca', () => {
  let component: ClienteBusca;
  let fixture: ComponentFixture<ClienteBusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteBusca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteBusca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
