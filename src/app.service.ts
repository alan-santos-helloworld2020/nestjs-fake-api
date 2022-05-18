import { Injectable } from '@nestjs/common';
import { ICliente } from './models/ICliente';

@Injectable()
export class AppService {
  db: ICliente[] = [];

  findAll(): ICliente[] {
    return this.db;
  }

  findById(id: number): ICliente {
    return this.db.find((c) => c.id == id);
  }

  save(cliente: ICliente): ICliente {
    cliente.id = this.db.length;
    this.db.push(cliente);
    return cliente;
  }

  update(id: number, cliente: ICliente): ICliente {
    const old = this.db.find((c) => c.id == id);
    const index = this.db.findIndex((c) => c.id == id);

    old.nome = cliente.nome;
    old.telefone = cliente.telefone;
    old.email = cliente.email;
    old.cep = cliente.cep;
    this.db[index] = old;
    return old;
  }

  delete(id: number): boolean {
    const index = this.db.findIndex((c) => c.id == id);
    if (index >= 0) {
      this.db.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}
