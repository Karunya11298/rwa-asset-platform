import { Test, TestingModule } from '@nestjs/testing';
import { AssetsService } from './assets.service.js';
import { CreateAssetDto } from './dto/create-asset.dto.js';
import { Asset } from './entities/asset.entity.js';
import { NotFoundException } from '@nestjs/common';

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
  it('should return an asset by id', () =>
  {
    const asset = service.findOne(1);
    expect(asset?.id).toBe(1)
  })
  it('should update asset', () => {
    const updatedAsset = service.update(1, { value: 1200000})
    expect(updatedAsset.value).toBe(1200000)
  })
  it('should throw error when asset is not found', () => {
    expect(() => service.update(999, {value: 100000})).toThrow(NotFoundException);
  })
  it('should remove an asset', () => {
    service.remove(1);
    expect(service.findOne(1)).toBeUndefined();
  })
  it('should throw an error when asset is not found', () => {
    expect( () => service.remove(999)).toThrow(NotFoundException);
  })
});
