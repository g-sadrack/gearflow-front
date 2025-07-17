import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListagem } from './cliente-listagem';

describe('ClienteListagem', () => {
  let component: ClienteListagem;
  let fixture: ComponentFixture<ClienteListagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteListagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteListagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
