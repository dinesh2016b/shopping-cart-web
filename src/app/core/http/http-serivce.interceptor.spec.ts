import { TestBed } from '@angular/core/testing';

import { HttpSerivceInterceptor } from './http-serivce.interceptor';

describe('HttpSerivceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpSerivceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpSerivceInterceptor = TestBed.inject(HttpSerivceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
