/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetImagesService } from './get-images.service';

describe('GetImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetImagesService]
    });
  });

  it('should ...', inject([GetImagesService], (service: GetImagesService) => {
    expect(service).toBeTruthy();
  }));
});
