import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto.js';
import { UpdateAssetDto } from './dto/update-asset.dto.js';

@Injectable()
export class AssetsService {
  private assets = [
     {
        id:1,
        name: 'Solar Farm A',
        type: 'Renewable Energy',
        value:1000000
      },
      {
        id: 2,
        name: 'Gold Reserve A',
        type: 'Commodity',
        value:500000
      }
  ]
  create(createAssetDto: CreateAssetDto) {
    const newAsset = {
      id: this.assets.length + 1,
      name: createAssetDto.name,
      type: createAssetDto.type,
      value: createAssetDto.value
    }
    this.assets.push(newAsset);
    return newAsset;
  }

  findAll() {
    return this.assets;
  }

  findOne(id: number) {
  return this.assets.find(asset => asset.id === id);
}

  update(id: number, updateAssetDto: UpdateAssetDto) {
    const asset = this.assets.find(asset => asset.id === id);
    if(!asset){
      throw new NotFoundException('Asset not found');
    }
    Object.assign(asset, updateAssetDto);
    return asset;
  }

  remove(id: number) {
    const index = this.assets.findIndex( asset => asset.id === id);
    if(index  === -1){
      throw new NotFoundException('invalid index');
    }
    this.assets.splice(index, 1);
  }
}
