import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'Título do post',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Conteúdo do post',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({
    description: 'Id identificador do author do post',
  })
  @IsNumber()
  @IsNotEmpty()
  authorId: number;
}
