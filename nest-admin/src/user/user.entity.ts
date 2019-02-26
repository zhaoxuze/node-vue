import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// entity装饰器提供一个options可以配置关联的表名,引擎等等,具体看她的interface
// 不提供name的话,,类名就是表名了

@Entity({
  name: 'sx_admin',
})
export class Users {
  @PrimaryGeneratedColumn() id: number;

  // 用户名
  @Column('varchar', { length: 100 })
  admin_name: string;

  // 用户密码
  @Column('varchar', { length: 255 }) admin_passwd: string;

  // 创建时间
  @Column('timestamp') created_at: number;
  // 更新时间
  @Column('timestamp') updated_at: number;
  // 是否启用
  @Column('int') admin_status: number;
}