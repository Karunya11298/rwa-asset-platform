import { Test, TestingModule } from '@nestjs/testing';
import { AssetsService } from './assets.service.js';

describe('AssetsService', () => {
  let service: AssetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetsService],
    }).compile();

    service = module.get<AssetsService>(AssetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all assests' , () => {
    const assets = service.findAll();
    expect(assets.length).toBe(2);
  })
  it('should create an asset' , () =>{
    const createAssetDto = {
      name: 'solar',
      type:'renewable',
      value: 100000
    }
    const newAsset = service.create(createAssetDto);
    expect(newAsset.name).toBe('solar');
    expect(newAsset.type).toBe('renewable');
    expect(newAsset.value).toBe(100000);
  })
});
