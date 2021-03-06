import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entity';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';
import { RoleEnum } from '../../SecurityModule/enum';

export class NewUserDTO {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  name: User['name'];

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  email: User['email'];

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Expose()
  password: User['password'];

  @ApiProperty({ type: String })
  @Expose()
  urlFacebook: User['urlFacebook'];

  @ApiProperty({ type: String })
  @Expose()
  urlInstagram: User['urlInstagram'];

  @ApiProperty({ enum: RoleEnum })
  @IsNotEmpty()
  @Expose()
  role: RoleEnum;
}
