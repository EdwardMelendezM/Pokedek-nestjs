import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeAPI } from './interface/Poke-api.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    const data = await this.http.get<PokeAPI>(
      'https://pokeapi.co/api/v2/pokemon?limit=300',
    );
    await this.pokemonModel.deleteMany();

    const InserManyNewData: Array<{ name: string; no: number }> = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      InserManyNewData.push({ name, no });
    });
    await this.pokemonModel.insertMany(InserManyNewData);

    return 'Seed executed';
  }
}
