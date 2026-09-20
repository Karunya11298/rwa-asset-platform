import { Injectable } from '@nestjs/common';
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
      id: this.assets.length,
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
    return `This action returns a #${id} asset`;
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
