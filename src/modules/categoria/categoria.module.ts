import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { databaseProvider } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';
import { categoriaProviders } from './categoria.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriaController],
  providers: [CategoriaService, ...categoriaProviders],
})
export class CategoriaModule {}
